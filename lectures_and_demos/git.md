# Git

## WHAT IS GIT?

- Source/Version Control Software
- Repository
  - location where all our code is stored
- Tracks all changes in this repo line by line

---
## Initializin a git repo

1. Initialization => `git init`
2. Stage all changes => `git add .`
3. Commit changes that are stages => `git commit -m "commit message"`


---
## What is GitHub?

- Cloud storage for code


```
echo "# git_demo" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/shawnaconverse/git_demo.git
git push -u origin main
```