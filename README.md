#Todo Challenge#

##Challenge##

Wk7 Makers Academy Challenge in AngularJS - Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)

##User Stories##

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

###Extended User Stories###

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count
```

##MVP Roadmap##

- MVP1 - Lists tasks added.
- MVP2 - Ability to mark tasks as done.
- MVP3 - MVP3 + styling
- MVP4 - Filter tasks by "All", "Active" & "Completed"
- MVP5 - Display total number of tasks

##Setup##
Firstly ensure you run `npm install` and `bower install` when inside the root directory to ensure you have all the appropriate dependencies.
###Running Locally###
Run `http-server` in the terminal to start a simple terminal and then load a localhost in the browser at the location it suggests. Normally `localhost:8080`

###Testing###
Feature tests are run in Protractor and Unit tests in Jasmine through Karma.

For Protractor startup webdriver as below then run protractor
`webdriver-manager start`
`protractor test/e2e/conf.js`

For karma run
`karma start test/unit/karma.conf.js`


