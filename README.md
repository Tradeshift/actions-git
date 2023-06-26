# actions-git

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Helper actions for working with git on github actions

## Usage

### configure-from-gpg-key

Configure the local `git` to use the name, email and signature specified in the
supplied GPG key. Example below will commit as the tradeshift CI user, by
configuring `git` from the supplied GPG key. Any GPG key should work.

```yaml
steps:
  - name: Configure git for tradeshiftci
    id: configure
    uses: tradeshift/actions-git/configure-from-gpg-key@v1
    with:
      gpg-key: ${{ secrets.TRADESHIFTCI_GPG_KEY }}
```

Usage together with `tradeshift/create-pull-request`:

```yaml
- name: Create Pull Request
  uses: tradeshift/create-pull-request@v3
  with:
    title: Example pull request
    body: 'Awesome example PR'
    token: ${{ secrets.GH_TOKEN }}
    committer: ${{ steps.configure.outputs.user }}
    author: ${{ steps.configure.outputs.user }}
```

Usage with `git commit` / `git push`:

```yaml
- name: Push changes
  run: |
    git remote set-url origin https://x-access-token:${{ secrets.GH_TOKEN }}@github.com/${{ github.repository }}
    git commit -am 'Awesome changes from CI'
    git push
```

#### Outputs

Action outputs available in workflows:

- `user`: `Name <email@company.com>` extracted from the supplied gpg key
- `email`: Email address extracted from the supplied gpg key
- `name`: Name extracted from the supplied gpg key

## Contributing

Commits should follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) guidelines.
In order to trigger releases, at least one commit must be either a `fix`, `feat` or `breaking change`.
Refer to conventional commit guidelines and [semantic release](https://github.com/semantic-release/semantic-release) for more info.
Test change (dont merge)
