import React from 'react';
import { shallow, mount } from 'enzyme';
import Index from '../../pages/index';
import Spinner from '../../components/generic/spinner';
import configureMockStore from 'redux-mock-store';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/conditions/card'
import Message from '../../components/generic/message'
import { ERROR_MESSAGE } from '../../constants/content';

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

const mockStore = configureMockStore();
const mockParam = jest.fn();
const mockedDispatch = jest.fn();
useDispatch.mockReturnValue(mockedDispatch);

describe(`Index page, loading spin`, () => {
    const index = shallow(<Index />);

    it(`Renders the Spinner`, () => {
        expect(index.find(Spinner)).toHaveLength(1);
    });
});

describe(`Index page, error message`, () => {
    const store = mockStore({
        error: true,
        conditions: [],
    });

    useSelector.mockReturnValue(store);

    const indexWithError = mount(
        <Index store={store} dispatch={mockParam} />
    );

    it(`renders error message`, () => {
        expect(indexWithError.find(Message)).toHaveLength(1);
        expect(indexWithError.find(Message).text()).toEqual(ERROR_MESSAGE);
    });
});

describe(`Index page, result list`, () => {
    const storeWithConditions = ({
        error: false,
        conditions: [{
            "snippet": "xxx",
            "label": "xxx",
            "image": "xxx"
        },],
    });

    useSelector.mockImplementation(callback => {
        return callback(storeWithConditions);
    });

    const indexWithValues = mount(
        <Index store={storeWithConditions} dispatch={mockParam} />
    );

    it(`renders conditions list`, () => {
        expect(indexWithValues.find(Card)).toHaveLength(1);
        expect(indexWithValues.find('img')).toHaveLength(1);
        expect(indexWithValues.find('.snippet .close').text()).toEqual('xxx');
    });
});

