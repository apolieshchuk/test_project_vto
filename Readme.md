# General information

This is Votendo test server from A.Polieshchuk

# Server run

For install node_modules use NPM INSTALL
For build project use NPM RUN BUILD
For run server use command NPM START
For run test use command NPM TEST

# Worklog

1. Task Review - 15min
2. Installing EXPRESS server and configurate it - 2h:
   Don't like projects generators so install all from empty dir.
   Forgot a lot in server configurations, so taked a lot of time for refresh my memory
   a) Install TypeScript, config compilation options
   b) Mostly big part of my time thats was "teaching" ESLint correct work with TS and VSCode.
   c) Install some helper plugins for my comfort work in project - nodemon, prettier, husky,
   d) Install git
3. Create main server structure (routes, controllers, views) - 1h
4. Install plugins for tests (jest & supertest), and some dummy tests - 0,5h
5. Dockerization! - 3h. I'm don't work in docker before so needed some time for research. Ofc Docker file
   im create in 5 mins, but encounter with problems to run docker image, after create it. Again and again
   docker port don't want response me...Thats was my hardest 3 hours in that project...And whats more pity, that was
   just incorrect image build because of FORGOTTEN TS REBUILD (where was incorrect port configurations).
6. Make core program backend logic - 3h
7. Make some more powerfull frontend - TODO!!!!
8. Write production tests - TODO!!!!
