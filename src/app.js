import Vue from 'vue'
import WButton from './components/WButton.vue'
import WIcon from './components/WIcon.vue'
import WButtonGroup from './components/WButtonGroup.vue'
import WInput from './components/WInput.vue'

Vue.component('w-button', WButton)
Vue.component('w-icon', WIcon)
Vue.component('w-button-group', WButtonGroup)
Vue.component('w-input', WInput)

new Vue({
  el: '#app',
  data: {
    loading: true,
    loadingSetting: false,
    loadingDownload: true,
    message: ''
  },
  methods: {
    handleInput (event) {
      console.log('触发了 input 事件', event)
    },
    handleChange (event) {
      console.log('触发了 change 事件', event)
    }
  }
})
