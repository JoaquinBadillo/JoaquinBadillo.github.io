---
title: Duck City
publishDate: 2023-11-29 00:00:00
img: /assets/img/DuckCity.jpg
img_alt: A diagram of duck agents reacting to the environment.
description: An urban mobility simulation using reactive agents representing cars in a city. Each agent has a different and randomly chosen destination; their aim is to reach their locations.
tags:
  - Reactive Agents
  - Discrete Simulation
  - Flask
urls:
  - https://github.com/JoaquinBadillo/DuckCity
types:
  - icon
imgs:
  - github-logo
labels:
  - Repository
---

## Technologies Used

---

* Python
* [Mesa](https://github.com/projectmesa/mesa)
* Flask
* C# (Unity)

## Responsibilities and Contributions

---

Create agent behaviours such as calcuting routes (implemented using A*), avoiding collisions, and respecting traffic lights.

Implement logic using state variables like tolerance to make the agents wait before recalculating their paths.

Identify and break a nash equilibrium at a roundabout by allowing some agents to take some inefficient routes.

Implement the logic to spawn new agents and to update agent positions.

Create an API to communicate the agent positions and traffic light states to the Unity client.
