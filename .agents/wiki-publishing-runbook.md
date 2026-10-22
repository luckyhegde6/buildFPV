# Wiki Publishing Runbook — buildFPV

This runbook explains how to create and store a credential for the **existing** GitHub Wiki, run the repository checks, publish pages and assets, and verify the live result.

- Source repository: https://github.com/luckyhegde6/buildFPV
- Existing live Wiki: https://github.com/luckyhegde6/buildFPV/wiki
- Wiki Git remote: https://github.com/luckyhegde6/buildFPV.wiki.git
- Publisher: **scripts/publish-wiki.sh**
- Regression test: **scripts/test-wiki-link-rewrite.sh**
- Remote publish/browser workflow: [Publish and verify existing Wiki](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml)

**Do not initialize a replacement Wiki.** A commit to **buildFPV/main** updates the source repository only; it does not publish to the separate Wiki Git remote.

## 1. Understand the two different names

A **personal access token (PAT)** is the secret value generated in GitHub. A **repository Actions secret name** is the label the workflow uses to read that value. They are not the same thing.

The current workflow accepts either of these repository secret names:

- **WIKI_PUBLISH_TOKEN — preferred.** If set, this name takes precedence.
- **GH_PERSONAL_ACCESS_TOKEN — accepted fallback.** Use this name if you prefer the legacy project convention.

Usually, create one PAT and save it under **WIKI_PUBLISH_TOKEN**. Do not create both unless there is a specific reason. If both names exist, the workflow prefers **WIKI_PUBLISH_TOKEN**.

The token must belong to an account that already has permission to push to this repository Wiki. A token cannot grant its owner more access than the account itself has.

## 2. Generate the token

