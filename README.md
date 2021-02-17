### The general

In order to provide full setup Wordpress, MySQL & PHPMyadmin with a single command I used the Docker compose file `docker-compose.yaml`.

I have run the command `docker-compose up -d`.

The Wordpress application is running on the 8000 port.
The React app is running on the 3000.

The application contains 4 different pages. Different type of animation is added to each one separately.
I have deviated from the design for the reason that I wanted to show how the information about the courses can be presented since the web project is for e-learning purpose. Along side, the careers opportunities can be displayed in the same way.

### Implemantion and usage of wordpress API:

For authorized requests I have installed the plugin `WordPress JSON Web Token Authentication` and according to the documentation edited my `.htaccess` file. Generated the token using the `/wp-json/jwt-auth/v1/token` endpoint in Postman. For future development token will be stored in a user's session and validated for the POST requests.

The page `About mcg` is supposed to use the avatars of the users registered on the wordpress website. There is fetch request implemented and the data is properly converted to display. However, in order to show the complete animation effect on the page I used the images from the internet.

The page `Our courses` uses the fetch request pulling the posts from the wordpress website.

Additional information:
Have used the styles.modules.css approach (consider the code looks more neat) and left casual style.css for the components from third-party libs. Partially covered with the tests.

## Available Scripts

In the project directory, you can run:

### `yarn run start`

Runs the app in the development mode using `wptheme-scripts start`.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `yarn run crastart`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn run cratest`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
