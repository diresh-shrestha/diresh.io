---
slug: "/blog/nodejs-for-beginners/"
title: "Node.js For Beginners"
date: "2021-02-14"
featured: images/nodejs.png
description: "An introduction and example based guide to Node.js for beginners."
excerpt: "An introduction and example based guide to Node.js for beginners."
tags: ["Web Development"]
---

![Node.js](./images/nodejs.png)

Node.js isn't a new programming language but it is a runtime environment. Up until now, your javascript code has been locked inside the browser. We couldn't use javascript to access the filesystem in your computer, and the reason for that is because you don't want malicious code written by someone to access your private information. Node.js allows you to run javascript code outside of the browser on hardware or the server-side.

It runs on the V8 JavaScript engine, which is an open source high performance JavaScript and WebAssembly engine, written in C++ by Google, which also powers Google Chrome.
From the nodejs official website:

> Node.js is an open-source and cross-platform JavaScript runtime environment.
> As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

If you're wondering what asynchronous means, i'll talk about that in just a bit. This article and the examples I used were inspired by [NodeSchool's](https://nodeschool.io/) learnyounode module.

## Why Node.js?

If you're a Front-End Developer who codes a lot in JavaScript but want to learn or get into back-end, you don't need to learn a new language. Node.js files are written in JavaScript so it's a nifty way of doing fullstack development in the same programming language.

## Feautres

### Asynchronous and Event Driven

Asynchronous simply means that Node API will not wait for a response or data but it moves on to the next request. This is also called non-blocking because it does not "block" the execution of the next line of code. Here's a simple comparison of synchronous and asynchronous code in Node.js:
Synchronous:

```javascript
const fs = require("fs")
const data = fs.readFileSync("/hello.txt") // blocks here until file is read
console.log(data)
someFunction()
```

Asynchronous:

```javascript
const fs = require("fs")
fs.readFile("/file.md", (err, data) => {
  if (err) throw err
  console.log(data)
})
someFunction()
```

The key difference here is the difference in Node API. In the first example, we're using `readFileSync()` method where `Sync` means, you guessed it, Synchronous. The program will wait for the file to be read and data to be logged on the console before getting to the `someFunction()`. In the asynchronous example, it takes a callback function as a second parameter, and `someFunction()` will execute before the data is logged on the console because it doesn't wait for the file to be read. After the data is read, it will fire up the callback function, which will output the data.

### Speed

Like I mentioned earlier, Node is built on top of Google's V8 JavaScript engine, written in C++. Hence, Node programs execute very fast.

### Single Threaded

Instead of thread-based servers, Node uses a single thread to handle requests using event loops. Async processing on a single thread handles thousands of concurrent connections better than thread-based and it also relieves of the burden of managing thread concurrency, but it also has it's downsides. A CPU intensive scenario with low number of concurrent connections will be better handled by a thread-based server that creates a new thread per request.

![nodejs diagram](./images/nodejs-diagram.jpg)

_Node.js System Diagram_

_Photo credits: @BusyRich_

## Installing Node.js

You can download and install Node.js for windows, linux, or mac from the official [website](https://nodejs.org/en/download/), or you can go to [this](https://nodejs.org/en/download/package-manager/) page for more options on downloading.

There's also a program called [Node Version Manager(nvm)](https://github.com/nvm-sh/nvm#installing-and-updating) that lets you install a specific version of node on your system. You can also install multiple versions of node for multiple projects that require different versions of node, and it also lets you install the long term support (LTS) version.

## Getting Started

Once we have installed Node.js, we are ready to dive into Node.js. The best way to learn, in my opinion, is by doing so here are some solid examples that you can follow along that will help you familiarize yourself with the most important concepts in Node.js.

### Hello World

It's best to be comfortable with using the terminal because you run node files through the command line. To get started, let's run a simple node program that outputs "Hello World!" to the console. Since, node.js files are simply JavaScript files, simply create a new file in the directory of your choice and name it `hello-world.js`. Open the file with the editor of your choice and then type in

```javascript
console.log("Hello World")
```

Save the file and to run it, type `node` followed by the filename and hit Enter.

```
node hello-world.js
```

This will output `Hello World` into the console. Congratulations! You've just successfully created a Node.js program and ran JavaScript code outside of the browser on the command line.

### Node REPL

Before we move on to other examples, let's briefly look at the Node REPL, which stands for Read Evaluate Print Loop. REPL is an environment that takes single expression as user input and returns the result back to the console after execution. If you have used Python's IDLE, it is very similar to that. To get into REPL mode, open up a console window and type

```
node
```

From here, you can type individual lines of code. Type in

```
console.log("Hello World!)
```

like in the previous example and you should see "Hello World!" in the console.

### Accepting Command-Line Arguments

You can also pass any number of command-line arguments to a node program by adding those arguments while invoking the program.

```
node hello-world.js 1 2 3
```

Here, 1, 2 and 3 are arguments. To access the arguments, we can use the global `process` object. `process` object contains an `argv` property, which is an array that contains all the command line arguments including the node path, which is always the first argument (index=0), and file path, which is always the second argument(index=1).

Let's say, for example, that we want to output the sum of all the arguments we pass. In the previous line of code, our output should be `6`. We can loop over all the arguments (except the first two) and add them and then log them. However, the arguments are always typecast into strings so we need to convert them to numbers first using either + as a prefix `+process.argv[2]` or passing it to `Number()` like `Number(process.argv[2]`. Let's create a new file called `sum.js` and type this block of code.

```javascript
let sum = 0
for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i])
}
console.log(sum)
```

Now, when you run the program using

```
node sum.js 3 4 5
```

you will get `12` as output.

### The Filesystem(fs) Module

The `fs` module let's you acces the files in your system and read, modify, copy them, among lots other. The `fs` module is part of the Node.js core library meaning you don't have to install it. It comes pre-installed and you can simply `require` it in your program like so:

```javascript
const fs = require("fs")
```

Here, we're declaring a new constant variable called `fs` and assigning it the `fs` module by using `require`. Now, we can access all the methods inside the `fs` module. For starters, let's create a new directory called `fs` and inside the directory, create a new file called `file1.txt` and write "Hello from file 1" in to it. Inside the directory, also create a new JavaScript file and let's call it `index.js`. Inside the js file, we will `require` the `fs` module and use the `copyFileSync()` method to copy the file into a new file. `copyFileSync()` takes 2 arguments, first of which is the source filename to copy, and destination filename. The `Sync` at the end simply means that this method is synchronous instead of asynchronous meaning it will wait for the process to end before listening to a new request. Let's go ahead and write into our `index.js` file.

```javascript
const fs = require("fs")

fs.copyFileSync("text1.txt", "text2.txt") //highlight-line
```

Now, when you're inside the `fs` directory, run the application.

```
node index.js
```

Now, you will see a new file in the directory named `text2.txt` and when you open it, you should see the text from file1 "Hello from file 1".

Let's do a simple exercise now. Let's say there is a text file that contains any number of lines of texts. We want to read the file and count the number of newlines (\n) there are. For this exercise, we can use the `readFileSync()` method which takes in the file path as argument and returns the contents of the path as a buffer, unless you provide an `encoding` option in which case it will return a string. Buffer objects represent arbitrary arrays of data, and to be convert it into string, we can use the `toString()` method. Let's create a new directory called `newline` and inside create a new text file called `test.txt` with multiple lines of text. Create another file called `index.js` where we will write our program.

```javascript
const fs = require("fs")

// We're passing 'utf8' as encoding so it returns a string
const data = fs.readFileSync(process.argv[2], "utf8")
// We use the .split() method that splits the string into an array based on the character passed
// In our case, we pass the '\n' character and get the length of the array.
const lines = data.split("\n").length

console.log(lines)
```

Now, we run the program by passing in the text file as argument.

```
node index.js test.txt
```

This will output the number of lines in the text file.

This was an example of a synchronous method. What about an asynchronous method, which is Node.js way of doing it. Instead of using the `readFileSync()` method, we use the `readFile()` method. The only difference is that we pass a callback function as the second argument into the method. Here's the same program reading the file asynchronously.

```javascript
const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
	if (err) throw err;
	const lines = data.split('\n').length;
	console.log(lines);
}
```

Inside the callback function, we have 2 arguments `err` and `data`. We can check for errors if the `err` is truthy and then throw an error or log it. If there was no error, we get data which is simply the contents of the file.

To check out all the methods in the `fs` module, check out the official [documentation](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html).

To wrap this up, we're going to do one last exercise. We're going to list all the files in a directory that have the extension that we want. For example, we want to print all the files inside a folder that has '.txt' extension. To do this, we are going to use the `readdir()` method inside the `fs` module, which is an asynchronous method where the callback gets `(err, files)` as arguments. The `files` is an arry of filenames. We are also going to use the `path` module. The [path](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html) module contains a method called `extname()` that returns the extension of the `path`. We're going to create a new directory, and inside that directory, we are going to add a bunch of files into it with lots of different extensions, and we're going to create a new file called `index.js` where we will write our program.

```javascript
const fs = require("fs")
const path = require("path")
// get the directory name
const dir = process.argv[2]
// add a '.' to the extension
const ext = `.${process.arv[3]}`

// call the readdir() method
fs.readdir(dir, (err, files) => {
  if (err) {
    return console.log(err)
  }
  // loop over each file
  files.forEach(file => {
    // if the extension of the file matches the one we passed, we output it.
    if (path.extname(file) === ext) console.log(file)
  })
})
```

Now we can run the program inside our directory.

```
node index.js txt
```

This will output all the files with '.txt' extension.

Let's briefly talk about modularity. You can import functionality written in other Node.js files using the `require` keyword similarly to how you would import a global module. For instance, in the previous example, we can have the functionality in a seperate file called `ls-filter.js` and `export` it.

```javascript
const fs = require('fs');
const path = require('path');

module.exports = function (folder, fileExt, callback) {
	fs.readdir(folder, (err, list) => {
		if (err) return callback(err);

		list = list.filter((file) => path.extname(file === `.${fileExt}`);
		callback(null, list);
	});
};
```

Then, we can import it using `require` in the main `index.js` file.

```javascript
// including the .js extension in the filename is optional
const ls = require("./ls-filter")

const folder = process.argv[2]
const fileExt = process.argv[3]

ls(folder, fileExt, (err, list) => {
  if (err) return err
  list.forEach(file => {
    console.log(file)
  })
})
```

As you can see, we're simply looping over the list and logging it in the main file while the logic is hidden "under the hood", in a seperate file that we imported. The './' in front of the filename is to indicate that the file is in the current directory. If we want to go the parent directory, we would include '../'. You can think of one dot as "here" and two dots as "go back".

### HTTP Module

Node.js also has a built-in http module which you can use to create a server, make simple GET requests, and much more. The full list of methods can be found in the [documentation](https://nodejs.org/dist/latest-v14.x/docs/api/http.html).

Let's write a simple program that makes a HTTP GET request to a given URL, and outputs the string contents of each "data" event from the response to a new line on the console. Create a new file called `http-practice.js`. Like before, we import the http core module using `require`.

```javascript
// the http module allows you to create a server and issue HTTP
// requests and responses.
const http = require("http")
```

We can use the `get()` method to make simple GET requests. It takes a url as the fist argument and a callback function as the second argument. But unlike the previous example, the call back function is in the form of

```javascript
function (response)
	{
	 // do something
	  }
```

The response object is a Node `stream` object. These Stream objects emit events such as "data", "error", and "end". You listen to one of these events using the `on` method on the `response` object.

```javascript
response.on('data', function (data) { //do something })
```

The data event is emttied when a chunk of data is available and can be processed.

```javascript
cosnt http = require('http');
const url = process.argv[2];
// call the get method to initiate a get request
// the arguments are the url and a callback function
http.get(url, (res) => {
	// setEncoding method will convert the "data" events into
    // strings instead of Node Buffer objects
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(chunk);
	});
	res.on('error', console.error);

}).on('error', console.error);
```

This will output strings as chunks but what if you wanted to output the entire string? We can simply concatenate the different chunks into a single string.

```javascript
const http = require("http")
const url = process.argv[2]

http.get(url, res => {
  res.setEncoding("utf8")
  // create a new variable that will hold the string
  let rawData = ""
  res.on("data", chunk => {
    // concatenate the chunks of data
    rawData += chunk
  })
  // once the request has ended, output the entire string
  res.on("end", () => {
    console.log(rawData)
  })
})
```

Now let's try something a little trickier. Suppose we have three different urls and we want to complete the content provided by each url in the order that they are received as command-line arguments. The trick here is that the servers won't give us complete responses in the order that we pass the arguments. Some servers will take longer and some will take shorter. For this example, we will use the Buffer List `bl` module, which is an external module that we will install with `npm`. `npm` stands for Node Package Manager and it's where hundreds of thousands of useful modules are hosted that you can download for your use. You can even create your own module and upload it to npm! [Here's](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager) a quick look into npm.

```
npm install bl
```

We can `pipe` a stream of data in to them, and instead of concatenating it manually like we did earlier, it will do it for us and once the stream has ended, it will fire a callback with the complete data like so:

```javascript
res.pipe(bl(function (err, data) { console.log(data) });
```

Create a new file called `async.js`. We will be counting the callback functions to check if all three requests have been completed and we will be storing the results of each request in a results array with the proper index.

```javascript
const http = require("http")
// Buffer List has a stream piped in and will collect the data
// Once stream has ended, a callback will be fired with the data
const bl = require("bl")

// a results array where the data from the three url
// will be stored in order
const results = []
let count = 0

// A function to print the three results
function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

// a function that has argument index that will be passed on to a for loop
function async(idx) {
  // get the url based on the order that it arrives
  http.get(process.argv[2 + idx], res => {
    res.pipe(
      bl((err, data) => {
        if (err) return console.error(err)
        // convert the data into string and store it in
        // the results array with the appropriate index
        results[idx] = data.toString()
        // increase count
        count++
        // if count is 3, meaning all three url's have been processed
        // print the results
        if (count === 3) printResults()
      })
    )
  })
}

// call the async function three times
for (let j = 0; j < 3; j++) {
  async(j)
}
```

This way, even if the first url takes longer to give a complete response, the results will stil be printed in order.

## Further Learning

- [Nodejs.dev](https://nodejs.dev/learn/introduction-to-nodejs)
- [Fireship's Node.js Beginner's Guide](https://www.youtube.com/watch?v=ENrzD9HAZK4&ab_channel=Fireship)
