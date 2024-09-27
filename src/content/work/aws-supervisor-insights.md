---
title: Amazon Connect Supervisor Insights
publishDate: 2024-06-10 00:00:00
img: /assets/img/SupervisorInsights.jpg
img_alt: Supervisor Insights AWS Services 
description: A real-time platform designed with an Event Driven Architecture, that provides contact center agents and supervisors with insights and tools to succeed.
tags:
  - AWS
  - Lambda
  - DynamoDB
  - Cognito
  - EventBridge
  - Kinesis
  - AppSync
  - Amplify
  - Docker
urls:
  - https://github.com/orgs/Safe-Corp-Jiva/repositories
  - https://github.com/Safe-Corp-Jiva/frontend
  - https://drive.google.com/file/d/1iSHAGoiG8B0ranealZn7s8617CBW0aDF/view?usp=sharing
types:
  - icon
  - icon
  - icon
imgs:
  - github-logo
  - rocket-launch
  - youtube-logo
labels:
  - Repositories
  - Frontend
  - Demo
---

## Technologies Used
* Amazon Web Services
  * Lambda
  * DynamoDB
  * Cognito
  * EventBridge
  * Kinesis
  * AppSync
  * Amplify
  * Amazon Connect

* Docker
* Python
* TypeScript
* NextJS


## Responsibilities and Contributions

Led a team of 15 computer science students to create an interactive dashboard to 
analyze and visualize real-time data for an Amazon Connect contact center.

### Backend
* Create a personal chat assistant using a Retrieval Augmented Generation (RAG) workflow with Langchain and the OpenAI API.
* Integrate a mock flight data API and some functions from the Amazon Connect API with the chat assistant.
* Implemented and deployed serverless functions for natural language tasks such as transcriptions and sentiment analysis.
* Collaborate in the design of the database schema.
* Designed and configured real-time workflows using Kinesis data streams to trigger functions and process Amazon Connect call chunks.
* Configured EventBridge rules to send alerts for supervisors to take actions according to certain contact center metrics and heuristics.

### Cloud
* Manage IAM permissions, roles and users to be securely used by other developers and services.
* Design an event driven cloud architecture and present the Statement of Architecture Work
* Define cost-efficient deployment strategies.
* Enable features through Infrastructure as Code (IaC) scripts.

### Frontend
* Integrate and consume APIs through polling and subscription mechanisms to get state from the backend.
* Created web components to show live transcripts and call duration statistics.
* Developed views to query, read previous call transcripts and listen to recordings.

### Project Management
* Collaborate with product owners during the design and implementation of the service
  * Software Requirement Specification
  * Estimate the effort and time required to develop the project
  * Weekly progress updates


## Challenges

Optimizing our costs and interacting with the Amazon Connect API while being constrained by the real-time
requirements was challenging both during the design and implementation stages due to the natural language
processing tasks required to gain insights from live calls and the cloud architecture that was needed to
support these operations with scalability, availability, reliability and security in mind.