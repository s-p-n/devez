# devez

Tools to make development easier.

# Before Starting
* You must have **npm** and **node.js** installed.
* This software was designed using node.js v9.11.1 and npm 5.6.0.

# Starting
Download this repository into your project's directory and run:
	
	npm i

To run the development environment (localhost:3000):

	npm run dev

To build the distribution directory (/dist) for the production environment:

	npm run build

To run the production environment (localhost:8080):

	npm start

# Why?
Because everyone's talking about "The jQuery days", and I feel old. I feel that I ought to be using React.

# Ok, so what is this?
I'm not sure. Is it a framework? Kind of. Is it just me experimenting, sure. Is it something you can use? Maybe- so I made it free like beer and like freedom (License: MIT). 

# What's it do?
Uhh, well so far it's just a framework or layout plan. It's like a starting point, but I'm continuously building onto it- be it right or wrong. I plan on making more components for us to use, and I welcome feedback or even contributions.

The build steps are working, and right now are through webpack with the help of babel. Oh, did I mention I'm using S(C|A)SS- a compile-to-css thingy? Yeah, there's that. I'm not really good at React or Sass, but those are things. 

Someday I'll go through this readme and change all of the brand names to links and stuff. 

This thingy is fucking raw as fuck, so take it as me experimenting.

# Where is everything??
Ok, so everything in the base directory is just build setup, some package.json and shit. Oh, and the MIT license. ;)

Ok, so you get 2 folders: src and public. Guess what they do?

Ok ok, I'll stop being an asshole. The `src` folder is for your React and SASS source code. Go figure. When you open it up, you get a React entry point file, `index.js`. I name all entry point files `index.[extension]`.

## Sass
 Sass, of course, has to be different, and the entry files are `_index.scss` because sass files like to start with `_` for some reason.. who knows? I don't really care. 

But anyway, I also have several Sass entry points, as you'll see by combing through the `/src/scss` folder. So far I have 4 directories, but I actually plan on having 7- because that's a pattern I guess- the 7-1 pattern. Yeah I know, no link :( I'm lazy, you can Google :).

So, styles and shit go in there. Sass is compiled all into 1 ginormous CSS file at the moment, but I do plan on optimzing.. later. See, back in my day, premature optimization was a sort-of sin.

So that's how sass is sorted so far.

## React
Ok, so I mentioned `/src/index.js` is the entry point for react. Did I mention React can do a backflip? It can.

Anyway, so you can see I have a `/src/react/` folder, which you've probly already combed through and figured out. I'm doing the same 7-1 pattern there, it's not that complex. App.js is an entry point that I didn't name index.js.. Hm, but I will. Supposed there's no reason I don't do that right now, except I'm writing the Readme right now.

Ok getting sidetracked, sorry. Uh.. Oh! the react organiztion thing. Yeah, so I have a folder named base, a folder named components, and one named pages. That's what I got so far, deal with it. There will be 7 someday, but right now there's 3. So, look at the code, read through it, figure it out- it's not complicated, and let me know if you have any issues.

# Huh?
Spence out!