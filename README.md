# HW2

* Due Thursday, March 3rd before Midnight.
* [x] Create a private repo HW2-510, with TAs, and instructor as collobrators.   (Failure to do this by the due date is -10% on your HW grade, more if you don't change it promptly after notification.)
* [x] Copy the contents of this repo to your homework repo ([or change the remote git origin](https://stackoverflow.com/questions/2432764/how-to-change-the-uri-url-for-a-remote-git-repository)).


## WeatherBot Workshop (30%)
* [x] workshop complete
* [x] Then complete modify the code as follows:
* Add wind information.   Modify the default bot message from something like "overcast clouds and feels like 68.56" to "overcast clouds and feels like 68.56, with winds of [WINDSPEED] [WINDSPEED UNITS] from a heading of [DIRECTION IN DEGREES]."  Where [WINDSPEED] and [DIRECTION IN DEGREES] are values returned from the openweathermap api and `[WINDSPEED UNITS]` is based on the API query you provide.

* [x] Take a __screenshot__ of your personal channel on https://chat.robotcodelab.com showing your bot responding with weather and wind information.

Upload your screenshot to this repository and add image here, either inline or a link:
* [LINK TO YOUR SCREENSHOT, HOSTED ON github.ncsu.edu]  OR  [INLINE SCREENSHOT]

## Information Space (10%)

Consider the URL `http://localhost:3000/pgiPc2`, where `pgiPc2` is a randomly generated code that consists of six elements that are uppercase (26), lowercase(26), or numeric (10).   Assuming you could generate this six element code at random, what is the likelihood of generating the same code twice in a row?  For credit, you must show your work below:

Place your work and solution here, including the phrase: "The odd are 1 in [YOUR ANSWER]."
``` 
   // YOUR WORK and SOLUTION
```

## Tests & Test Coverage (60%)

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
```
❯ npx c8 npm test

> mattermost-bot@1.0.0 test
> mocha --reporter spec



  WeatherBot Tests
    ✔ ensures that hears() returns false on empty input
    ✔ ensures that hears() returns turn
    ✔ ensures that hears() returns false when not matched
    ✔ ensures that bot can parse message and returns success


  4 passing (31ms)

------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------|---------|----------|---------|---------|-------------------
All files   |   40.33 |       75 |      20 |   40.33 |
 index.js   |   55.73 |    71.42 |   33.33 |   55.73 | 10-23,39-49,54-55
 weather.js |   24.13 |      100 |       0 |   24.13 | 8-19,21-52
------------|---------|----------|---------|---------|-------------------

```

* [ ] Add tests to `test/test.js` so that you get ~~>80%~~ >70% statement coverage for "All files."
* [ ] Fix the broken test in `test/test.js` (see code comments)


## Evaluation

* WeatherBot Workshop (30%)
* Information Space (10%)
* Test Coverage (60%)



## Submission

Create a private repo.  Add the instructor and the TA(s) as collaborators to the repo. Submit the link to your homework [here](https://docs.google.com/forms/d/e/1FAIpQLSfQ29aj5HSxIw4UEGBg_tDymHc2PTNanIrukiAOdZyISbfZng/viewform?usp=sf_link).

* your code
* README.md with your answers

Due Thursday, March 3rd before Midnight.
