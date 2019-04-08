import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App tests', () => {

  it('App renders without a problem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Snapshot matches', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('h1 exists', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Show text app');
  });

  it('button exists', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('button changes text according to state', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('button').text()).toBe('Hide');
    wrapper.setState({
      isTextShown: false
    })
    expect(wrapper.find('button').text()).toBe('Show');
  });

  it('handleClick', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('button').text()).toBe('Hide');
    expect(wrapper.find('p').exists()).toBe(true);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('button').text()).toBe('Show');
    expect(wrapper.find('p').exists()).toBe(false);
  });

  it('p exists', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({
      isTextShown: true
    })

    expect(wrapper.find('p').exists()).toBe(true);

    wrapper.setState({
      isTextShown: false
    })

    expect(wrapper.find('p').exists()).toBe(false);
  });

});