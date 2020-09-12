import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from 'vee-validate'
import * as originalRules from 'vee-validate/dist/rules'
import ja from 'vee-validate/dist/locale/ja.json'

for (const rule in originalRules) {
  /* eslint-disable import/namespace */
  extend(rule, {
    // @ts-ignore
    ...originalRules[rule],
  })
  /* eslint-enable import/namespace */
}

localize('ja', ja)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
