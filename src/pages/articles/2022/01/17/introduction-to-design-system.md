---
title: 'Introduction to Design System'
dateTime: '2022-01-17T13:00:00'
image: ''
tags: '🧰 Design System, 🕸️ Web'
keywords: 'casting design system'
published: true
---

While developing [Casting](https://brand.casting.socar.kr/process) at [VCNC](https://vcnccorp.notion.site/Value-Creators-Company-28a75434e6154bee87e2a624cf6d08fa), I had a chance to lead our team to build a design system. Through a series of short articles I would like to document the challenges I experienced and my own solutions to overcome them.

## 🤔 Why Design System?

A design system is a collection of resuable design patterns, including color variables, components, and even layouts, that are consistently used across projects. Introduction of a design systems to applications can benefit both designers and developers. Designers can easily improve consistency and usability of user interfaces and prevent excessive production of components. Developers can improve the efficiency of development and can communicate with designers more formally through design systems.

In order to meet the [TTM](https://en.wikipedia.org/wiki/Time_to_market) of used car market in Korea, my team had to release a brand-new service within 3 months. Ironnical to its importance, only three developers, including both front-end and back-end developers, were assigned to the project. For quick development, my team introduced a design system for the first time in the company. It took some time to formalize the concepts of design components and communicate with designers at first, but once we built a skeleton of the system the development process was faster than ever.

![In app images of Casting](/images/2022/01-17-casting-inapp-images.png)

Fortunately, the designer I worked with had experience developing a prototypical design system in another project. The skeleton of our design system was greatly influenced by the prototype and we could build even a better system with several iterations of conceptual reworks and hundred times of dicussions. I really enjoyed developing a design system because there were so many design decisions (not only visible parts of UI but also interface and options of components!) I can insist and make. Plus, I liked the dicussions with designers because different perspectives that developers and designers have were interesting and always led to a better design decisions.

## 🎯 Goals

The goals of our design system are summarized below. In the following articles, I will explain what decisions I made to achieve the goals and how I made them.

- Improve the efficiency of UI desining and code development by **_componentizing resuable design patterns_**.
- Use the design system to **_align the conceptual understanding of UI_** between developers and designers.
- **_Make look and feel of UI consistent_** through design system.
- **_Refelct the guidelines and concepts_** of the design system as much as possible to the code.
