# Automatic GitHub Sync Rule

Whenever any changes are made to the codebase (modified, newly created, or deleted files):
1. Automatically run `git add -A` (or `git add .`) to stage all changes.
2. Commit the changes with a concise, descriptive commit message summarizing what was modified.
3. Push immediately to `origin main` using `git push origin main`.
4. Do not ask for user confirmation before committing and pushing.
5. Verify that the push completed successfully.
