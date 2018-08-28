# Agency Projects

Repository for js and css files

## Getting Started

Install Git on your system first. Might need admin privilege to install if on windows

## Set up

After installing Git, clone the repository. 

* Navigate to the github repository’s Code tab.

* Click Clone or download.

* Copy the URL provided.

* Open your command line or Terminal application and enter the local directory where you would like to copy the repository. This can be anywhere in your local file system, like your home directory. For example:
`cd ~/`
 
* Clone the repository by replacing URL with clone URL you copied in the previous step. The repository will be cloned into a new directory in this location.

`git clone URL`

* Navigate into the directory of the repository you just created on your local drive. Replace with your own repository's name.

`cd REPOSITORY-NAME`
 
## Some commands

`git status`
 
git status is a command you will use often to verify the current state of your repository and the files it contains.
 
`git add filename or git add *`
 
Add one or more files to staging (index)
 
`git commit -m "commit message"`
 
Commit changes to head (but not yet to the remote repository)
 
`git push origin master`
 
Send changes to the master branch of your remote repository (this case github repo)
 
`git pull`
 
Fetch and merge changes on the remote server (github) to your working directory
 
## Help

[GitHub Git Cheat Sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)

[Basic Git Commands](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

[Git Documentation](https://git-scm.com/docs)