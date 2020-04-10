# Full stack developer test for Anthor

Develop a simple movie catalog project that allows the user to create, edit, list, and see details for each movie.

## Questions

#### a. How do you intend to approach this project? What technologies have you decided to use for each part?

I'm containerizing the project using Docker so it can be run on any environment. The chosen language for the server is javascript, so I'm using Node.js, mainly because I saw it as an opportunity to acquire this knowledge, and Vue.js with Vuetity and Bootstrap for the frontend.

#### b. Do you find this to be particularly challenging in any of its requirements?

My major challenge is doing it without mastering the programming language, mainly because of the automated tests. 

#### c. If you had a lot of time to do this, what would you do differently?

For the client, I would create a design system to unify the code and add validations and UX features on forms, like permitting adding a new Actor on creating a Movie or confirming before deletting. On the server, I would create more automated tests on the backend and also focus on unifying the code.

## Known Bugs

- Release date doesn't load on editting movie

## Installation

  $ docker-compose build 

  $ docker-compose run --rm server npm run seed

### Usage

  $ docker-compose up -d 

Go to http://localhost:8080.