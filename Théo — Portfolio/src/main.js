import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import titleMixin from './mixins/titleMixin'
import './assets/Blender-BOOK Regular.ttf'
import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid'
})

Vue.mixin(titleMixin)
Vue.use(VueMeta)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
