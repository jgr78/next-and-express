import React from 'react';
import { mount } from 'enzyme';
import Conditions from '../../../components/conditions/conditions';
import Card from '../../../components/conditions/card'

describe(`Conditions component`, () => {
    const conditions = [{
        "snippet": "xxx",
        "label": "xxx",
        "image": "xxx"
    },];

    it(`Conditions don´t have errors with empty data`, () => {
        const wrapperEmpty = mount(<Conditions data={[]} />);
        expect(wrapperEmpty).toEqual({});
    });

    it(`Card element is render correctly`, () => {
        const wrapper = mount(<Conditions data={conditions} />);
        expect(wrapper.find(Card)).toHaveLength(1);
    });
});


