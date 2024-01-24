---
title: Creating Code & Curiosities.
description: My experience using 11ty and Netlify to build and deploy this website.
date: 2024-01-18
image: '/img/blog/nature_desk.jpeg'
---
## The Why of Creating Code & Curiosities

In late May 2023, for the first in my 6.5 year software engineering career, I found myself unemployed. I had successfully navigated 3 job searches without a portfolio site, including one where a rock paper scissors game on Github was my most impressive software engineering experience. Could I get another job without a portfolio site? Probably! However, with the competitive job market out there, and an interest in exploring blogging, I decided a portfolio site would be a good way to stand out, practice my coding skills, and provide myself a blogging platform to try out.

## Why 11ty

I decided to create a portfolio site and blog from scratch, the first step was to determine my tech stack. My professional experience is in React, NextJS and Angular, I thought about using React as it can never hurt to keep practicing. However when thinking about what this site would contain - a home page, a resume, and a blog, React felt like overkill. I researched options and determined that a static site generator, a lightweight system that enables you to create websites with HTML, CSS and JavaScript, was the best option for my site.

My research led me to [Eleventy (aka 11ty)](https://www.11ty.dev/), a super simple static site generator. Eleventy is customizable, straightforward, and gave me all the options I needed including templating languages for blogging (I'm using Markdown), an easy way to pull in and map over data, and recent good tutorials on YouTube.


## Deployment on Netlity

Netlify, known for high-perfomance hosting, is listed in the 11ty [Get Started docs](https://www.11ty.dev/docs/get-started/) as the easiest way to put an 11ty project online. Sure enough, I had my 11ty site on Github deployed on Netflify in minutes! 