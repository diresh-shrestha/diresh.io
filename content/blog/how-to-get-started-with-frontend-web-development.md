---
slug: "/blog/how-to-get-started-with-frontend-web-development/"
title: "How To Get Started With Frontend Web Development"
date: "2020-12-25"
featured: frontend.png
description: "In this blog post, I lay out some tips and resources to get you started on your Front-end Web Development journey"
excerpt: "Some resources to get you started on your Front-End Web Development journey."
tags: ["Web", "React"]
---

<!-- ![Frontend Web Development](https://fabiopacifici.com/wp-content/uploads/2019/11/frontend_dev.png) -->

_Credits: unDraw_

Learning web development can be very daunting because of the sheer number of technologies/libraries/frameworks you need to learn and keep up with. Luckily, there are numerous resources online (for free) that will help smoothen out the process.

## How I got started

Summer of 2019, I did an internship in Tokyo at a company called Emurgo. The company focused on providing blockchain solutions to governments and businesses. I was tasked with updating the landing page for a product that they created called Yoroi Wallet. Since I had never coded in JavaScript or even heard of React before, I took it as a learning opportunity and spent the first week trying to familiarize myself with it. I did manage to update the landing page by the end of the internship and I came out of the experience with a newfound interest and appreciation for web development.

Upon returning, I spent the past summer trying to learn everything from scratch. After a few months, I felt I was ready for my first project and I wanted it to be a personal portfolio website. After a few weeks of working on it, I finally published this website early December.

My goal with this post is to provide some great resources that I have found in my journey and share them and to make the process less intimidating to someone interested in becoming a web developer. I am by no means an expert or a web developer. However, I have learned a few things along the way that I wish I knew when I first started.

## Where to begin?

When it comes to learning anything new, the hardest part is always the beginning. If you want to become a web developer, you may have googled "how to become a web developer" and ran across the same problem I had. The amount of options and the sheer number of technologies you need to learn feels overwhelming and you lose motivation. Luckily, once you get past the initial hurdle, the amount of choices works in your favor because you get to choose from several great options and pick the technology or framework that's most intuitive for you.

A roadmap can help you figure out what you need to learn, in what order, and to get a sense of the technological landscape. Therefore, it's a good idea to start with an overall roadmap to plan out your learning process. Here's a roadmap for Frontend development pulled from [Roadmap.sh](https://roadmap.sh/) :

[![Front-end Roadmap](https://roadmap.sh/roadmaps/frontend.png)](https://roadmap.sh/roadmaps/frontend.png)
_Credits: Roadmap.sh_

They also have roadmaps for backend, DevOps, React, etc. Although this is a good tool, you don't necessarily have to follow their recommendations but we will be using it as our guide.

> If you are new to web development and you don't know what Frontend means [here's](https://www.pluralsight.com/blog/software-development/front-end-vs-back-end) a good explanation of the differences between Frontend, Backend, and Fullstack.

## The Basics

Let's start with the very basics. What is the internet and how does it work? When you type a web address such as "www.google.com", how do you get the Google homepage? I'll be honest before I started learning web development, I actually couldn't answer any of these questions. Even as a Computer Science major, I had no idea. In my junior year in college, I took a Computer Networks course where I learned that the internet is simply a network of networks. What does this mean? There's an [excellent paper](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm) by Stanford explaining this and how the internet works. It's a 10-minute read, and it summarizes everything I learned in the course. After reading it, you should have a good understanding of how it's all connected. If you're more of a visual learner, these [videos](https://youtube.com/playlist?list=PLkZYeFmDuaN21nQjzE4RLLNccK_YP0P0_) will help you understand the workings of the internet.

If you want to read it or watch it later, all you need to know now is that the internet is just a bunch of computers that are interconnected through cables and wires where each computer has a unique IP address. Some of these computers are called servers that have to be online 24/7 to "serve" you data anytime you request it. When you go to your browser and type in a web address such as "www.google.com", your ISP will send a request to a Domain Name Service (DNS) Server. The DNS will then try to find the IP address of the Google homepage, and once you have the IP address, the request will be sent by your ISP through the Internet Backbone, which is a bunch of large networks that interconnect with each other. But what if you were in the US and you wanted to access a website hosted in Europe? How are different continents interconnected? They are connected through fiber-optic cables that run through the ocean floor. Here's a map of all the fiber optic cables that interconnect different nations and continents:
[![Submarine cable map](https://images.theconversation.com/files/100571/original/image-20151102-16507-fs65z0.png?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop)](https://images.theconversation.com/files/100571/original/image-20151102-16507-fs65z0.png?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop)
_Credits: submarinecablemap.com_

## The Big Three

After a basic understanding of how the internet works, we are ready to move on to the big three: HTML, CSS, and JavaScript. I call these the big three because you cannot become a web developer without mastering these three first. They will be the foundation on top of which you will learn and use different frameworks. Here are a few resources to help you master these three concepts:

### [Interneting is Hard](https://www.internetingishard.com/html-and-css/)

_Great for learning: HTML & CSS_

[Interneting is Hard](https://www.internetingishard.com/html-and-css/) is a free website geared towards complete beginners, which makes it the perfect place to start your journey. It covers everything you need to know about HTML and CSS and contains beautiful diagrams, concise explanations of concepts, and hands-on examples.

### [FreeCodeCamp](https://www.freecodecamp.org/)

_Great for learning: Fullstack_

[FreeCodeCamp](https://www.freecodecamp.org/) is a tool created by software developers to help other software developers. The best part is that it's completely free. It's a non-profit supported through donations, so if you feel like it has helped you, I recommend donating whatever you can. It's a great place to practice HTML and CSS that you have learned so far and even practice JavaScript.

After you sign up and create your profile, you will be greeted with a bunch of well-categorized topics from the basics to advanced stuff. It also gives you the estimated amount of hours it will take for you to complete the category but I've found it to be way off. For completing a category, you will be rewarded with certification. If you are someone who learns by doing and using the skill instead of reading about it, this is a great resource for you. In every topic, you have a brief explanation, an example, and an exercise that you can try on the code editor provided in the lesson itself along with a preview pane that shows the results. You can then run the tests and see if your code does what it's intended to do and it even gives you hints to help you debug it. This will prove very helpful especially when you're doing the JavaScript lessons. It's great for both novices and masters who need to brush up on their skills. You can not only learn Frontend but you can choose to continue and learn Backend technologies as well.

### [RithmSchool](https://www.rithmschool.com/courses)

_Great for learning: Fullstack_

[RithmSchool](https://www.rithmschool.com/courses) is another free resource that you can use to learn Fullstack development. What I like most about RithmSchool is that almost every technology is divided into different levels based on difficulty, and the number of hours required to complete those topics is more accurate. You can even learn how to use the terminal and basics of Git and GitHub.

### [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md)

_Great for learning: JavaScript_

If you want to dive deeper into JavaScript and how it works, the [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md) book series is a completely free resource.

### [Angela Yu's Course](https://www.udemy.com/course/the-complete-web-development-bootcamp/)

_Great for learning: FullStack_

Angela Yu's [course](https://www.udemy.com/course/the-complete-web-development-bootcamp/) on Udemy is great for learning Fullstack web development. The only caveat is that it is not free but you can grab it at a relatively cheap price while it's on sale. Angela is a phenomenal teacher and she does a great job preparing you for the course and provides plenty of resources to help you along the way.

### [NodeSchool](https://nodeschool.io/)

_Great for learning: Backend_

If you want to practice JavaScript while simultaneously using the terminal, [NodeSchool](https://nodeschool.io/) has some great modules (I talk about package managers below). You will need to install NodeJs and npm first on your computer before you can use these modules but once you have done that, installing them is very easy, and using them is just as easy.

## Version Control and Package Managers

Once you're comfortable with the big three, the next step on the journey is learning about version control and package managers.

From the [Pro Git Book](https://git-scm.com/book/en/v2), "Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later." Git is a version control tool developed by the Linux development community. Github is a service where you can host your Git repositories. The best place to start is with the [RithmSchool course](https://www.rithmschool.com/courses/git) on Git and Github. But before you start with Git, it's best to be comfortable with using terminal and terminal commands. Although IDE's like VS Code have Git built-in which you can use through point and click menus, I still highly recommend learning basic terminal commands. Again, RithmSchool has a good [course](https://www.rithmschool.com/courses/terminal) on terminals. The [Pro Git book](https://git-scm.com/book/en/v2) is also an excellent resource to master Git.

Package managers are simply tools that automate the process of installing, updating, uninstalling, and keeping track of different packages, libraries, and frameworks that you will be using to create your websites. The two most popular package managers for NodeJs and Javascript are [npm](https://www.npmjs.com/) and [yarn](https://classic.yarnpkg.com/en/). You can choose either one of them. If you go with npm, both [freeCodeCamp](https://www.freecodecamp.org/learn/apis-and-microservices/managing-packages-with-npm/) and [RithmSchool](https://www.rithmschool.com/courses/node-express-fundamentals) have courses to help you understand and use it.

## Frontend Framework

Now, to the big question: Which frontend framework should I pick? The answer: it doesn't matter that much. The most popular ones are React (developed by Facebook), Angular (developed by Google), and Vue (developed by Evan You). I use React and I enjoy it. I can't speak for other frameworks because I haven't learned or tried them yet so I can't give you a definite recommendation. I can only show you what other developers are using and what they want to learn.

As you can see below, React seems to be garnering the most interest among developers according to a StackOverflow survey.

[![StackOverflow technological interest survey](https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_767/https://existek.com/wp-content/uploads/2020/01/frame.png)](https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_767/https://existek.com/wp-content/uploads/2020/01/frame.png)

_Credits: StackOverflow_

When it comes to popularity and retention, React seems to be the clear winner again based on a survey by [StateofJS2019](https://2019.stateofjs.com/).

[![StateofJS Frontend frameworks](https://2019.stateofjs.com/images/captures/front_end_frameworks_section_overview.png)](https://2019.stateofjs.com/images/captures/front_end_frameworks_section_overview.png)
_Credits: [StateofJS2019](https://2019.stateofjs.com/)_

[Svelte](https://svelte.dev/) seems to be the new kid in the block that's turning a lot of heads. They have an amazing [tutorial](https://svelte.dev/tutorial/basics) if you want to pick Svelte for your frontend framework.

You can pick any of these but what's more important is to understand the concepts and master them. Once you've mastered one framework, you can learn or switch to another framework easily. To help you decide, [TodoMVC](http://todomvc.com/) provides source code for a simple todo app written in most Frontend framework. You can look at the different source codes and figure out the one that seems most intuitive to you. But based on the surveys, React is a safe bet.

### Why React?

According to React's official website, React is "a JavaScript library for building user interfaces". It allows you to create reusable UI "components". A component is simply a part of a user interface. This 100-second [video](https://www.youtube.com/watch?v=Tn6-PIqc4UM) by [Fireship](https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA) does an amazing job of giving a very brief overview of React.
If you want to learn more about React and its features, [this](https://www.c-sharpcorner.com/article/what-and-why-reactjs/#:~:text=It%27s%20used%20for%20handling%20the,to%20create%20reusable%20UI%20components.&text=React%20allows%20developers%20to%20create,fast,%20scalable,%20and%20simple.) and [this](https://stories.jotform.com/7-reasons-why-you-should-use-react-ad420c634247) article do a pretty good job of explaining its features and why you should pick React.

If you decide to go with React, the best place to start would be the official [documentation](https://reactjs.org/docs/hello-world.html). I also highly recommend Angela Yu's course on Udemy. Yu eases you into the different concepts in React using stateless functional components instead of stateful class components, and there are plenty of exercises that will help you practice those concepts. FreeCodeCamp and RithmSchool's courses for React are also great for beginners.

After you have learned React, there are a few tools you can use to expand your skillset and make your life easier. These are listed below based on their uses:

- State Management: [Redux](https://redux.js.org/)
- Styling Components: [Styled-components](https://styled-components.com/)
- Using pre-written components: [Material-UI](https://material-ui.com/)/[Reactstrap](https://reactstrap.github.io/)
- Testing: [Jest](https://jestjs.io/)
- Creating Static Sites: [Gatsby](https://www.gatsbyjs.com/)
- Server Side Rendering: [Next](https://nextjs.org/)
- Mobile App Development: [React Native](https://reactnative.dev/)

## Conclusion

One of the best things about the internet is the availability of information. With these resources in hand, you can gently begin your journey into frontend web development whether you're a complete novice without any prior programming experience, or a computer science student trying to increase your skillset.
