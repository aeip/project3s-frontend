# Project Overview

## Project Links

Code

- [https://github.com/aeip/project3s-backend](https://github.com/aeip/project3s-backend)

Deployed

- [https://project3s-backend.herokuapp.com/](https://project3s-backend.herokuapp.com/)
- [https://project3s-frontend.netlify.app/](https://project3s-frontend.netlify.app/)

## Project Description

We will be creating an adventure game in browser powered by React for frontend and have user information (name, health, objects, etc) stored in the backend. The user will have to navigate around a mansion where they must find all the keys to get out. Along the way the user will randomly be attacked and asked questions on where they would like to go next. We will also have 3d objects showing up (powered by three.js and objects found on sketchfab) during certain events that will just spin on screen. Users will be given buttons on their screen to interact with the site. For example, a button for their inventory and choices. We will be using react routes for each room in the game. Components will be split up by rooms, character, inventory, etc. We will also use react usestate and useeffect to change character data and game options.

### Models:

- Character (madness level, health, username)
- Inventory items (objects users pick up in game like keys)

## API

Home made right in Heroku

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://www.figma.com/file/CmgtkwtjE4xiymHYf43lts/Game?node-id=0%3A1)
- [react architecture](https://docs.google.com/drawings/d/160ELfGenJ_E1T48bNBDERzNOxjOVNGGu9gIElmDL6_0/edit?usp=sharing)

### MVP/PostMVP - 5min

MVP

- Works on mobile and desktop
- Basic game layout/map
- Ability to make choices and go onto next task
- Ability to finish the game
- Deploy on netlify and heroku
- Store user data on backend and send data back to frontend
- Working inventory
- Character attributes displayed and can be changed

PostMVP

- Leaderboard
- Polished graphics
- More rooms added to mansion (more routes for adventure)
- More interactions
- More 3d objects
- Perks
- Enter username (also ties into leaderboard)

## Components

| Component           |                                                      Description                                                       |
| ------------------- | :--------------------------------------------------------------------------------------------------------------------: |
| App                 |                                       Hosts all components with router switches                                        |
| Rooms               |                            Each room will have prompts, choices, and routes to other rooms                             |
| Character           |                     Includes all character info and updates backend based on what happens in game                      |
| Inventory           |                                    Includes all inventory logic and updates backend                                    |
| 3D objects          | Includes all 3D objects labeled with a key, so that when the component is called, it chooses a 3D object by object key |
| Random Interactions |             When this component is called, a random interaction is chosen from an array and then displayed             |

## Time
### Frontend

| Component                                     | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create React app and files for all components |    H     |       1        |  |  |
| App return routes | H | 0.5hr | | |
| App function routes | H | 1hr | | |
| Room Components | M | 4hr | | |
| Character Component | M | 2hr | | |
| Inventory Component | M | 2hr | | |
| 3D objects Component | L | 2hr | | |
| Random interactions Component | L | 2hr | | |
| Mobile and Desktop friendly | H | 3hr | | |
| Styling | L | 3hr | | |
| Cors | | H | 1hr | |
| Deploy | H | 0.5hr | | |
| Total |  | 21hr | | |

## Additional Libraries

Three.js for 3d models that show up in game.

## Code Snippet

```



```
