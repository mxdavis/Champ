import React from 'react';
import {shallow} from 'enzyme';
import Posts from '../../app/javascript/packs/components/posts.jsx'

it('renders without crashing', () => {
    shallow(<Posts posts={[{title:"title", body: "body", factorial: 6, published: true}]}/>);
});

it('renders an Post map', () => {
  const posts = shallow(<Posts posts={[{title:"title", body: "body", factorial: 6, published: true}]}/>);

  expect(posts.text()).toContain('Post');
});
