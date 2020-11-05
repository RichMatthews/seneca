# Seneca

## Tech Stack

The app is written in React using Typescript and using standard CSS

## A few notes

- I added some extra functionality as I was unsure on how the data would get come back from the API. 
Normally I would obviously draw up this contract with the backend engineers. However, I decided to add some "random" functionality as I saw an issue where if 
the answers always came back as wrong, users might be able to "game" the question and work out if they just select the other answers they would get 100%. 
This functionality avoids the risk of that. I also added another check to "re-randomize" the choices if the randomizer came back with more than 50% correct. 
I didn't want the chance of a user getting the question right without clicking anything, ha.

- I've added some unit tests too. I thought this is an important thing to do but as this is a tech challenge I didn't go too OTT but normally I would be a lot more thorough.

- I've also added one extra piece of functionality that allows you to select a different question to view. I used the "office conditions" example provided, this is to show the
app is reusable and can work easily with any data plugged into it. 

- I've written a semi basic solution to change the colour background based on the amount of correct answers. But given more time I would like to improve this


## To run the app

- `git clone https://github.com/RichMatthews/seneca`
- `cd seneca`
- `yarn && yarn start`
