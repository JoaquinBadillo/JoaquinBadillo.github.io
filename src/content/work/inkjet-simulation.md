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

## Challenges

---

As the images grew a lot in size, the (time) complexity of our program was becoming a problem: The first bottleneck was solving an ODE numerically which was necessary to determine how much charge was required to displace the ink as desired. But the equaiton itself was never going to change; thus we used a common technique in algorithm design: sacrificing space for time. We stored the results from the numerical solver in a csv file and just loading the data was way more efficient. Then we found out that the plot itself was taking way too much time and we found a way to optimize this part using `NaN` values in a matrix.

## Future Work

---

Something interesting is that the solution to the ODE itself is not what we are interested in, but rather its inverse. Thus to avoid using a lot of memory we could try to approximate the inverse function using a polynomial or a neural network.