import React from 'react';
import { shallow } from 'enzyme';
import Message from '../../../components/generic/message';

describe(`Message component`, () => {
    const exampleText = 'xxx';
    const wrapper = shallow(<Message text={exampleText} />);

    it(`Text renders correctly`, () => {
        expect(wrapper.text()).toEqual(exampleText);
    });
});


