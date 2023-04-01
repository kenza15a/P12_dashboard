# 1. What is sportsee about

sportsee is an app made by a startup specialised of sports coaching we present to you here the
dashboard of a candidate showing their daily performance in an interactive way using charts

# 2. Prerequisites

Prerequisites for sporstsee dashboard
2.1 [Nodejs ] must be installed if not you can download the last stable version from here:
https://nodejs.org/en/download

2.2 An IDE to work in such as
VsCode
Downloading link :
https://code.visualstudio.com/download

2.3 Npm

# 3. Launching the project

To install and run the project follow the next steps

# 3.1 Launching the Backend

To avoid ports confusions it is preferable to lunch the backend first to do so follow the next steps:
Fork the repositry https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
Clone it on your computer.

The yarn command will allow you to install the dependencies.

The yarn dev command will allow you to run the micro API.

The project will be lunched on the port 3000

#Possible end Points
This project includes four endpoints that you will be able to use:

http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).

http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.

http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.

http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

# 3.2 Launching the Frontend

Start by cloning the following directory for the front end part :
https://github.com/kenza15a/P12_dashboard
To install all the dependencies of the app in the main directory run the following line
npm run i
this project uses react so to lunch the project you need to run the next line
npm run start

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.
Note keep the backend on to avoid confusion cause of the default react port which is 3000

The page will reload when you make changes.\
You may also see any lint errors in the console.

# 4 configuration file : switching between API and local Mocked data

this project uses a configuration file that switches the source of data
you can change the data source in the Config/config.js file by changing
the currentEnvirement
#developement to use the local data calling the "userMockedService"
#production to use the backend API calling the "userService"

### default user Id is 12 :the app will start by loading the data of user 12 by default

### Routs and links

Go to src/APP.js to find the right rout to start the app correctly

## the documentation of the project

the Jsdoc documentation of the project is placed in the docs Folder
Open the docs/Index.html file to read all the documentation
