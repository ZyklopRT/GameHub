# :video_game: GameHub

GameHub stands as a web application dedicated to exploring the world of video games, aiding you in discovering captivating new gaming experiences. 
Through GameHub, you have the power to seek out games based on factors like platform, genre, and various other criteria.

## :rocket: Getting Started

To get started with GameHub, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first. 
4. Add the API key to **src/services/ApiClient.ts**
5. Run `npm run dev` to start the web server.

Be aware that this project does not use any security mechanisms for keeping the API key secret. Thus, this app is not suitable for production.

## :boom: Disclaimer

This project is the result of the ReactJS course from CodeWithMosh and is mostly the same with his finished GameHub project. 

So the idea and the development process can only be attributed to Mosh Hamedani. I learned a lot about ReactJS from the wonderful course and built this project during the course.

I can recommend Mosh Hamedani's Beginner and Intermediate ReactJS course for all people who want to learn the basics, best practices & common pitfalls and also more advanced topics.

You can find the course on [CodeWithMosh](https://codewithmosh.com/). I don't get any compensation for this honest comment.

## :books: Some libaries used

UI/UX:
- [ReactJS & DOM](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

State Managment:
- [Tanstack Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)

HTTP-Requests:
- [Axios](https://axios-http.com/)

Routing:
- [React Router](https://reactrouter.com/en/main)

Type safety:
- [Typescript](https://www.typescriptlang.org/)
