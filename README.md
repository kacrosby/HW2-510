# HW2

* Due Thursday, March 3rd before Midnight.
* [ ] Create a private repo HW2-510, with TAs, and instructor as collobrators.   (Failure to do this by the due date is -10% on your HW grade)
* [ ] Copy the contents of this repo to your homework repo ([or change the remote git origin](https://stackoverflow.com/questions/2432764/how-to-change-the-uri-url-for-a-remote-git-repository)).


## WeatherBot Workshop (30%)

The HW2 repo contains a modified version of the WeatherBot workshop. Following the [WeatherBot workshop instructions](https://github.ncsu.edu/CSC-510/WeatherBot), complete the workshop if you have not already done so.   

Then complete modify the code as follows:
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
All files   |   83.76 |    85.71 |      80 |   83.76 |
 index.js   |   73.77 |       75 |   66.66 |   73.77 | 10-23,54-55
 weather.js |   94.64 |      100 |     100 |   94.64 | 45-47
------------|---------|----------|---------|---------|-------------------

```

* [ ] Add tests to `test/test.js` so that you get >90% statement coverage.
* [ ] Fix the broken tests in `test/test.js` (see code comments)


## Evaluation

* WeatherBot Workshop (30%)
* Information Space (10%)
* Test Coverage (60%)



## Submission

Create a private repo.  Add the instructor and the TA(s) as collaborators to the repo. Submit the link to your homework [here](https://docs.google.com/forms/d/e/1FAIpQLSfQ29aj5HSxIw4UEGBg_tDymHc2PTNanIrukiAOdZyISbfZng/viewform?usp=sf_link).

* your code
* README.md with your answers

Due Thursday, March 3rd before Midnight.
