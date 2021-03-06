import Vue from 'vue'
import WButton from './components/WButton.vue'
import WIcon from './components/WIcon.vue'
import WButtonGroup from './components/WButtonGroup.vue'
import WInput from './components/WInput.vue'
import WRow from './components/WRow.vue'
import WCol from './components/WCol.vue'
import WLayout from './components/WLayout.vue'
import WHeader from './components/WHeader.vue'
import WSider from './components/WSider.vue'
import WContent from './components/WContent.vue'
import WFooter from './components/WFooter.vue'
import WMessage from './components/WMessage.vue'
import pluginMessage from './plugins/message.js'

Vue.component('w-button', WButton)
Vue.component('w-icon', WIcon)
Vue.component('w-button-group', WButtonGroup)
Vue.component('w-input', WInput)
Vue.component('w-row', WRow)
Vue.component('w-col', WCol)
Vue.component('w-layout', WLayout)
Vue.component('w-header', WHeader)
Vue.component('w-sider', WSider)
Vue.component('w-content', WContent)
Vue.component('w-footer', WFooter)
Vue.component('w-message', WMessage)
Vue.use(pluginMessage)

new Vue({
  el: '#app',
  data: {
    loading: true,
    loadingSetting: false,
    loadingDownload: true,
    message: 'Vue'
  },
  methods: {
    handleInput (event) {
      console.log('触发了 input 事件', event)
    },
    handleChange (event) {
      console.log('触发了 change 事件', event)
    },
    showMessage () {
      this.$message('tesfdsfdsfdsfdsfdsst')
    }
  }
})
