---
title: Bungee Jumping Model
publishDate: 2022-12-5 00:00:00
img: /assets/img/BungeeJumping.jpg
img_alt: A bungee jumper with a graph of their position.
description: A mathematical model that describes the position of a bungee jumper as a function of time, as described by a set of ODEs.  
tags:
  - ODEs
  - Mathematical Modeling
urls:
  - https://github.com/JoaquinBadillo/MA1033
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

This project was made for my Differential Equations final project. In reality, for that project it was only required to solve the ODE using a set of initial conditions, but since it was expected for us to make a plot I decided to go a step further and translate the model into MATLAB code.

The greatest challenge behind this project was therefore not the implementation of the software, but rather modeling the bungee jump, as it involves using a piecewise function described by 2 differential equations, one of them is easy to solve which ocurrs when the bungee cord is not stretched and describes simple free fall; the other one however is a second order non-homogeneous ODE which describes a damped oscillator.