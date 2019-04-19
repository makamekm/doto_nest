import { shallowMount } from '@vue/test-utils';
import index from './index.vue';
import getLocalVue from '~/utils/localVue';
import getContext from '~/utils/context';
import { Store } from 'vuex';

describe('page index', () => {

  const getStore = () => {
    const onLoad = jest.fn();
    return {
      onLoad,
      store: new Store({
        modules: {
          test: {
            namespaced: true,
            state: () => ({
              list: [],
            }),
            actions: {
              load: onLoad,
            },
          },
        },
      }),
    };
  };

  test('should mounts properly', () => {
    const localVue = getLocalVue();
    const { store } = getStore();
    const wrapper = shallowMount(index, {
      localVue,
      store,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('should renders properly', () => {
    const localVue = getLocalVue();
    const { store } = getStore();
    const wrapper = shallowMount(index, {
      localVue,
      store,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should call fetch', async () => {
    const localVue = getLocalVue();
    const { store, onLoad } = getStore();
    const wrapper = shallowMount(index, {
      localVue,
      store,
    });
    await wrapper.vm.$options.fetch!(getContext(store));
    expect(onLoad).toBeCalled();
  });
});
