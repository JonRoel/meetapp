import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {
  
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
  });

  test('render text input correcty', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.numberInput').prop('value')).toBe(numberOfEvents);
  });

  // test('change state when text input changes', () => {
  //   NumberOfEventsWrapper.setState({
  //     numberOfEvents: '5'
  //   });
  //   const eventObject = { target: { value: '2' }};
  //   NumberOfEventsWrapper.find('.numberInput').simulate('change', eventObject);
  //   expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('2');
  // });

});

