import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../../components/generic/spinner';

describe(`Spinner component`, () => {
    const wrapper = shallow(<Spinner />);

    it(`SVG element renders correctly`, () => {
        expect(wrapper.find('circle')).toHaveLength(1);
    });
});


