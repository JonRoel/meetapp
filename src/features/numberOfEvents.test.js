import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/numberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 12 is the default number', ({ given, when, then }) => {
    
    let AppWrapper;
    given('the events list has loaded and the user has not specified the number of events to load', () => {
      AppWrapper = mount(<App />);
    });

    when('the user opens the event list', () => {
      // App loads next step should pass assuming the list loads
    });
    // Default is 12 but mock data only has 3 events
    then('the default number of events should load on the screen', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.EventItem')).toHaveLength(3);
      expect(AppWrapper.state('numberOfEvents')).toBe(12);
      AppWrapper.unmount();
    });
});

test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the events have loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('a user has specified a number for the amount of events to view', () => {
      AppWrapper.find('.numberInput').simulate('change', { target: { value: '1' } });
    });

    then('only the specified number of events should load', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.EventItem')).toHaveLength(1);
    });
});

})