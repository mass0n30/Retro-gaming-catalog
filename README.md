Project Details

Built using twitch IGDB API: https://www.igdb.com/api 

Maybe add price chart data after developing (API price options like PriceCharting.com, costs $)

ToDo:
  - query for all genres, platforms, developers, years upon mount
  - pass value category props to HomePage component
  - pass setState category props to SideBar component
  - map out all elements for all categories using id keys 
  - replace the t_thumb in screenshot URLS for larger size
  - look into normalizing the screenshot dimensions 
  - perhaps change the original consoles to right platforms (like the wii snes games before 2006)
  - setSearch debounce logic
  - adding additional filter logic for order by
  - discover games selection route (filter logic still applying?)
Additional tasks
  - adding MVP features, user features 
  - adding additional user features(completed games list, watch list)?
  - adding custom loader
  - adding price data (costs $)
    - with price data, users can keep track of collection value, price fluctuations. 



FRONTEND:

Feature I want to build is having a random screenshot generation on a page with 
endless scrolling. Clicking on a random given screenshot will take you to the game details page, this gives a nostalgic yet modern discovery feeling to it. Could maybe do this for all sections for the app, or pagination. Perhaps I should look at the library
first.
Can possibly use Framer Motion React library for this seamless transition scroll.
screenshots stored to IGDBs CDN amazon cloud server enables this, as load times latency issues shouldn't be an issue.
This could be helpful as far as lining up screenshots in grid: https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-responsive-images

10/18 UPDATE: Framer Motion React doesn't seem to have what I am looking for - although useful to know about.
Here is an article on using the library Reacts Infinite Scroll:
https://builtin.com/articles/react-infinite-scroll 

I am looking for endless scrolling where data fetches upon scrolling to 'next page'. One problem that should be addressed is 'saving state' upon user navigating off of where they scrolled. 
This article addresses this, along with other problems caused by infinite scrolling: https://addyosmani.com/blog/infinite-scroll-without-layout-shifts/

Possibly use these loader animations:
https://www.reddit.com/r/react/comments/1gm3wxc/react_spinner_toolkit_new_npm_package/


Design:

For this project I believe desktop first will be fine, I want to establish how I should modularize my css moving forward, along with other things.
Will implement BEM practice (Block, Element and Modifier)



BACKEND:

Image size docs: https://api-docs.igdb.com/#reference

Cache Image responses (screenshots): https://api-docs.igdb.com/#images

I plan to cache a catalog of games storing lots of the more popular,
upon user search if game not in db hit IGDB API for request. Cover images and screenshots 


pseudo:
 - save by year/platform route post requests 
 - json data recieved
 - await save games
 - iterate through games function to map to new obj
 - map function awaits getCover for url
 - getCover: if game has cover ID, request cover data to return
 - in createController create cover for foreign cover table


# PERN-Starter-Template
Starter template, using PERN stack, keeping backend and frontend in seperate directories. 


Commands:
Commands in BACKEND directory!
npm install (installs all dependencies found in package.json)

npm install supertest --save-dev (for testing) (scripts in package.json)


PRISMA:
npm install prisma --save-dev
npm install @prisma/client
npx prisma init  (makes prisma folder)
npm install @quixo3/prisma-session-store  https://github.com/kleydon/prisma-session-store#readme   (set up Session Model in Prisma) 


npx prisma generate (after making schema)
npx prisma migrate dev (after making changes to schema)
 ----------------------------------------------------------------------
FRONTEND directory:

Design: Keep CSS inline or modular

npm install - sets up all node modules (installs all dependencies)

npm run dev - starts vite server

If using React to setup up default frontend directory run: 
npm create vite@latest . -- --template react


This template uses Prisma ORM supporting PostgreSQL. 
Prisma Setup Guide: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgresql 
or use quick commands: 
 ---> npx prisma init  (then after adding DATABASE_URL to .env)  ---> npx prisma migrate dev --name init  ---> npx prisma generate

Don't forget to setup .env where variables such as DATABASE_URL(where data is being served) will go
.gitignore has .env and /generated/schema to ignore from public 

Using PostMan Web Agent (for full API functionality): https://learning.postman.com/docs/getting-started/installation/installation-and-updates/#install-postman-on-linux   (after installing with snap command, just run 'postman' as a command to launch)

npm install -g nodemon --live view? 

Linter & Prettier Commands
npm install --save-dev eslint
npx eslint --init   (Optional for configuration)  

Linting commands
- Run: npx eslint .
- Fix: npx eslint . --fix

Prettier commands
- npm install --save-dev prettier
- touch .prettierrc  (Optional config file for tab space, ect. )