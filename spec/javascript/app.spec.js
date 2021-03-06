import React from 'react';
import {shallow} from 'enzyme';
import App from '../../app/javascript/packs/components/app.jsx'


it('renders without crashing', () => {
    shallow(<App />);
});

it('renders Posts', () => {
  const app = shallow(<App />);

  expect(app.text()).toContain('Posts');
});
