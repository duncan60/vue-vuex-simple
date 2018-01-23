import todoStore from '@/store/modules/todo';
import * as types from '@/store/mutation-types';
import { testAction } from '../../../../test-action';

let initState = {};

beforeAll(() => {
  initState = {
    newTodo: 'new Task text',
    todos: {
      1: { id: 1, text: '學習 JavaScript', isEdit: false, isComplete: false },
      2: { id: 2, text: '學習 Vue', isEdit: false, isComplete: false },
      3: { id: 3, text: '學習 React', isEdit: false, isComplete: true },
    },
  };
});

describe('todo store - getters', () => {
  it('return get Todos', () => {
    const getTodos = todoStore.getters.getTodos(initState);
    const unCompleteList = {
      1: { id: 1, text: '學習 JavaScript', isEdit: false, isComplete: false },
      2: { id: 2, text: '學習 Vue', isEdit: false, isComplete: false },
    };
    const completeList = {
      3: { id: 3, text: '學習 React', isEdit: false, isComplete: true },
    };
    expect(unCompleteList).toEqual(getTodos(false));
    expect(completeList).toEqual(getTodos(true));
  });
});

describe('todo store - muations', () => {
  it(types.ADD_NEW_TODO, () => {
    todoStore.state = initState;
    todoStore.mutations[types.ADD_NEW_TODO](todoStore.state);
    const todosKeys = Object.keys(todoStore.state.todos);
    expect(todosKeys.length).toEqual(4);
  });

  it(types.UPDATE_TODO, () => {
    todoStore.state = initState;

    todoStore.mutations[types.UPDATE_TODO](todoStore.state, {
      type: 'save',
      todo: initState.todos[1],
      newText: '學習 JavaScript es6',
    });
    expect(todoStore.state.todos[1].text).toEqual('學習 JavaScript es6');

    todoStore.mutations[types.UPDATE_TODO](todoStore.state, {
      type: 'edit',
      todo: initState.todos[2],
      newTodo: '',
    });
    expect(todoStore.state.todos[2].isEdit).toEqual(true);
  });

  it(types.UPDATE_FIELD, () => {
    todoStore.state = initState;
    todoStore.mutations[types.UPDATE_FIELD](todoStore.state, {
      field: 'newTodo',
      value: 'learing unit testing',
    });
    expect(todoStore.state.newTodo).toEqual('learing unit testing');
  });
});

describe('todo store - actions', () => {
  it('addNewTodo', (done) => {
    testAction(
      todoStore.actions.addNewTodo,
      {},
      initState,
      [{ type: types.ADD_NEW_TODO }],
      done
    );
  });
  it('updateTodo', (done) => {
    testAction(
      todoStore.actions.updateTodo,
      {
        id: 2,
        text: '學習 Vue',
        isEdit: true,
        isComplete: false,
      },
      initState,
      [
        {
          type: types.UPDATE_TODO,
          payload: {
            id: 2,
            text: '學習 Vue',
            isEdit: true,
            isComplete: false,
          },
        },
      ],
      done
    );
  });
  it('updateField', (done) => {
    testAction(
      todoStore.actions.updateField,
      {
        field: 'newTodo',
        value: 'learing unit testing',
      },
      initState,
      [
        {
          type: types.UPDATE_FIELD,
          payload: {
            field: 'newTodo',
            value: 'learing unit testing',
          },
        },
      ],
      done
    );
  });
});
