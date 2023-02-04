<h1>The Corelation of Fibonacci Sequence and Sprint Planning:</h1>

<h3>Sprint - a period of time set asside for a team of developers, QAs, designers, and everyone else involved with the team to accomplish a series of tickets classified as Epics, Stories, tasks, bugs, etc.</h3>
A sprint typically lasts 2-3 weeks.
Epic is one massive story that needs to be broken down into smaller tasks we just call "Stories"
Stories can be broken down further into various types of tasks (i.e. resolving bug ticket; designing front end; developing front end; and same with back end)

<h3>How does the Fibonacci sequence come into play?</h3>
Well it looks like this: 1,2,3,5,8,13, etc.  
These numbers in the tech/QA/dev world are used to describe the amount of time a task will take to complete.  
This number can be revised because sometimes you encounter unseen obstacles that were not previously anticipated.

<strong>A number associated with a Jira ticket/task would mean:</strong>  
1 = Takes less than a day to accomplish, sometimes 5 minutes, sometimes the full day  
2 = 1-2 days  
3 = 2-3 days  
5 = 3-4 days  
8 = 5-9 days  
13 = usually won't see a 13 but means it'll take the entire sprint.  If you encounter a 13 what often happens is  
it's something that can be broken up into smaller tasks, or multiple sprints.

These numbers don't always mean the task will be accomplished in the timeframe first suspected. For example you  
could be blocked due to a feature of the app/webpage being down, so even though it's a simple task you need to  
perform, it just isn't accessible. Maybe it takes 3 days, or even a week, or maybe the entire project gets  
scrapped. Such is life in the tech world. Learn to roll with the punches, relax, and realize there's always  
something else you can do. 

In the the event of you've regression tested the crap out of everything, all your tickets are done, you've  
helped your fellow QAs with their tickets well I'd argue perhaps another regression test isn't the best  
thing. You don't want to burn yourself out doing redundant work so I have some **GOOD NEWS**...  
YOU NOW HAVE TIME TO LEARN SOMETHING TO MAKE YOU EVEN MORE POWERFUL!  

You could:  
1. Review your manual test documentation (testrail for exmple) and ensure that it's up to date with the latest  
pushes.  
2. Comb through automation scripts and see what you can do to make them more efficient, and more in tune with  
best practices. For example, a QA reached out to me about a cy.wait() that seemed to make his test run a little  
flakey (would fail half as much as it passed). I was able to do some research and found hard coded wait times,  
even if they are making your test pass every time, can add uneccessary time on your code runs and chron jobs  
(automation tests set up to run a number of times per day, or specific days of the week at designated times).  
Turns out times so that your tests pass, and replace the timeout of the test time  
Turns out you can redefine the timeout variable for any specific line of code in your test, or the entire  
test yourself. This application to my collegues case made it so he could get his tests to pass consistently.  
It also shaved minutes off of our repos code runs.  
3. Learn how to do backend testing with APIs using POSTMAN. 
4. Learn SQL which has direct application to POSTMAN and API testing.
5. Learn Programming in a high level language like C#, JavaScript, or simpler programming in HTML/CSS. 

In the event of risking burnout it's important to get up, do something else, play a game, go for a walk,  
lift some weights, watch a show, clean your place, make some food. It's better to have good energy when  
doing your work than to become complacent doing the minimum to pass off your projects, so trust me; you  
taking care of you so you can be the best you is saving your companies thousands, potentially millions  
of dollars because you didn't half a$$ your projects. As long as you get the work done they need you  
to do, your team is going to love you.

The more you know the more valuable you are, the more difficult tasks you can accomplish independently,  
the more responsibilities will be extended to you, and be fore you know it your job title's changing,  
you're getting raises and bonuses left and right and you're in the 6-figure club.


<h2>Some JavaScript I learned because as an unemployed man... I suddenly have a lot of time.</h2>
Fibonacci Sequence described as code:

you can copy and paste the code below into: https://onecompiler.com/javascript
click the "Run" Button and see what pops out! I'd like to thank StackOverflow ;)

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
