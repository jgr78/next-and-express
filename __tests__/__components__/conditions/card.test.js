import React from 'react';
import { mount } from 'enzyme';
import Card from '../../../components/conditions/card'
import { FIND_OUT_MORE } from '../../../constants/content'

describe(`Card component`, () => {
    const condition = {
        "snippet": "xxx",
        "label": "xxx",
        "image": "xxx"
    };

    it(`Card don´t have errors with empty data`, () => {
        const wrapperEmpty = mount(<Card element={{}} />);
        expect(wrapperEmpty).toEqual({});
    });

    it(`Card elements are render correctly`, () => {
        const wrapper = mount(<Card element={condition} />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('h2').text()).toEqual(condition.label);
        expect(wrapper.find('div.snippet')).toHaveLength(1);
        expect(wrapper.find('div.snippet').text()).toEqual(condition.snippet);
        expect(wrapper.find('div.showMore')).toHaveLength(1);
        expect(wrapper.find('div.showMore').text()).toEqual(FIND_OUT_MORE);
    });
});