Open [GitHub personal access token settings](https://github.com/settings/personal-access-tokens) while signed in to the GitHub account with Wiki write access.

### Option A — Fine-grained PAT (try first when it works)

1. Go to **Settings → Developer settings → Personal access tokens → Fine-grained tokens**.
2. Choose **Generate new token**.
3. Give it a descriptive name such as “buildFPV Wiki publisher”; set an expiration based on project policy.
4. Set the resource owner to **luckyhegde6**.
5. Limit repository access to **buildFPV** only.
6. Select only the permissions needed for Git operations, starting with **Contents: Read and write** (Metadata read is normally included).
7. Generate the token and copy it immediately into a password manager or directly into the GitHub Actions Secret form.

**Wiki-specific note:** the Wiki has its own Git remote (**buildFPV.wiki.git**). Fine-grained token support can vary by GitHub operation and repository arrangement. Confirm that the token can authenticate to this exact remote. If Git push to the Wiki is rejected despite correct repository selection and permissions, use the classic-token fallback below if allowed by your GitHub policy.

### Option B — Classic PAT fallback for the Wiki Git remote

Use this if the fine-grained token cannot authenticate to the Wiki Git remote, or if your GitHub policy requires a classic token.

1. Go to **Settings → Developer settings → Personal access tokens → Tokens (classic)**.
2. Choose **Generate new token (classic)**.
3. Set a descriptive note such as “buildFPV Wiki publisher” and select an expiration date. Prefer an expiring token and set a reminder to rotate it.
4. For this repository's current **public** visibility, select the minimum suitable classic scope, normally **public_repo** for write access to public repositories.
5. Use the broader **repo** scope only if the target repository is private or the minimum public scope is insufficient for the supported access model. **repo** grants broader access than this project's public Wiki should normally need.
6. Generate the token and copy it immediately; GitHub will not show the full token again.

If the account belongs to an organization that enforces SAML SSO or token-approval rules, authorize the token for that organization or complete the required approval. Organization policies may disable classic PATs.

Official reference: [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens). GitHub recommends fine-grained PATs when the requested operation is supported; classic tokens remain a compatibility fallback for features that require them.

## 3. Save the PAT as a repository Actions secret

The workflow must receive the PAT as a **repository secret**, not a plain variable, a file in the repository, or a chat message.

### Recommended UI method

1. Open [buildFPV Actions secrets](https://github.com/luckyhegde6/buildFPV/settings/secrets/actions).
2. Under **Repository secrets**, click **New repository secret**.
3. Set the Name to exactly **WIKI_PUBLISH_TOKEN**.
4. Paste the PAT into the Secret value field and save it.
5. Re-open the secrets page and confirm the **name** appears in the list. GitHub does not reveal the saved value; that is expected.

If you are intentionally using the fallback, create a repository secret named exactly **GH_PERSONAL_ACCESS_TOKEN** instead. A typo, an environment-only secret, a Codespaces secret, or an uncommitted local environment variable will not satisfy this workflow.

### Optional GitHub CLI method

After authenticating GitHub CLI to the correct account, run the following. The CLI prompts for the secret value; paste the PAT at the prompt, not into the command itself:

    gh auth status
    gh secret set WIKI_PUBLISH_TOKEN --repo luckyhegde6/buildFPV
    gh secret list --repo luckyhegde6/buildFPV

Check that the **name** WIKI_PUBLISH_TOKEN appears. The list command does not reveal its value. GitHub CLI reference: [gh secret set](https://cli.github.com/manual/gh_secret_set).

**Never** place the token in a workflow YAML file, shell script, Markdown file, remote URL, command-line argument, screenshot, issue, commit, or log. Do not print the token or send it to an agent in chat.

## 4. Run the regression test and publish locally

Use a network-enabled machine with Git installed and authenticated to GitHub. GitHub CLI with its Git credential helper or Git Credential Manager is preferred to embedding a token in a URL.

For example, if using GitHub CLI:

    gh auth login
    gh auth setup-git
    gh auth status

Then sync the source repository and run the deterministic link test:

    git clone https://github.com/luckyhegde6/buildFPV.git
    cd buildFPV
    git switch main
    git pull --ff-only origin main
    bash scripts/test-wiki-link-rewrite.sh

Expected regression-test output:

    Wiki link rewrite test passed.

Run the publisher in **interactive review mode** (do not add **--yes** locally):

    bash scripts/publish-wiki.sh

The publisher uses the existing **buildFPV.wiki.git** remote. By default, it creates a sibling checkout at **../buildFPV.wiki** if one does not exist; it will reuse that checkout when present. Authenticate to the Wiki remote when Git requests credentials. With an HTTPS PAT prompt, use your GitHub username and enter the PAT as the password, or let your configured credential manager handle it.

The script fetches and fast-forward-updates the Wiki branch, copies the canonical **docs/wiki-source/*.md** pages and assets, rewrites internal links to extensionless Wiki slugs, stages the managed Markdown and **images/**, and checks the staged diff. It deliberately pauses for confirmation.

### Review the staged diff before confirming

When the publisher reaches its **PUBLISH** prompt, leave that terminal open. In a second terminal, inspect the staged changes in the Wiki checkout:

    git -C ../buildFPV.wiki status --short
    git -C ../buildFPV.wiki diff --cached --check
    git -C ../buildFPV.wiki diff --cached --stat
    git -C ../buildFPV.wiki diff --cached

Check that:
- Home and **_Sidebar.md** navigation is correct.
- The changed pages match the intended files under **docs/wiki-source/**.
- Internal links use the intended page slugs and preserve anchors.
- Images are present under **images/** and image references point there where appropriate.
- No unrelated or intentional Wiki-only content has been overwritten.

Return to the publisher terminal and type exactly **PUBLISH** only after reviewing the diff. The script will commit and push the existing Wiki branch. If anything looks wrong, do not confirm; stop and investigate the staged diff. Do not use **--yes** for a local publish unless an independently reviewed automation explicitly requires unattended publication.

## 5. Publish through GitHub Actions (recommended repeatable path)

The repository has a remote workflow that publishes and verifies in separate jobs. It runs the source link test, configures Git credentials from **WIKI_PUBLISH_TOKEN** (or the fallback secret), calls **scripts/publish-wiki.sh --yes** on a GitHub-hosted runner, then runs headless Playwright and uploads evidence.

1. Confirm the repository secret is configured as described above.
2. Open [Publish and verify existing Wiki](https://github.com/luckyhegde6/buildFPV/actions/workflows/wiki-publish-verify.yml).
3. Choose **Run workflow**, select branch **main**, and start it. Manual dispatch is the clearest way to validate the current workflow after changing code or secrets.
4. Open the new run and inspect **both** jobs:
   - **Publish source pages to the existing Wiki** — require the link test and credential setup to pass, then confirm the publisher actually pushed.
   - **Verify live Wiki with headless Playwright** — inspect the job result and the artifact named **buildfpv-wiki-playwright-evidence**.
5. Download the artifact and review **report.json** and the screenshots. Do not call publication complete solely because the Actions run started or the source repository commit succeeded.

The workflow uses **--yes** only on the GitHub-hosted runner, after it checks that a Wiki credential secret exists. Review the source diff before triggering publication; unattended execution does not replace content review.

## 6. Verify the live Wiki

After a successful Wiki push, verify the actual live pages in a browser. At minimum check:

- [Wiki Home](https://github.com/luckyhegde6/buildFPV/wiki)
- [FPV Chargers, LiPo and Li-ion Battery Safety](https://github.com/luckyhegde6/buildFPV/wiki/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety)
- [FPV Cameras, VTX, VRX and Goggles Compatibility Comparison](https://github.com/luckyhegde6/buildFPV/wiki/FPV-Cameras-VTX-VRX-Compatibility-Comparison)

The current Playwright verifier checks route status/redirects, expected text, table presence and Wiki-local image loading at desktop and mobile viewports. Passing HTTP 200 alone is not enough: GitHub can return Home after a redirect, so verify that each final URL is the requested Wiki page and its intended table rows are visible.

Evidence from the previous executed run is available at [run 39797230235](https://github.com/luckyhegde6/buildFPV/actions/runs/39797230235). That run is **not a success**: the link regression passed and Playwright ran, but publication failed due to a missing secret and the guide URLs redirected to Home. The report and screenshots are historical failure evidence, not proof of a successful publish.

## 7. Troubleshooting

| Symptom | Likely cause | Next action |
|---|---|---|
| Missing WIKI_PUBLISH_TOKEN / GH_PERSONAL_ACCESS_TOKEN secret | Neither accepted Actions secret name is configured or available to the job. | Add a repository Actions secret with one of the exact names above, then manually run the workflow again. |
| Git reports authentication failure or HTTP 403 | Expired/revoked token, wrong account, insufficient repository/Wiki access, unapproved organization token, or unsupported token type. | Confirm the token owner has Wiki write access, review scope/permissions and SSO approval, then rotate the secret if needed. Never print the token. |
| Git says repository not found for buildFPV.wiki.git | Wrong remote, missing Wiki access, or transient authentication problem. | Confirm the existing user-confirmed Wiki is still the target and check the exact remote/credentials. Do not create or initialize another Wiki. |
| Publisher refuses dirty or unexpected changes | The existing Wiki checkout contains changes outside the publisher-managed generated files. | Inspect git status and diffs manually. Preserve user Wiki-only edits; do not delete changes just to make the script pass. |
| Publisher cannot fast-forward | Wiki history diverged or its current branch/history changed. | Stop and inspect the Wiki repository history. Do not force-push or use unrelated-history overrides. |
| Playwright guide URL redirects to Home or has no expected table rows | The new source page likely has not been published, or the public route/page slug is wrong. | Check the publish job first. If push succeeded, inspect the final URL and Wiki page slug, then rerun verification. |
| A Wiki-local image returns 404 | The file may not have been copied/staged or the rewritten path may not match the filename. | Compare the source asset in docs/assets/, the staged Wiki images/ directory, and the Markdown image reference. Verify the live image URL after pushing. |
| Updated code/secret exists but no new Actions run appears | A push trigger may not have fired or the run inventory/UI may lag. | Manually dispatch from the workflow page, then confirm a new run ID and commit SHA. Do not infer execution from a marker commit alone. |

## 8. Rotation and incident response

- Set an expiration and rotate the PAT before it expires; update the same repository secret name with the new value.
- After rotation, run the workflow manually and verify credential setup and Wiki push.
- If a PAT was exposed in a chat, terminal capture, URL, file, or log, revoke it immediately in GitHub token settings, generate a replacement, update the repository secret, and rerun.
- Remove unused tokens and old secret aliases after confirming no workflow depends on them.
- Never paste the token into chat or include it in **.agents**, **HANDOFF.md**, **SESSIONS.md**, a commit, or a generated artifact.

## References

- [GitHub: Managing personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- [GitHub: Using secrets in GitHub Actions](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)
- [GitHub CLI: gh secret set](https://cli.github.com/manual/gh_secret_set)
