# Git Automation Rules

For every task performed in this repository, strictly adhere to the following rules:

1. **Automatic Commit & Push**: After completing any code change, bug fix, feature, or file modification, automatically stage the relevant changes, create a Git commit, and push the commit to the current GitHub branch.
2. **Review First**: Before committing, run `git status` and review the changes.
3. **Descriptive Messages**: Use clear, descriptive commit messages.
4. **Current Branch Only**: Always push to the current branch. Never switch branches automatically.
5. **No Destructive Commands**: Never use `git reset --hard`, force push, or destructive Git commands.
6. **Preserve User Changes**: Never overwrite or discard existing user changes.
7. **Security & Secrets**: Never commit secrets, passwords, API keys, `.env` files, or credentials.
8. **Safe Error Handling**: If a merge conflict, authentication error, rejected push, or other Git error occurs, stop and explain the problem instead of attempting a destructive fix.
9. **Verification**: After pushing, verify the result and report the commit hash, branch name, and push status.
10. **Autonomous Execution**: Do not ask for confirmation before routine commits and pushes, provided the repository state is safe.
