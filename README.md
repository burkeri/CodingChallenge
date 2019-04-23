# ![logo](assets/logo.png  "logo") **Coding Challenge**

## Description

Coding Challenge is an Avengers-themed, MERN stack, single-page application meant to replicate the functionality of a pre-existing application. When a user hovers over an image, the image expands, the background changes color, and smaller images move around the newly expanded image.

## Project Goal

Watch a video of an existing application and copy its funtionality. Build the following observable interactions under the following requirements:

#### Requirements

- Build a SPA App in the framework of your choice (Angular 2+, React, Vue or other – just no jQuery) 
    - Bonus points for using flexbox and/or css grid for the layout.
- Create an external data source to populate the items with whatever data you like
- Load data via an AJAX call.
- Focus on generating reusable components and keeping good app structure hygiene.

#### Observable Interactions

- Display 18 images in a grid.
- When the user hovers over an image:
    - The cursor will become a pointer.
    - The image will expand to 4x its initial area from the top, left corner.
    - The background color of the image will change.
    - The image will re-position itself in the grid on a small, circular path.
    - All other elements will auto flow to accomodate the newly enlarged imaged.
    - When the other elements move, they will slide in the direction that they have been moved.
- When an image expands in the top 2 rows, the positioning of elements in the bottom 2 rows will not be affected and vice versa.

## Technology Used

### Stack

- MongoDB
    - I evaluated the application and determined that the data/images did not require associations. Therefore, I decided to use a non-realtional database.
- Express
    - Express handles routing and making API calls on the back-end of Coding Challenge.
- React
    - Used to build front end of application.
- Node
    - Coding challenge uses a node server.

### Dependencies

#### Back End

- Mongoose
    - Defines connection to database, defines model for "Image" data, and provides the ability to query the database to grab data on an API call.
- Concurrently
    - Runs multiple npm commands.
- Nodemon
    - Allows for hot reload.
- If-Env
    - Runs 'npm start' in all environments.

#### Front End

- React
- React-Dom
- React-Scripts
    - These dependencies were provided by "create-react-app."
- Axios
    - Handles http requests on the front end.
- React Router
    - Attaches routes to components.

## Challenges

- **Expanding Images:**
I used CSSGrid to create a layout for the images. This was my first time using this layout system and I had some difficulty manipulating the grid with CSS animations.

- **Moving Images:**
I found it difficult to define the path on which an image moved after it expanded and had trouble moving the smaller images around the newly-expanded image. I am researching techniques to maintain the grid's 'auto-flow' property while animating these elements.

- **DRY Code:**
As I progress with this project, I plane to optimize my code to avoid repition.

# **Conclusion**

I have always been enthralled by web development and, although I found this project difficult, I also found it engaging and enlightening.

This exercise gave me the opprtunity to use CSSGrid for the first time and practice CSS animations. I chose to use CSS animations rather than implemeneting an outside package in order to hone my skills in this area.

I spent 5 days working on the challenge and I plan to keep working on this project until it matches the video in its entirety.