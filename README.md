# HW2

* Due Thursday, March 3rd before Midnight.
* Fork HW2 -- this will be your submission directory


## WeatherBot Workshop (30%)

This repo contains a modified version of the WeatherBot workshop. Following the [WeatherBot workshop instructions](https://github.ncsu.edu/CSC-510/WeatherBot), modify the code in your fork of HW2.  Complete the workshop activities, with this modification:
* Add wind information.   Modify the default bot message from something like "overcast clouds and feels like 68.56" to "overcast clouds and feels like 68.56, with winds of [WINDSPEED] from a heading of [DIRECTION IN DEGREES]."  Where [WINDSPEED] etc. are from the values returned from the openweathermap api.

Take a __screenshot__ of your personal channel on https://chat.robotcodelab.com showing your bot responding with weather and wind information.

Upload your screenshot to this repository and add image here, either inline or a link:
* [LINK TO YOUR SCREENSHOT, HOSTED ON github.ncsu.edu]  OR  [INLINE SCREENSHOT]

## Information Space (10%)

Consider the URL `http://localhost:3000/pgiPc2`, where `pgiPc2` is a randomly generated code that consists of six elements that are uppercase (26), lowercase(26), or numeric (10).   Assuming you could generate this six element code at random, what is the likelihood of generating the same code twice in a row?  For credit, you must show your work below:

Place your work and solution here:
``` 
   // YOUR WORK and SOLUTION
```

## Test Coverage (60%)

In your repo directory, add the c8 code-coverage tool, using:
```
npm install c8 --save-dev
```
In the command above, the `--save-dev` option modifies `package.json`, adding the `c8` tool to the list of [dependencies](https://en.wikipedia.org/wiki/Dependency_hell), sometimes making the software more complex to maintain.   Commit this change to your repo (i.e. `git add package.json` followed by `git commit -m'adding c8 tool'` followed by `git push`).

Now you can run the tests in `test/test.js` from your repo directory.  In the command below, `npx` is the "nodejs" execution command, which runs a node command (like `c8`) locally with having it installed in a module (like `index.js` or `weather.js`):
```
npx c8 npm test
```
You should see something like:


Modify the tests so that you get 100% function coverage, >90% statement coverage and no uncovered lines.



## Evaluation

* WeatherBot Workshop (30%)
* Information Space (10%)
* Test Coverage (60%)



## Submission

Create a private repo.  Add the instructor and the TA(s) as collaborators to the repo. Submit the link to your homework [here](https://docs.google.com/forms/d/e/1FAIpQLSfQ29aj5HSxIw4UEGBg_tDymHc2PTNanIrukiAOdZyISbfZng/viewform?usp=sf_link).

* your code
* README.md with your answers

Due Thursday, March 3rd before Midnight.
