---
slug: "/blog/an-introduction-to-react-hooks/"
title: "An Introduction to React Hooks"
date: "2021-01-09"
featured: react-hooks.jpg
description: "A brief and gentle introduction to React Hooks. Hooks are functions that allow the user to 'hook into' different React features from function components."
excerpt: "A brief and gentle introduction to React Hooks. "
tags: ["Web Development", "React"]
---

<!-- ![React Hooks](https://i.imgur.com/DorT4NU.jpg) -->

_Photo credits: Eric Pamphu Limbu_

Hooks are functions that allow the user to "hook into" different React features from a functional component. They were introduced in version 16.8 and are gradually being adopted by React developers.

Before Hooks, if you were writing a function and realized you needed to utilize React `state`, you had to write a class component to access states. `state` in React are variables that are declared and managed by the component itself. Unlike `props`, it can be changed or updated. If you want to read more about the differences between `props` and `state` in React, you can check this [article](https://kentcdodds.com/blog/props-vs-state). With the advent of hooks, you can utilize state right in your function.

Here's an example of a simple button that increases the count when clicked using class components:

```jsx

class Counter extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {count: 0};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);  }

  handleClick() {
	  this.setState(count => ({
		   count: count + 1
		   }));
		}
  render() {
    return (
	    <p>Count is {this.state.count} </p>
      <button onClick={this.handleClick}>
	      Click Me!
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

Here's the same example using Hooks:

```jsx
import React, { useState } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Count is {count}. </p>
			<button onClick={()=>setCount(count+1)}>
				Click Me!
			</button>
		)
	}
```

As you can see, this greatly simplifies and minimizes your React code. You don't need to write classes anymore with dozens of `this` that might confuse not just the reader but the one writing the code as well. Writing components are brought down to their bare minimum: a javascript function that returns html elements.

In this post, we will learn the three basic Hooks which are:

- `useState`
- `useEffect`
- `useContext`

There are additional Hooks but they're not as commonly used. If you want to learn about them, React's [documentation](https://reactjs.org/docs/hooks-reference.html) is the best place to start.

Before we dive into Hooks, we should first understand React Component Lifecycle methods.

## Component Lifecycle

In React, each component goes through a lifecycle, and each lifecycle has a method associated with it that you can utilize to run code at particular times in the process. There are stages in a component lifecycle. The first is Mounting, which means a component has rendered for the first time. The second is Updating, which is when new props are passed, and lastly Unmounting, which is when a component is removed. Here is a good illustration of component lifecycle by [Wojciech Maj](https://github.com/wojtekmaj):

![React Component Lifecycle](https://i.imgur.com/Hsyrzdc.png)

The three component lifecycle methods are:

- `componentDidMount`: invoked after the compnent renders.
- `componentDidUpdate`: similar to `componentDidMount`. Invoked when there's a change to props or state.
- `componentWillUnmount`: called when a component is being removed from the DOM.

## The useState Hook

The `useState` Hook lets you declare and use React state. To declare a `state` variable, we call the `useState` hook inside our component.

```jsx
import React, { useState } from "react"

function Component() {
  const [count, setCount] = useState(0)
}
```

Here, we're declaring a new variable `count` that will hold our value and we're also declaring `setCount` that is a function that will update the value. You can name these variables whatever you like but the convention is to set the name of the variable and prefix it with `set` for the update function. We call `useState` hook and the value we pass into it is the default value or the initial state. In the above example, we're passing the number 0 as the initial state but you can pass a `string`, `bool` or any primitives including an `object`. Basically, we give it whatever we want our variable's initial state to be. React will remember the value inside the variable between re-renders and pass the current value to the update function. The `useState` hook returns the current value and a function that updates the value, and you can declare as many state variables as you require.

```jsx
const [count, setCount] = useState(0)
const [isToggled, setIstoggled] = useState(true) //highlight-line
```

We can display the current value of our state inside a function

```jsx
import React, { useState } from "react"

function Component() {
  const [count, setCount] = useState(0)

  return (
    <p>The count is {count}. </p> // highlight-line
  )
}
```

If you want to update the value of count based on an event such as a user clicking a button, you can call the `setCount` function and update it.

```jsx
import React, { useState } from "react"

function Component() {
  const [count, setCount] = useState(0)

  return (
    <div>
      // highlight-next-line
      <button onClick={() => setCount(count + 1)}> Click Me!</button>
      <p>The count is {count}. </p>
    </div>
  )
}
```

You can also create an arrow function that calls `setCount` and updates the value like so:

```jsx
import React, { useState } from "react"

function Component() {
  const [count, setCount] = useState(0)
  {
    /* highlight-range{1-3} */
  }
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={handleClick}> Click Me!</button>
      <p>The count is {count}. </p>
    </div>
  )
}
```

Here is the result of the above functional component:

<iframe src="https://codesandbox.io/embed/still-shadow-ips9o?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="still-shadow-ips9o"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Here's another example using a `bool` as a default value instead of a number:

```jsx
import React, { useState } from "react"

