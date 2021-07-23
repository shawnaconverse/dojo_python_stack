# GIT Discussion

## What is Git?

- Version Control / Source Control
  - Track changes made to our code
    - who made those chages
    - when those changes were made
    - tracks changes line by line
  - back up code
- Git runs on your local machine
  - create a repository
    - parent folder for our code
    - store all the git changes and files in a hidden folder called .git
    - not required, but recommended to have a .gitignore
      - tells git to ignore certain folders and files
  - branches which are subsets of the repos
    - e.g. have a official production version, and a separate branch for just dev

## What is Github?

- cloud storage for our code
  - if i wipe my harddrive, i dont lose my code
- allows us to:
  - share our code with others: team members, public, etc.
    - repos on github can be public or private
  - collaborate with others
  - access our code on any machine
- intgrated to work with git

---

## How do I user Git?

### Setting up a local git repo

1. make our project folder (aka repository)
2. create a `README.md` file. this is important describe the purpose of our repo
  - short description and name of our repos
3. We want to initialize, or create, the git repos
  - `git init`
4. start adding code and changes to our git repo
```
only run once after creating the repo: git branch -M main (this changes the master branch to main)

git add <folder and or file we want to save>
git commit -m "commit message to describe what was changed"

e.g.
git add . (the dot respresents the current folder)
git commit -m "init commit"

git status tells us the status of our git
```

```
make the github repo

git remote add origin <url to github repo>

git push -u origin <branch>

To retrieve code from the github
git pull origin <branchname>
```
