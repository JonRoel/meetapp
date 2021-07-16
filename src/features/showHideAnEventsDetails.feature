Feature: Show/Hide an Events Details

Scenario: An event element is collapsed by default

Given that an event is present
When the user selects view details 
Then the element will expand and display the event details

Scenario: User can expand an event to see its details

Given the event list has loaded 
When selects the view details
Then the event details will desplay

Scenario: User can collapse an event to hide its details

Given the user has expanded an events details 
When the user selects close details 
Then expanded element will collapse, hiding the details of the element