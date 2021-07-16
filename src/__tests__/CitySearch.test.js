import { shallow } from 'enzyme';
import React from 'react';
import CitySearch from '../CitySearch';
import 'bootstrap/dist/css/bootstrap.css';
import { mockData } from '../mockData';
import { extractLocations } from '../api';

describe('<CitySearch /> component', () => {
  
  let locations, CitySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
  });

  test('render text input', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  test('render a list of suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });

  test('redner text input correcty', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });

  test('change state when text input changes', () => {
    CitySearchWrapper.setState({
      query: 'Toronto'
    });
    const eventObject = { target: { value: 'London' }};
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('London');
  });

  test('render suggested cities correctly', () => {
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

  test('suggestion list match the query when changeed', () => {
    CitySearchWrapper.setState({ query: '', suggestions: [] });
    CitySearchWrapper.find(".city").simulate("change", {
      target: { value: "London" },
    });
    const query = CitySearchWrapper.state("query");
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    expect(CitySearchWrapper.state('suggestions')).toEqual(filteredLocations);
  });

  test("selecting a suggestion should change query state", () => {
    CitySearchWrapper.setState({
      query: 'Berlin'  }); 
    const suggestions = CitySearchWrapper.state('suggestions');
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
  });

  test("selecting Citysearch input reveals the suggestion list", () => {
    CitySearchWrapper.find('.city').simulate('focus');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
    expect(CitySearchWrapper.find('.suggestions').prop('style')).not.toEqual({ display: 'none' })
  });
  test("selecting a suggestion should hide the suggestion list", () => {
    CitySearchWrapper.setState({
      query: 'Berlin',
      ShowSuggestions: undefined
    });
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
    expect(CitySearchWrapper.find('.suggestions').prop('style')).toEqual({ display: 'none'});
  });

});