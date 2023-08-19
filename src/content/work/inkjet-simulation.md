---
title: Inkjet Simulation
publishDate: 2022-07-26 00:00:00
img: /assets/img/Inkjet.jpg
img_alt: A grid of circles representing ink drops that displays an image of Rick Astley. 
description: A simulation of a printer that uses electrically charged plates to displace ink droplets as desired, it was done using numerical methods to solve an ODE. 
tags:
  - Electromagnetism
  - ODEs
urls:
  - https://github.com/JoaquinBadillo/InkjetSimulation
types:
  - icon
imgs:
  - github-logo
labels:
  - Repository
---

## Technologies Used

---

* MATLAB

## Functionality

---

This project was unexpectedly fun to make, it started as a way to expand my team's final project for the Electrical Systems course. We were asked to make a simple simulation of an Inkjet printer by displacing electrically charged ink droplets. Initially we just printed a smiley face, but afterwards I decided to add some colors to the ink and after that expanding the functionality was rather straight forward: Process the image to get a matrix of colors, then use the matrix to print equally spaced ink droplets that are displaced by the electric field.

However, as the images grew a lot in size, the complexity of our function was becoming a problem, as we were numerically solving an ODE with a lot of precision and plotting lots of points. But the equaiton itself was never going to change: thus I stored the results in a csv file. I also researched about an obscure way to optimize the plot using `NaN` values.
