// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: May 4, 2022
// This file contains the JS functions for index.html

"use strict"

function infoSent() {
  //initializing variables
  let cost = "Please make a selection above.";
  //declaring & defining variables
  let userAge = parseInt(document.getElementById("user-age").value);
  let day = document.getElementById("day").value;
  //using compound if statements to determine cost
  if ((userAge < 5) || (userAge > 95)) {
    cost = "You get in for free!";
  }
  //Added extra brackets around all conditions to fix error - the computer was not processing the || (or) symbol when it was outside of brackets
  else if (((userAge >= 12) && (userAge <= 21)) || ((day == "Thursday") || (day == "Tuesday"))) {
    cost = "You get a discount with student pricing!";
  }
  else {
    cost = "You have to pay regular price to visit the museum.";
  }
  //displaying the appropriate cost to the screen
  document.getElementById("results").innerHTML = cost;
}
