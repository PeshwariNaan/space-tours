# Space tourism website

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

* Overview

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

    View the optimal layout for each of the website's pages depending on their device's screen size
    See hover states for all interactive elements on the page
    View each page and be able to toggle between the tabs to see new information


### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Home-page](https://res.cloudinary.com/soyousay/image/upload/v1658650669/space_tours/screen-shots/st-homepage_iedjim.png)
![Destinations-page](https://res.cloudinary.com/soyousay/image/upload/v1658650664/space_tours/screen-shots/st-destinationspage_ht5uop.png)
![Crew-page](https://res.cloudinary.com/soyousay/image/upload/v1658650658/space_tours/screen-shots/st-crewpage_vpwg4y.png)
![Technology-page](https://res.cloudinary.com/soyousay/image/upload/v1658650674/space_tours/screen-shots/st-techpage_n6zadd.png)
![Destinations-mobile view](https://res.cloudinary.com/soyousay/image/upload/v1658655856/space_tours/screen-shots/st-destPage-mobile1_twmwdo.png)
![Side-drawer - Mobile](https://res.cloudinary.com/soyousay/image/upload/v1658655851/space_tours/screen-shots/st-drawer1_zxfhe4.png)



### Links

- Solution URL: [Link to github repo](https://github.com/PeshwariNaan/space-tours.git)
- Live Site URL: [Link to live site](https://peshwarinaan.github.io/space-tours/)

## My process

### Built with

- ReactJS
- Styled Components
- Flexbox
- CSS Grid
- React Router 6

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles



### What I learned

  To begin - I wanted to tackle this project without looking at any solutions and only using the design sheets from the starting code given. I feel like if you are trying to truly become a better developer, you need to leave the tutorials behind and really familiarize yourself with the documentation of the frameworks / libraries you are using to bridge the knoledge gaps and build confidence with your own abilities.

  This project wasn't very complex in the terms of advanced functionallity, however, I found it pretty challenging on the design side, especially while using styled components. I have been learning React for the last couple of years and have even taken a couple css courses but I haven't spent a ton of time really drilling the intricities of css grid and flex box (along with lots of other aspects of css) to produce responsive layouts quickly and efficiently. In the beginning of the project I felt very frustrated as I kept mixing up sytax for flex and grid in the wrong containers until I just kept the cheat-sheets to get the proper calls drilled into my head. I learned simple but important things such as automatically scaling images to the screen size and finding how to optimize screen layouts with the right combination of grid and flex containers. Now it feels so much simpler but it was painfully slow at the start.

  I also felt I learned a lot in the design of nav-bars. In the past my nav-bars always seemed a little too complex for what I was trying to accomplish. I had used grid-areas in the past as opposed to designating start / end columns for the containers. I really put in the time designing this bar several different ways and I was happy with my final solution that I will be able to apply to any future page. The side-drawer was also a good learning experience. There are so many ways to implement drop-downs and drawers and I like the easy functionallity I had in the end. I applied a backdrop along with the side-drawer that will close the drawer with an OnClick listener which was such a better solution from some custom hooks I have tried to use in the past. I know this isn't new material with web development but it was very beneficial to me.


### Continued development

There are definitely improvements I could make in the future. I wanted the side drawer to close if a link on the drawer, the close icon or the back-drop was pressed in the mobile view. The individual nav-item component was nested a few levels deep from the nav-bar. In order for the drawer to close when one of the links were clicked, I prop drilled from the parent component down. It wasn't too serious of an issue in this particular application but I still consider it bad coding practice. I would like to be more comfortable with using the UseContext() hook and I will go back soon to implement that in this project. This would be the best solution for state management in this instance as this simple app doesn't require a more complex managment system such as redux.

I did not go about this challenge with a mobile first approach. I really see the value of working through a project in this manner and I will definitely use this approach on the next one.

### Useful resources

There are so many useful resourse out there to where it can be exhausting to sift through so many not to mention a huge time burden. Here are two resources I used a lot during this project. CSS tricks has tons of other things as well and is a good place to start if you are having issues.

- [CSS-Tricks Flex-box cheat-sheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Quick reference for Flex and flex elements.

- [CSS-Tricks Grid cheat-sheet](https://css-tricks.com/snippets/css/complete-guide-grid/) - Quick reference for Grid layouts



## Author

- Frontend Mentor - [@PeshwariNaan](https://www.frontendmentor.io/profile/PeshwariNaan)


## Acknowledgments

Hats off to Scrimba and Kevin Powell for the challenge. I had a lot of fun with it.



# Additional Info if you want to clone the repo:

## Clone repo to your machine

## run - npm install

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


