# Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Fylo-Mobile View](./images/screenshot-mobile.png)

![Fylo-Desktop View](./images/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/allyson-s-code/fylo-dark-theme-landing-page](https://github.com/allyson-s-code/fylo-dark-theme-landing-page)
- Live Site URL: [https://allyson-s-code.github.io/fylo-dark-theme-landing-page/](https://allyson-s-code.github.io/fylo-dark-theme-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

This project reinforced the concept of absolute positioning to get the divs to behave as they needed, especially the aside email sign up box. I also learned how to add a class to a section of a svg to be able to access the ``fill` attribute on hover.  
Positioning the intro background image was tricky, especially the mobile view where the image stopped short of the bottom of the div. I made use of a gradient to make a seamless transition into the darker background color which needed to run through the rest of the div.

```css
intro {
  background: url(../images/bg-curvy-mobile.svg), linear-gradient(180deg, hsl(
          217,
          28%,
          15%
        ) 55%, hsl(218, 28%, 13%) 65%);
  background-size: 110%;
  background-position: 65% 54%;
  background-repeat: no-repeat;
}
```

### Continued development

I'll be continuing to learn more advanced CSS and JavaScript. I'm also always interested to learn HTML best practices for accessibilty and semantic HTML.

## Author

- Website - [Allyson Smith](https://allyson-s-code.github.io/Web-Dev-Portfolio/)
- Frontend Mentor - [@allyson-s-code](https://www.frontendmentor.io/profile/allyson-s-code)
