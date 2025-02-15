import React from 'react';
import range from 'lodash/range';
import { mount } from 'enzyme';
import AvatarList from './index';
const renderItems = numItems => range(numItems).map(i => (React.createElement(AvatarList.Item, { key: i, tips: "Jake", src: "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" })));
describe('AvatarList', () => {
    it('renders all items', () => {
        const wrapper = mount(React.createElement(AvatarList, null, renderItems(4)));
        expect(wrapper.find('AvatarList').length).toBe(1);
        expect(wrapper.find('Item').length).toBe(4);
        expect(wrapper.findWhere(node => node.key() === 'exceed').length).toBe(0);
    });
    it('renders max of 3 items', () => {
        const wrapper = mount(React.createElement(AvatarList, { maxLength: 3 }, renderItems(4)));
        expect(wrapper.find('AvatarList').length).toBe(1);
        expect(wrapper.find('Item').length).toBe(3);
        expect(wrapper.findWhere(node => node.key() === 'exceed').length).toBe(1);
    });
});
//# sourceMappingURL=index.test.js.map