import { mount, shallow } from '@vue/test-utils';
import TodoItem from '@/components/component/TodoItem';

let initProps = {};

beforeAll(() => {
  initProps = {
    todo: {
      text: 'testing',
      isEdit: false,
      isComplete: false,
    },
  };
});

describe('TodoItem.vue', () => {
  it('test initial rendering', () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        ...initProps,
      },
    });
    const template = wrapper.html();
    expect(template).toMatchSnapshot();
  });

  it('test isEdit is true rendering', () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: {
          ...initProps.todo,
          isEdit: true,
        },
      },
    });
    const template = wrapper.html();
    expect(template).toMatchSnapshot();
  });

  it('test isComplete is true rendering', () => {
    const wrapper = mount(TodoItem, {
      propsData: {
        todo: {
          ...initProps.todo,
          isComplete: true,
        },
      },
    });
    const template = wrapper.html();
    expect(template).toMatchSnapshot();
  });

  it('test render text', () => {
    const component = shallow(TodoItem, {
      propsData: {
        ...initProps,
      },
    });
    const text = component.vm.$el.querySelector('span').textContent;
    expect(text).toEqual('testing');
  });
  it('test is Edit', () => {
    const component = shallow(TodoItem, {
      propsData: {
        todo: {
          ...initProps.todo,
          isEdit: true,
        },
        updateTodo: (type, todo, text) => {
          console.log(type);
          console.log(todo);
          console.log(text);
        },
      },
    });
    const input = component.find('input');
    input.element.value = 'new todo task';
    input.trigger('input');
    expect(component.vm.text).toEqual('new todo task');
  });
});
