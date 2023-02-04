The Corelation of Fibonacci Sequence and Sprint Planning:

Sprint - a period of time set asside for a team of developers, QAs, designers, and everyone else involved with the team to accomplish a series of tickets classified as Epics, Stories, tasks, bugs, etc.
A sprint typically lasts 2-3 weeks.
Epic is one massive story that needs to be broken down into smaller tasks we just call "Stories"
Stories can be broken down further into various types of tasks (i.e. resolving bug ticket; designing front end; developing front end; and same with back end)

How does the Fibonacci sequence come into play? Well it looks like this: 1,2,3,5,8,13, etc.
These numbers in the tech/QA/dev world are used to describe the amount of time a task will take to complete. This number can be revised because sometimes you encounter unseen obstacles that were not previously anticipated

so a task/Jira Ticket number would mean something like this:
1 = Takes less than a day to accomplish, sometimes 5 minutes, sometimes the full day
2 = 1-2 days
3 = 2-3 days
5 = 3-4 days
8 = 5-9 days
13 = usually won't see a 13 but means it'll take the entire sprint. If you encounter a 13 what often happens is it's something that can be broken up into smaller tasks, or multiple sprints.

As a QA it can be typical to have a simple task like a "1", but maybe you're blocked because something huge is getting pushed out and that feature isn't available yet, and then once it is available it causes other bugs that makes it so you can't even test that feature so you're still blocked. So maybe it'll take 3 days to a week or even longer before you can finally have the stars align, and you can pass that test that takes all of 2 minutes. Basically don't get your knickers in a twist and relax, there's always something else for you to do, and in the case you've regression tested the heck out of everything and you're all up to date USE THAT TIME TO GO LEARN! It's also a good time to review your automation tests and see if there are better methods for making those run even more efficiently, or go start to learn programming, or backend API testing with tools like POSTMAN.

More you know the more useful you are, the more difficult tasks you can accomplish, the more responsibilities will be extended to you, and be fore you know it your job title's changing, you're getting raises and bonuses left and right... or don't you know? It's your call boss ;)


Fibonacci Sequence described as code:

Basically an array you're constantly adding to indefinitely... a for loop that never ends XD.
For fun you can copy and paste the code below into: https://onecompiler.com/javascript
click the "Run" Button and see what pops out.

//prints fibonacci sequence 10 times
let firstNum = 0;
let secondNum = 1;
let answer = 0;

let numTimes = 10 // change this value for how many times you want to repeat the sequence
for (let i = 1; i <= numTimes; i++){
nextNum = firstNum + secondNum;
firstNum = secondNum;
secondNum = nextNum;

console.log(nextNum);}