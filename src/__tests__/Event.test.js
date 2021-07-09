import { shallow } from 'enzyme';
import React from 'react';
import Event from '../Event';


describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render toggle button', () => {
    expect(EventWrapper.find('.displayMore')).toHaveLength(1);
  });

  test('render correct state for show/hide button', () => {
    EventWrapper.setState({
      showText: true  });
    EventWrapper.find('.displayMore').at(0).simulate('click');
    expect(EventWrapper.state("showText")).toBe(true);
  })

  // Passes - This renders without the need for the toggle -- Should reserver rendering until click to speed up app.
  // test('render correct state for show/hide button', () => {
  //     expect(EventWrapper.find('.extraDetails')).toHaveLength(1);
  //   })

  // Passed the test when rendered!
  // test('render correct state for show/hide button', () => {
  //   expect(EventWrapper.state("showText")).toBe(false);
  // })

});