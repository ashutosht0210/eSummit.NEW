# Git Workflow & Troubleshooting Guide

Welcome! If you are stuck with Git commands or need clarification on our branching policy, use this guide.

## Recommended Branch Naming Conventions

All developers must create branches matching the structure below:

- `feature/<short-description>`: For new features or enhancements. E.g., `feature/checkout-validation`
- `bugfix/<short-description>`: For fixing errors. E.g., `bugfix/modal-scroll`
- `hotfix/<short-description>`: Critical fixes targeting the production branch immediately.
- `docs/<short-description>`: Documentation additions or updates.

---

## Daily Workflow Commands

### 1. Starting Work

Always pull the latest changes from the remote tracking branch before opening a feature branch:

```bash
# Shift to main branch
git checkout main

# Retrieve changes
git pull origin main

# Create and switch to your new branch
git checkout -b feature/your-feature-name
```

### 2. Committing Work

Break commits down into logical units. Keep messages clean and concise:

```bash
# Add files to staging
git add .

# Commit with a meaningful message
git commit -m "feat: integrate shared button component inside checkout modal"
```

### 3. Publishing Changes

```bash
# Push branch to remote server
git push -u origin feature/your-feature-name
```

---

## What To Do If You Are Stuck (Troubleshooting)

### 1. Resolving Merge Conflicts

If Git reports a conflict during a merge or rebase:

1. Run `git status` to locate conflicting files.
2. Open files in your editor and look for the conflict markers:
   ```text
   <<<<<<< HEAD
   Current changes on main
   =======
   New changes from your feature branch
   >>>>>>> feature/your-feature-name
   ```
3. Edit the files to keep the desired code and remove the markers (`<<<<<<<`, `=======`, `>>>>>>>`).
4. Stage and commit the resolution:
   ```bash
   git add <resolved-file>
   git commit -m "merge: resolve conflicts in checkout modal"
   ```

### 2. Undoing the Last Commit (Unpublished)

If you committed changes locally but haven't pushed them yet:

```bash
# Undo the commit but preserve your file edits in the workspace
git reset --soft HEAD~1

# Undo the commit and completely discard all edits (destructive)
git reset --hard HEAD~1
```

### 3. Temporarily Saving Unfinished Work

If you need to switch branches quickly but aren't ready to commit:

```bash
# Stash edits
git stash save "work in progress on checkout modal"

# Switch branches, do work, switch back...
git checkout feature/your-feature-name

# Retrieve your stashed work
git stash pop
```

### 4. Discarding Local Work (Uncommitted)

```bash
# Revert a single file to the latest committed state
git checkout -- src/components/Nav.jsx

# Revert all files in your workspace (destructive)
git checkout .
```
