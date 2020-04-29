import Vue from 'vue'
import WButton from './components/WButton.vue'
import WIcon from './components/WIcon.vue'
import WButtonGroup from './components/WButtonGroup.vue'

Vue.component('w-button', WButton)
Vue.component('w-icon', WIcon)
Vue.component('w-button-group', WButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading: true,
    loadingSetting: false,
    loadingDownload: true
  }
})
