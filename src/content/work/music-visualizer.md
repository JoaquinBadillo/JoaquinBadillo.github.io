---
title: Music Visualizer
publishDate: 2022-07-15 00:00:00
img: /assets/img/MusicVisualizer.jpg
img_alt: An octave symbol showing frequencies present in an audio.
description: A creative project that uses the Fast Fourier Transform to make visualizations of the frequency domain given a signal. It was designed to expand upon the experience of listening to music. 
tags:
  - Creativity
  - Processing
  - FFT
urls:
  - https://github.com/JoaquinBadillo/Music-Visualizer
types:
  - icon
imgs:
  - github-logo
labels:
  - Repository
---

## Technologies Used

---

* Processing (Java)
* FFT (From Processing's Sound Library)


## Functionality

---

The program is rather simple, it takes an audio file and uses the Fast Fourier Transform to obtain the frequency domain of the signal, then it uses the data to make a visualization of the frequencies present in the audio by plotting them in a circular domain. Some additional mappings were made to make the visualization more interesting, such as the use of a logarithmic scale which roughly corresponds to decibels. I also used a Bézier curve to trace the path of an octave symbol.

I think what was most interesting for me was to learn about the Fast Fourier Transform, which is a very important algorithm in signal processing. I also learned about the use of logarithmic scales in audio as the visualizations were not looking as I expected initially.