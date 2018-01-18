import React from 'react';
import {shallow} from 'enzyme';
import PostForm from '../../app/javascript/packs/components/postForm.jsx'

it('renders without crashing', () => {
    shallow(<PostForm />);
});
