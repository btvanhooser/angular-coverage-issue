# CoverageIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

# Issue

Using the /* istanbul ignore next */ comment on a function or class with a decorator appears to no longer work for Angular 14

Using that master branch, you can use npm install and run the jest tests to see that coverage is seen as missing.

Switching to the feature/angular13 branch, running npm update, then running the jest tests will yield the expected 100% coverage expected from the ignore comment on the AppComponent
