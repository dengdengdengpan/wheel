import WMessage from '../components/WMessage.vue'

export default {
  install (Vue, options) {
    Vue.prototype.$message = function (message) {
      const MessageConstructor = Vue.extend(WMessage)
      const messageInstance = new MessageConstructor()
      messageInstance.$slots.default = [message]
      messageInstance.$mount()
      document.body.appendChild(messageInstance.$el)
    }
  }
}