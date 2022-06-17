
# list[a]peli



## Description

This project is using React to build the client-side for an application called listapeli based on its existing server-side code (REST API and database).



## Key features

Main view
* Returns a list of all movies to the user (each listed item with an image)
* Sorting and filtering
* Ability to select a movie for more details

Movie view
* Returns data (description, genre, director, image, release year) about a single movie to the user
* Allows users to add a movie to their list of favorites

Genre view
* Returns data about a genre, with a name and description
* Displays other movies belonging to that genre

Director view
* Returns data about a director (name, bio, birth year, death year)
* Displays other movies by this director

Login view
* Allows users to log in with a username and password

Registration view
* Allows new users to register (username, password, email, birthday)

Profile view
* Allows users to update their user info (username, password, email, date of birth)
* Allows existing users to deregister
* Displays favorite movies
* Allows users to remove a movie from their list of favorites



## How to install and run the project?

1. Clone or download repository
```bash
git clone https://github.com/nine-chairs/myFlix-client.git
```

2. Install dependencies
```bash
npm install
```

3. Run parcel to build
```bash
parcel src/index.html
```



### Technical Requirements
* SPA application built using React
* Navigate between views using react-router-dom
* Use Parcel as build tool
* Use react-bootstrap for UI
* Use React Redux for state management (respecting the Flux pattern)
* Use both class and function components
* Use axios to connect to API (providing user and movie information)



## Link

https://listapeli.netlify.app/

