<h1>The Corelation of Fibonacci Sequence and Sprint Planning:</h1>

<h3>Sprint - a period of time set asside for a team of developers, QAs, designers, and anyone else involved with completing a story, or an epic.</h3>

First you have an Epic... which is a massive story... say "The Lord of the Rings" for example.  
From there you have a series of smaller stories that make up the Epic: 
- "The Hobbit"
- "The Fellowship of The Ring" 
- "The Two Towers" 
- "The Return of The King" 

Those stories are broken into a series of sprints, which consist of tasks that should be completed, bug tickets fixed, new features introduced... to continue our analogy you could think of SPRINTS as Chapters in each book.

Then you have the specific individual tasks themselves which are delegated to different team members to accomplish depending on their roles. The Designer designs the Home page of the website, the front end developer translate that image to functioning interactable objects on a real URL for the Home website. The Backend handles what happens under the hood of the car that you don't see that makes all the functionality of the website/software possible. DevOps works on security for the website, and evenutally we make it alllll the way down to us, THE QA. where we ensure that the website functions as intended.

To continue the analogy... In Chapter four, you meet some main characters, the main character has a feast, the main character receives their mission to bear the ring. I honestly haven't read the books so don't quote me on that, but you get the idea. Each task represents a ticket that must be accomplished in order for the sprint, the story, and the epic to progress.

So when we talk about sprint planning, your team sits around and discusses and assigns relevant tickets they think they can accomplish within anywhere from a 1-4 week period. Your typical sprint is 2 weeks. This is determined by how big the project is, and the known variables. Then your team gives these tickets a number to determine their complexity, difficulty, and amount of time needed to adequatly finish those tasks. Thus we arrive to the number system of the Fibonacci sequence.

<h3>How does the Fibonacci sequence come into play?</h3>
The Sequence: 1,2,3,5,8,13, etc.  
Can you see the pattern? you take the first number and add it to the second number to get the third number (1+2 = 3); the second plus the third to get the fourth (2+3 = 5) and so on. It is a sequence that can be found in nature, and often results in the most visually beutiful and complex patterns.

Want to understand this concept more? Watch this short YouTube video: <a href="https://www.youtube.com/watch?v=wTlw7fNcO-0">Nature's Code</a>.


<strong>The number associated with a task (often in the form of a ticket, usually a Jira ticket) can be interpreted as meaning:</strong>  
1 = Takes less than a day to accomplish, sometimes 5 minutes, sometimes the full day  
2 = 1-2 days  
3 = 1-3 days  
5 = 2-5 days  
8 = 3-8 days  
13 = 5-13 days 

If you pay attention each number in a column IS IT'S OWN NUMBER SET OF THE FIBONACCI SEQUENCE!!! And if you're a nerd like me you find that pretty cool. The beauty of the fibonacci sequence in Sprint planning is it allows for flexibility, while simultaneously getting the most amount of work done as possible, simplifying a very complex monstor known as Software Development Life Cycle (SDLC). 

Usually you won't see a 13 but if you do, it typically means it will take the entire sprint. If you encounter a 13 what happens more often than not, is the task is revisited, and divided into smaller tasks. But hey, it's the tech field... sometimes there's a 13 and breaking it up doesn't make sense.

As a QA most ofyour tasks will probably be 1,2,3, 5, and the occasional 8. These numbers don't always mean the task will be accomplished in the timeframe first suspected. For example you could be blocked due to a feature of the app/webpage being down, so even though it's a simple task that would only take 2 minutes to accomplish, you're left waiting for days. The number of your task doesn't change though, it just stays as is waiting in the blocked status until you can progress. Such is life in the tech world, so learn to roll with the punches, relax, and realize there's always something else you can do. Not to mention you're a more pleasant peron to work with when you show some patience and understanding towards your collegues.

<h2>Things you can do when blocked in order TO BECOME EVEN MORE POWERFUL!!!:</h2>  

1. Review your manual test documentation (testrail for exmple) and ensure that it's up to date with the latest  
pushes.  
2. Comb through automation scripts and see what you can do to make them more efficient, and more in tune with  
best practices. For example, a QA reached out to me about a cy.wait(3000) (3 seconds). Well what if it takes an element 5 seconds to load, but sometimes 2? What's the best way around that? You'll learn how to search key words on google to better track down that answer, and if you want some practice... go find it right now before reading the next sentence. ONE ANSWER I found was you could just change the timeout feature on your test, or the element itself you're waiting for through something like this "cy.get('#firstname', { timeout: 10000 })" This simple concept that none of us were aware of lead to my collegue updating our test scripts, not only making them pass concistently, but take even less time! So what the line above means is, "Keep trying to find this element for 10 seconds, after 10 seconds, fail the test if it hasn't appeared. This means if it takes half a second to appear well then that part of the test can pass in half a second... if it takes 9, then it takes 9 and still passes. This removed hard coded wait times from our test scripts shaving off minutes from our total test time.
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


<h2>The Fibonacci Sequence in JavaScript</h2>
<em>Shoutout to StackOverflow and no I didn't just copy and paste! What kind of unemployed man with lots of time do you think I am?</em>

1. Copy the code below 
2. Paste the code into a <a href="https://onecompiler.com/javascript"> JavaScript Compiler like this one</a>  
3. Click the "Run" Button and see what pops out!
4. (optional) change the value of the "numTimes" variable from 10 to another whole number value.



```
//prints the Fibonacci sequence as seperate numbers then all together as an array "numTimes"  
let firstNum = 0;  
let secondNum = 1;  
let answer = 0;  
let someArray = [];

let numTimes = 10 // change this value for how many times you want to repeat the sequence

for (let i = 1, j = 0; i <= numTimes; i++, j++){  
nextNum = firstNum + secondNum;  
firstNum = secondNum;  
secondNum = nextNum;  
someArray[j] = nextNum;   
console.log(nextNum);}
console.log(`\nYour Fibonacci sequence is:\n${someArray}`);
```
