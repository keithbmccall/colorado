import ResponsiveImage from '../ResponsiveImage';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {Image} from 'react-native';

const createTestProps = (props: Object) => ({
    ...props
});

describe("ResponsiveImage", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: Object;
        beforeEach(() => {

            props = createTestProps({});
            wrapper = shallow(<ResponsiveImage {...props} src={"dummy"} onReady={jest.fn}/>);
        });

        it("should render an Image component", () => {
            expect(wrapper.find(Image)).toHaveLength(1);
        });

    });
});