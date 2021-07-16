import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import { Event } from '../Event';
import { mockData } from '../mockData';

import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {

    given('that an event is present', () => {
      const EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find('.EventItem')).toHaveLength(mockData.length);
    });

    when('the user selects view details', () => {
    });

    then('the element will expand and display the event details', () => {
      const EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find('.EventDetails')).toHaveLength(0);
    });
});

test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the event list has loaded', () => {

    });

    when('selects the view details', () => {
      const AppWrapper = mount(<App />);
      AppWrapper.find('.EventItem .ToggleButton').at(1).simulate('click');
    });

    then('the event details will desplay', () => {

    });
});

test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('the user has expanded an events details', () => {

    });

    when('the user selects close details', () => {

    });

    then('expanded element will collapse, hiding the details of the element', () => {

    });
});

});