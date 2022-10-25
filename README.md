# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nabdulla/lotide`

**Require it:**

`const _ = require('@nabdulla/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Takes in an array and returns the first element in the array.
* `tail`: Takes in an array and returns everything except the first element of the array.
* `middle`: Takes in an array and returns middle most element(s) of the array.
* `countLetters`: Takes in a sentence and returns a count of each of the letters in the sentence.
* `countOnly`: Takes in a collection of items and returns a specific subset of those items.
* `findKey`: Takes in an object and callback and returns the first key that meets the criteria specified in callback.
* `findKeyByValue`: Takes in an object and a value and returns the first key that corresponds to that value.
* `flatten`: Takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `letterPositions`: Takes in a string and returns all indices of letter positions in the string.
* `map`: Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
* `takeUntil`: Takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
* `without`: Takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
* `assertEqual`: Takes in 2 values and returns true if they are equal and false otherwise.
* `assertArraysEqual`: Takes in 2 arrays and returns true if they are equal and false otherwise.
* `assertObjectsEqual`: Takes in 2 objects and returns true if they are equal and false otherwise.
* `eqArrays`: Takes in 2 arrays and returns true if the arrays are equal and false otherwise.
* `eqObjects`: Takes in 2 objects and return true if they are equal and false otherwise.