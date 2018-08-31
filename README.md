# Agency Projects

Repository for js,css files, adcore templates and documentations.

## Getting Started
What is Git? Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.(Source - [Wikipedia](https://en.wikipedia.org/wiki/Git))

#### Install Git on Mac
If you've had XCode installed (or it's Command Line Tools), Git may already be installed. To find out, open a terminal and enter git --version. [Read more...](https://www.atlassian.com/git/tutorials/install-git)

`$ git --version`

If you need to download an installation file, please do so [here](https://git-scm.com/downloads)

#### Install Git on Windows
Download the latest Git for [Windows installer](http://git-scm.com/download/win).Might need admin privilege to install if on Windows. Watch this [video](https://www.youtube.com/watch?v=SWYqp7iY_Tc&t=1594s) on Windows installation.
After installation, check if git is installed.
`git --version`

## Set up

After installing Git, clone the repository following these steps. 

* On your system, create a folder anywhere (just make sure it's easy to navigate to) you want to use for your git repository.

* Navigate to the folder from the command line
`cd /path/to/folder`

* Clone the repository by typing the command below.You now have the latest file from the github repository.
`git clone https://github.com/agency-quill/agency-project-files.git`

 
## Some commands
**Note:** Any git command you run must be from the git repository (your local folder). To check where you currently are from the command line type `pwd`

_git status_ is a command you will use often to verify the current state of your repository and the files it contains.

`git status`

**Fetch and merge changes from the remote server (github) to your working directory. _Always fetch from the remote server before making any changes so you know you have the current file(s)._**
 
`git pull`
 
**Add one or more files to staging**

_Add a specific file_  `git add filename`

_Add multiple files_ `git add .`

_Unstage a file_ `git reset HEAD YOUR-FILE-NAME`
 
**Commit changes to head (but not yet to the remote repository i.e. github)**

`git commit -m "commit message"`

**Send changes to the master branch of your remote repository (in this case github repo)**
 
`git push origin master`
 
 
## Help

[GitHub Git Cheat Sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)

[Basic Git Commands](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

[Git Documentation](https://git-scm.com/docs)

[Git Windows installation video](https://www.youtube.com/watch?v=SWYqp7iY_Tc&t=1594s)
