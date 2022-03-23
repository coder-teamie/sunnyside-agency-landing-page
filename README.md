# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

![Desktop Layout](/images/desktop-layout.png)
![Mobile Layout](/images/mobile-layout.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/sunnyside-agency-landing-page-using-css-and-js-_O13pQDxR)
- Live Site URL: [Netlify](https://coder-teamie-sunnyside-agency-landing-page.netlify.app/)

## My process

I started this challenge by analyzing the mockup given and making a list of the required sections and what kind of technologies or resources I might need to fulfil the requirements. Then I moved on to developing the markup for the entire page using HTML Semantics after which I further dived into using SCSS to style the pages. I started by building the navigation and went on to complete the entire mobile layout before moving to the tablet/desktop layouts.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

In this challenge I was able to learn how to use the clip-path to create shapes in CSS and I also learnt how to use the :not() custom property in CSS. This challenge helped me enhance my knowledege about the CSS Grid and Flexbox.

## Some custom styles

```scss
$font-weights: (
  'regular': 400,
  'medium': 600,
  'bold': 700,
  'extra-bold': 900,
);

@function weights($size) {
  @return map-get($font-weights, $size);
}

@mixin transition($duration, $speed) {
  transition: all $duration $speed;
}

@mixin tablet {
  @media screen and (min-width: 687px) {
    @content;
  }
}

@mixin desktop {
  @media screen and (min-width: 992px) {
    @content;
  }
}
```

```js
// Remove mobile nav dynamically at 678px w/o btn
window.addEventListener('resize', () => {
  const width = `687`;

  if (window.innerWidth > width) {
    sidebar.classList.remove('show-sidebar');
  }
});
```

### Useful resources

- [CSS Clip-Path Maker](https://bennettfeely.com/clippy/) Create Custom shapes in CSS

## Author

- Instagram - [Oluwatimilehin](https://www.instagram.com/tea__scripts/)
- Frontend Mentor - [@coder-teamie](https://www.frontendmentor.io/profile/coder-teamie)
- Twitter - [@teamie\_\_](https://twitter.com/tea__scripts)
