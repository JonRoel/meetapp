import { shallow } from 'enzyme';
import React from 'react';
import Event from '../Event';
import EventList from '../EventList';
import { mockData } from '../mockData';

describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList events={mockData} />);
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
}); 