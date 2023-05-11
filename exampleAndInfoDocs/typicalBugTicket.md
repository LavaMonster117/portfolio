<h1>REAL BUG TICKET EXAMPLE FOUND IN SLACK DESKTOP APP</h1>

<h2>Title:</h2>

- Slack Desktop App - Emoji Sub-Text Does Not Display

<h2>Description:</h2>

- When hovering over many different emojis in the emoji list, the sub-text and image for the emoji doesn't appear.

<h2>Preconditions:</h2>

- Have a verified valid email and account connected on Slack
- Be invited, accepted invite, and logged into QA Utah Slack Channel.
- Find/make a Comment

<h2>Steps to Reproduce:</h2>

1. click "add Reaction" button below comment
2. Scroll down to category "Smileys & People" category on emoji window
3. Hover cursor over any emoji in the first 5 rows.
4. Hover mouse over any emoji after the first 5 rows.

<h2>Result:</h2>

- No subtext or emoji image populates field bottom left info box on step 3. On step 4 it does.

<h2>Expected Result:</h2>

- All Emojis respective icon and subtext populates the bottom left element

<h2>ACCEPTANCE CRITERIA:</h2>
  
- That the first 5 rows behave the same as the rest of the emojis, populating their sub-info and image in the bottom left of the emoji options window.

<h2>Other Info:</h2>
  
- OS: Windows 11, Desktop
- Using: Slack Desktop App
- Date discovered: 2/2/2023 approx 6:00 PM (MDT)

<h2><a href="https://www.screencast.com/t/bVxHWD2Sdl">Link to see video demo of bug<a></h2>
  
<h2>SCREENSHOTS</h2>

![Click_FindAnotherReaction_Btn](https://github.com/LavaMonster117/portfolio/assets/124396791/1dd1fe39-fbf0-4a71-bd17-c15efdcceb63)
![commandPresent](https://github.com/LavaMonster117/portfolio/assets/124396791/37074820-7ebb-460a-8957-7a5dc1148b31)
![bug](https://github.com/LavaMonster117/portfolio/assets/124396791/8d3d1f26-f97d-4d07-a036-7e441e2c20c5)



<h1>OTHER PRACTICES TO CONSIDER BEFORE SUBMITTING A BUG TICKET:</h1>

- Reach out to other QAs and see if they can replicate the bug.
- Repeat the steps again ensuring cache and cookies have been cleared, and browser is in incognito (if applicable).
- Repeat steps in a different browser (if applicable).
- Type in key words to search if this bug ticket already exists to save yourself from redundancy, and add anything important that may be missing in the ticket if it does exist.
- Talk to your devs or whoever you're designated to talk to to ensure it's actually a bug and not part of the functionality.
- Do your screenshots and videos adequately demonstrate the bug? Can the video be shortened (if possible try to keep less than 1 min.)?
  
 <h3>How'd I Find This Bug?</h3>
  
 - I was simply using the app and noticed when leaving an emoji reaction on a colleague's post. The more you QA the more you pick up on minor details like that in your everyday software use. Want to do the world a favor? Submit your finding's to the company and who knows, maybe they'll reply with a job offer eh? The customer base and culture for any software I'd argue is just as vital in improving any company's software... ideally the people they pay to find these bugs find them before market but hey, sometimes little things get through.
