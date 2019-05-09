import FullWidthButton from '../FullWidthButton';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {TouchableOpacity,Text} from 'react-native';

const createTestProps = (props: Object) => ({
    ...props
});

describe("ResponsiveImage", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: Object;
        beforeEach(() => {
            props = createTestProps({});
            wrapper = shallow(<FullWidthButton {...props} innerText="dummy" pressMethod={jest.fn}/>);
        });

        it("should render an <TouchableOpacity>", () => {
            expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
        });
        it("should render an <Text>", () => {
            expect(wrapper.find(Text)).toHaveLength(1);
        });

    });
});