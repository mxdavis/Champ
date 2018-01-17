import React from 'react';
import {shallow} from 'enzyme';
import Post from '../../app/javascript/packs/components/post.jsx'

it('renders without crashing', () => {
    shallow(<Post post={{title:"title", body: "body", factorial: 6, published: true}}/>);
});

it('renders a post', () => {
  const post = shallow(<Post post={{title:"title", body: "body", factorial: 6, published: true}}/>);

  expect(post.text()).toContain('title');
});
