# typescript-npm-package-template

> Template to kickstart creating a Node.js module using TypeScript and VSCode

Fork from [typescript-npm-package-template](https://github.com/ryansonshine/typescript-npm-package-template) and make some changes to make to easy use for myself.

## Features

keep most features in source repo.

## Changes

- Newer dependencies version
- remove prepare-commit-msg hooks
- ESLint version and rules
- [commitlint](https://github.com/conventional-changelog/commitlint)
- Configuration File Location
- Windows and linux compatible
- Private customization

## Getting started

### Create your repository

**Click the "Use this template" button.**

Alternatively, use [tiged](https://github.com/tiged/tiged) downloading repo to your local computer.

```
degit kainstar/typescript-npm-package-template my-new-project
```

### Initialize your repository

Replace `REPO_NAME` in the script below with your own details to personalize your new package:

Linux or MacOS:

```bash
REPO_NAME="repo-name"

sed -i "s/typescript-npm-package-template\|my-package-name/$REPO_NAME/g" package.json README.md
```

Windows:

```powershell
$REPO_NAME = "repo-name"

foreach ($File in @("package.json", "README.md")) {
  (Get-Content $File) | %{$_ -replace "typescript-npm-package-template|my-package-name", $REPO_NAME} | Set-Content $File
}
```

### Add NPM Token

Add your npm token to your GitHub repository secrets as `NPM_TOKEN`.

### Add Codecov integration

Enable the Codecov GitHub App [here](https://github.com/apps/codecov).

**Remove everything from here and above**

---