export default function DadJoke() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <p>
        Chinese take out: 8 dollars. Tip: 2 dollars. Getting home to find out
        they forgot part of your order...
        {show && "riceless"}{" "}
      </p>
      <button onClick={() => setShow(true)}>Reveal psunchline</button>
      <button onClick={() => setShow(false)}>Hide punchline</button>
      <p>Credits: u/Degtyrev</p>
    </div>
  )
}
```

We've appropriately named our variables `show` and `setShow` and passed the default value of `false` to `show` using `useState`. On the `<p>` tag, we set the punchline as a conditional with `{show && "riceless"}`: "riceless" only shows up when the `show` variable is true. We then add a button that sets the state of `show` to `true` and another button to set it to `false`. Here is the result:

<iframe src="https://codesandbox.io/embed/hungry-meadow-16tnr?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="hungry-meadow-16tnr"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

We could also have a single button that toggles the visibility of the punchline by changing the `onClick` function to `onClick={()=>setShow((show) => !show)`. This would take the previous state of show and invert it meaning if show was false before, it would set it to true and vice versa.

Here's another example of a digital clock:

```jsx
import React, { useState } from "react"

export default function Clock() {
  // get current time
  let time = new Date().toLocaleTimeString()
  // set the state to current time
  const [currentTime, setCurrentTime] = useState(time)
  // update current time using setCurrentTime
  const updateTime = () => {
    let time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }
  // calling the updateTime function every 1 second
  setInterval(updateTime, 1000)

  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  )
}
```

In this example, we are creating a digital clock that shows the current time including seconds. We set the state as the current time and to update the seconds, we use the `setInterval` function. The `setInterval` function takes a function and time (in milliseconds) as parameters and executes the function continously every given time interval, so we pass the `updateTime` function and 1000ms as the time. Inside `updateTime` we are creating a new date and using `setCurrentTime` to update the `currentTime`.

<iframe src="https://codesandbox.io/embed/usestate-hook-practice-forked-e6g5o?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="useState Hook Practice (forked)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## The useEffect Hook

The `useEffect` Hook lets you perform "side effects" in functional components. Side effects are actions that change the DOM such as changes in `props` or `state`, data fetching, setting up a subscription, etc,. Unlike `useState`, you declare `useEffect` as an arrow function.

```jsx
import React, { useState, useEffect } from "react"

function Component() {
  useEffect(() => {
    // perform some action
  })
}
```

To use our previous counter example, we can use the effect Hook to update the document title using a browser API to whatever's inside the state variable.

```jsx
import React, { useState } from "react"

function Component() {
  const [count, setCount] = useState(0)
  {
    /* highlight-range{1-3} */
  }
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Click Me!</button>
      <p>The count is {count}. </p>
    </div>
  )
}
```

Now everytime you click on the button, the title of the webpage also updates. What's happening here is that it's running after the first render and after every update. Instead of having to call `componentDidMount` and `componentDidUpdate`, `useEffect` lets us kill 2 birds with one stone.

Here's a more complex example putting everything together that we've learned so far:

```jsx
import React, { useState, useEffect } from "react"

export default function Typer({ data, styleObj }) {
  /** These constants control the speed of the typing and deleting effect */
  const CONSTANTS = {
    DELETING_SPEED: 80,
    TYPING_SPEED: 150,
  }
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  })
  useEffect(() => {
    function getTypingSpeed(currentState) {
      return currentState.isDeleting
        ? CONSTANTS.TYPING_SPEED
        : CONSTANTS.DELETING_SPEED
    }
    let timer = ""
    const handleType = () => {
      setState(prevState => ({
        ...prevState,
        text: getCurrentText(prevState),
        typingSpeed: getTypingSpeed(prevState),
      }))
      timer = setTimeout(handleType, state.typingSpeed)
    }
    handleType()
    return () => clearTimeout(timer)
  }, [
    CONSTANTS.DELETING_SPEED,
    CONSTANTS.TYPING_SPEED,
    state.isDeleting,
    state.typingSpeed,
  ])

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState(prevState => ({
          ...prevState,
          isDeleting: true,
        }))
      }, 500)
    } else if (state.isDeleting && state.text === "") {
      setState(prevState => ({
        ...prevState, // prevState means currentState
        isDeleting: false,
        loopNum: prevState.loopNum + 1,
        message: getMessage(prevState, data),
      }))
    }
  }, [state.text, state.message, state.isDeleting, data])

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1)
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)]
  }

  return <span style={styleObj}>{state.text}</span>
}
```

Here, we're calling `useEffect` twice. The first time to get the typing speed and invoke a function that updates the `text` field inside the state object, and the second time to check the `isDeleting` field and see if the complete text is outputted and also to see if all the text is deleted. This is also an example of effects with cleanup because in the first effect Hook, we are clearing the timer. The result of this component is a typing effect as you can see below

<iframe src="https://codesandbox.io/embed/falling-leaf-u7okb?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="falling-leaf-u7okb"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## The useContext Hook

The `useContext` Hook allows us to accept a context object and return the current context value for that context. If you don't know what React Context is, this [article](https://www.robinwieruch.de/react-context) should be helpful. The Hook takes a context object as a parameter.

```jsx
import React, { createContext, useContext } from 'react'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = createContext(themes.light);

function Button() {
	const theme = useContext(ThemeContext);
	return (
		<button style={{ background: theme.background, color: theme.foreground }}>
			Styled Button
		</button>
```

First, we create a context object using `createContext` and we "consume" that context using `useContext`. Now, no matter how horrendous our component tree, we can pass in the context down to any child component.

After you know these three Hooks, you can even [build](https://reactjs.org/docs/hooks-custom.html) your own Hooks. However, since Hooks are simply javascript functions, there are two rules that you need to follow while using Hooks. They are:

1.  Only call Hooks at the top level. Don't call them inside loops, conditions, or nested functions.
2.  Only call Hooks from React Functions. Don't call them from regular javascript functions.

That's it! Thanks for reading and I hope you have fun implementing React Hooks.
