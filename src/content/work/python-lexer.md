---
title: Python Lexer
publishDate: 2023-06-16 00:00:00
img: /assets/img/Lexer.jpg
img_alt: A diagram of the tokenization of source code.
description: A lexer written in Elixir that uses regular expressions to tokenize Python code and create HTML files to highlight the syntax with a pre-defined stylesheet. For multiple files it can be executed both sequentially or in parallel.
tags:
  - Functional Programming
  - Multithreading
  - Lexical Analysis
urls:
  - https://github.com/TheLexers/PythonLexer
types:
  - icon
imgs:
  - github-logo
labels:
  - Repository
---

## Technologies Used

---

* Elixir
* RegEx

## Responsibilities and Contributions

---

Using some of my experience with Python and the official documentation I started by creating regular expressions for the different tokens found in the language. I decided to use [Regexr](https://regexr.com/) to test the expressions while designing them as I could see the matches highlighted with some test inputs. 

It was interesting to think about the order in which the expressions should be evaluated, as some of them could be matched by others; for instance, matches with keywords should be tried before trying to match identificators (variable and function names).

I implemented the logic to read the source code from a file and tokenize it, which I then used to create the sequential and parallel versions of the lexer for multiple files. Initially I closely followed the conventions of functional programming and wrote the contents at the end of the process, but I later decided to use side effects and write the contents as soon as they were tokenized to avoid using memory.

I also created a benchmarking utility to check how much speed we were gaining from the parallelized lexer as well as some python files to test the lexer. However, to show the importance that parallelization has in modern computing I used some dummy JSONs to create a large python file.