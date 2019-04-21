import { shallowMount, mount } from '@vue/test-utils';
import page from './_id.vue';
import getLocalVue from '~/utils/localVue';
import getContext from '~/utils/context';
import { Store } from 'vuex';
import VueRouter from 'vue-router';

describe('page node/_id', () => {

  const getDataNode = () => ({
    id: 0,
    version: {
      id: 0,
      version: 'qwerty',
    },
    name: 'test',
    status: 'good',
    date: '01/01/2019 10:10:10',
    comments: 'It was very necessary',
    history: [
      {
        version: {
          id: 0,
          version: 'qwerty',
        },
        author: 'maxim',
        date: '01/01/2019 10:10:10',
        comments: 'It was very necessary',
      },
      {
        version: {
          id: 1,
          version: 'ytrewq',
        },
        author: 'maxim',
        date: '01/01/2019 09:09:09',
        comments: 'It was not really necessary',
      },
    ],
  });

  const getDataVersions = () => ([
    {
      id: 0,
      version: 'qwerty',
    },
    {
      id: 1,
      version: 'ytrewq',
    },
  ]);

  const getStore = (node: any = getDataNode(), versions: any[] = getDataVersions()) => {
    const onLoadNode = jest.fn();
    return {
      onLoadNode,
      store: new Store({
        modules: {
          node: {
            namespaced: true,
            state: () => ({
              node,
              versions,
            }),
            actions: {
              loadNode: onLoadNode,
            },
          },
        },
      }),
    };
  };

  test('should mounts properly', () => {
    const localVue = getLocalVue();
    const { store } = getStore();
    const wrapper = shallowMount(page, {
      localVue,
      store,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('should renders properly', () => {
    const localVue = getLocalVue();
    const { store } = getStore();
    const wrapper = mount(page, {
      localVue,
      store,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should call fetch', async () => {
    const localVue = getLocalVue();
    const { store, onLoadNode } = getStore();
    const wrapper = shallowMount(page, {
      localVue,
      store,
    });
    await wrapper.vm.$options.fetch!({
      ...getContext(store),
      params: {
        id: '1',
      },
    });
    expect(onLoadNode).toBeCalled();
  });
});
