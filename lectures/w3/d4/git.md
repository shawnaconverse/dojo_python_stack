# Git Discussion

---

## What is Git?

- Source Control
  - backup our code
  - will track changes (both additions and deletetions)
    - line by line
    - image how big backup will get is we store full files
  - track who made those changes
  - track when those changes were made
- Git is a software for source control
  - another is Perforce
- Git runs on your local machine
  - create a repository to store the code
  - git will track all those changes
    - stores what is tracks in as .git folder 
  - .gitignore file
    - allows you to ignore certain files and folders

---

## What is GitHub?

- Cloud storage
  - store our repos on the cloud
- allows code sharing and collaboration between people 


---

## How do you save code in your repo?

### Core Loop of saving to Git

1. `git add <something>` - `git add .`, `git add this_file.txt`
  - Staging the changes -  preparing the changes to be saved
  - this does NOT save the changes
2. `git commit -m "commit message"`
  - This is what actually saves the changes
  - should describe the commit

### Store commits on GitHub

3. `git push -u origin <branch name>`
  - sends code from your git repo to github

