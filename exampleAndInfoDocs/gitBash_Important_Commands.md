<h1>Don't make my mistake!</h1>
I was laid off, and when they lay you off they don't tell you until they're walking you out the door. When they do say,  
"Hey come with me I need to talk to you real quick." They've already had their security team disable all your access to  
any and all software offiliated with their company.

In other words... I had lost 9 months worth of notes of learning in an instant due to saving them as slack messages in  
their workspace! So this is me going through that process again to retrieve as much as possible before I forget! They're  
also nice to have when you get rusty and need to remember how to set up your repos, and push code to your github projects!  
I hope this helps someone out :;):

<h2>NAVIGATING/CREATING FILES ON YOUR COMPUTER</h2>

- cd folderName = changes directory
- ls = lists contents of current directory
- mkdir testDirectory = Makes a new directory/folder in current file location named "testDirectory"
- touch nameOfFile.txt = makes a file of type ".txt". You can make multiple files in the same line with a space of multiple file types specified (for example: .html, .js .css)

<h2>GET REPO FROM GITHUB PROJECT</h2>

- git clone "RepoName/example" = clones a repo/project from github into whatever current file location you're in.
- git pull = When on main or master branch, this command pulls changes and updates your local main/master from the remote repo (GOOD PRACTICE)
- git pull origin main = After doing a "git pull" to your local main branch, you can switch branches, typ in this command, and that will pull down changes from the local main to your local branch. This is important to avoid conflicts and that you're up to date with the current repo. (GOOD PRACTICE)


<h2>BRANCHES</h2>

- git branch = lists all branches in repo
- git branch branchName = changes to a specific branch on the list.... branchNameBeing the example. "git branch main" switches to main branch
- git checkout -b newBranchName = creates a new branch "newBranchName"
- git branch -d BranchNameToBeDeleted = Deletes whatever branch you specified (note: branch will not delete if you are currently in the branch)


<h2>PUSHING CHANGES TO YOUR REPO</h2>
<strong><em>NOTE: this is important before pushing changes to a branch otherwise it won't work. If the branch can't identify who you are or where the code is coming from then it won't allow you to add/push your changes</em></strong>

- git config -- global user.email "yourEmail@wherever.com"
- git config --global user.name "Your Name"

- git add . = adds all files and changes in your branch/directory that you want to push to the repo
- git commit -m "This adds a message/description of whatever you want to say here, typically what you're pushing and what it does. You can aslo manually add a message in the github repo webpage, but this saves you that step."
- git push = pushes your changes to the repo
- git push origin branchName = pushes the branch to repo. Will also have a resulting link you can click to take you directly to the repo wher eyou can review the pull request and then commit it to the main branch.

<h2>EXTRA FOR PUSHES</h2>

- "--set-upstream" if you're setting up for the first time an pushing all your branches to the github remote repo. 
- "git push --all -u" which pushes all branches
- git push origin branchName:README.md = pushes your branch and specific File in the branch to the github to be reviewed and committed

In most cases for working on a company's software you'll need to set up an SSH key which is basically a key/password that grants you access to the company repos before you can start viewing the code and committing changes. You'll want to save that key somewhere in case it comes up and asks for it again otherwise I'm currently unaware if it's retrievable... I should be but I just don't know how to do that yet because I haven't had to deal with that problem.



<h2>BONUS FRIES</h2>  
<em>"My cousin's term for when you're out of fries... but then you find one hidding in the bag... thanks cuz."</em>  

- CTRL+C = terminates the process of your gitbash... for example you don't want to finish pushing your branch because you forgot to save when you did all that stuff up above here, or you want to close your cypress automation code run

