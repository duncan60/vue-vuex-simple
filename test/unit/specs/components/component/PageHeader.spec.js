import { mount } from '@vue/test-utils';
import PageHeader from '@/components/component/PageHeader';

describe('PageHeader.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(PageHeader);
    const template = wrapper.html();
    expect(template).toMatchSnapshot();
  });
  it('test render h1 title', () => {
    const component = mount(PageHeader);
    const h1 = component.vm.$el.querySelector('h1').textContent;
    expect(h1).toEqual('Vue with Vuex Simple');
  });
});
