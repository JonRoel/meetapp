import { shallow } from 'enzyme';
import React from 'react';
import Event from '../Event';


describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render toggle button', () => {
    expect(EventWrapper.find('.ToggleButton')).toHaveLength(1);
  });

  test('render correct state for show/hide button when clicked', () => {
    EventWrapper.setState({
      showText: false  });
    EventWrapper.find('.ToggleButton').at(0).simulate('click');
    expect(EventWrapper.state("opened")).toBe(true);
  })

  // Passed the test when rendered!
  test('render correct state for show/hide button', () => {
    expect(EventWrapper.state("showText")).toBe(false);
  })

});