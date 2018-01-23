import moxios from 'moxios';
import fetchStore from '@/store/modules/fetch';
import * as types from '@/store/mutation-types';
import { testAction } from '../../../../test-action';

describe('fetch store - muations', () => {
  it(types.FETCH_API, () => {
    fetchStore.state = { data: {} };
    fetchStore.mutations[types.FETCH_API](fetchStore.state, {
      url: 'https://www.google.com.tw/',
    });
    expect(fetchStore.state.data).toEqual({
      url: 'https://www.google.com.tw/',
    });
  });
});

describe('fetch store - actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('fetchAPI', (done) => {
    moxios.stubRequest('https://api.github.com/', {
      status: 200,
      response: {
        data: {
          url: 'https://www.google.com.tw/',
        },
      },
    });

    testAction(
      fetchStore.actions.fetchAPI,
      {
        data: {
          url: 'https://www.google.com.tw/',
        },
      },
      {},
      [
        {
          type: types.FETCH_API,
          payload: {
            data: {
              url: 'https://www.google.com.tw/',
            },
          },
        },
      ],
      done
    );
  });
});
