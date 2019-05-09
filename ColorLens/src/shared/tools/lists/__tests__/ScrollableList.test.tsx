import ScrollableList from '../ScrollableList';
import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {FlatList,ScrollView, Text} from 'react-native';

const createTestProps = (props: Object) => ({
    ...props
});

describe("ScrollableList", () => {
    describe("rendering", () => {
        let wrapper: ShallowWrapper;
        let props: Object;
        beforeEach(() => {
            const kids = [1, 2, 3].map((n, k) => <Text key={k}> {n} </Text>);
            props = createTestProps({});
            wrapper = shallow(<ScrollableList {...props} children={kids} columns={2} isLazy={false}/>);
        });

        it("should render a <ScrollView />", () => {
            expect(wrapper.find(ScrollView)).toHaveLength(1);
        });
        it("should render 3 <Text />", () => {
            expect(wrapper.find(Text)).toHaveLength(3);
        });
    });
});