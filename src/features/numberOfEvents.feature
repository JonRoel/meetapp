Feature: As a user I should be able to view a specific number of events per page So that I can adjust my page for screen size and load time

Scenario: When user hasn’t specified a number, 12 is the default number

Given the events list has loaded and the user has not specified the number of events to load 
When the user opens the event list 
Then the default number of events should load on the screen

Scenario: User can change the number of events they want to see

Given the events have loaded 
When a user has specified a number for the amount of events to view 
Then only the specified number of events should load