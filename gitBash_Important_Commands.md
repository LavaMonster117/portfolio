This is a list of commands for reference in case I forget.


---NAVIGATING/CREATING FILES ON YOUR COMPUTER---
cd folderName = changes directory
ls = lists contents of current directory
mkdir testDirectory = Makes a new directory/folder in current file location named "testDirectory"
touch nameOfFile.txt = makes a file of type ".txt". You can make multiple files in the same line with a space of multiple file types specified (for example: .html, .js .css)

--GET REPO FROM GITHUB PROJECT--
git clone "RepoName/example" = clones a repo/project from github into whatever current file location you're in.
git pull = pulls changes and updates current repo


---BRANCHES---
git commit = commits changes to repo
git branch = lists all branches in repo
git branch branchName = changes to a specific branch on the list.... branchNameBeing the example. "git branch main" switches to main branch
git checkout -b newBranchName = creates a new branch "newBranchName"
git branch -d BranchNameToBeDeleted = Deletes whatever branch you specified (note: branch will not delete if you are currently in the branch)


---PUSHING CHANGES TO YOUR REPO---
git push = pushes your changes to the repo
git push -u origin <branch> = pushes the branch to repo. I believe -u stands for "upstream"... 
there's also "--set-upstream" if you're setting up for the first time an pushing all your branches to the github remote repo. and also "git push --all -u" which pushes all branches
git push origin branchName:README.md = pushes your branch and specific FIle in the branch to the github to be reviewed and committed



---BONUS FRIES--- (my cousin's term for when you're out of fries... but then you find one hidding in the bag... thanks cuz)
CTRL+C = terminates the process of your gitbash... for example you don't want to finish pushing your branch, or you want to close your cypress automation code run

