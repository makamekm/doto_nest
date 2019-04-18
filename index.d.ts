import vuex from 'vuex'
import { AxiosStatic } from 'axios';
import veeValidate from "vee-validate";
import Buefy from 'buefy';

declare module '*.vue' {
  import Vue from 'vue'
  const _default: Vue
  export default _default
}

declare module 'vuex' {
  interface Store<T> {
    $axios: AxiosStatic;
  }
}