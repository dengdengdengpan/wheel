import Vue from 'vue'
import WInput from '../src/components/WInput.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

const expect = chai.expect

describe('WInput', () => {
  it('存在', () => {
    expect(WInput).to.be.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(WInput)
    let vm
    afterEach(() =>{
      vm.$destroy()
    })

    it('可以设置 value', () => {
      vm = new Constructor({
        propsData: {
          value: 'test'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('test')
    })
  
    it('可以设置 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
  
    it('可以设置 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
  
    it('可以设置报错信息', () => {
      vm = new Constructor({
        propsData: {
          error: '报错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
      const errorMessageElement = vm.$el.querySelector('.error-message')
      expect(errorMessageElement.innerText).to.equal('报错了')
    })
  })

  describe('事件', () => {
    const Constructor = Vue.extend(WInput)
    let vm
    afterEach(() =>{
      vm.$destroy()
    })

    it ('支持 input/change/focus/blur 事件', () => {
      ['input', 'change', 'focus', 'blur'].forEach(eventName => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // 触发 input 元素事件的方法
        const event = new Event(eventName)
        Object.defineProperty(event,  'target', { value: {value: 'test'}, enumerable: true })
        const inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        // 期待事件被触发时 callback 函数被调用且第一个参数是 $event.target.value
        expect(callback).to.have.been.calledWith('test')
      })
    })
  })
})