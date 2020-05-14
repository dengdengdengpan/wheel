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
    it('可以设置 value', () => {
      const Constructor = Vue.extend(WInput)
      const vm = new Constructor({
        propsData: {
          value: 'test'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('test')
      vm.$destroy()
    })
  
    it('可以设置 disabled', () => {
      const Constructor = Vue.extend(WInput)
      const vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })
  
    it('可以设置 readonly', () => {
      const Constructor = Vue.extend(WInput)
      const vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
      vm.$destroy()
    })
  
    it('可以设置报错信息', () => {
      const Constructor = Vue.extend(WInput)
      const vm = new Constructor({
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
    it ('支持 input 事件', () => {
      const Constructor = Vue.extend(WInput)
      const vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('input', callback)
      // 触发 input 事件
      const event = new Event('input')
      Object.defineProperty(event,  'target', { value: {value: 'test'}, enumerable: true })
      const inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      // 期待 input 事件触发时 callback 函数被调用且第一个参数是 event
      expect(callback).to.have.been.calledWith('test')
      vm.$destroy()
    })
  })

  it ('支持 change 事件', () => {
    const Constructor = Vue.extend(WInput)
    const vm = new Constructor({}).$mount()
    const callback = sinon.fake()
    vm.$on('change', callback)
    const event = new Event('change')
    Object.defineProperty(event,  'target', { value: {value: 'test'}, enumerable: true })
    const inputElement = vm.$el.querySelector('input')
    inputElement.dispatchEvent(event)
    expect(callback).to.have.been.calledWith('test')
    vm.$destroy()
  })

  it ('支持 focus 事件', () => {
    const Constructor = Vue.extend(WInput)
    const vm = new Constructor({}).$mount()
    const callback = sinon.fake()
    vm.$on('focus', callback)
    const event = new Event('focus')
    Object.defineProperty(event,  'target', { value: {value: 'test'}, enumerable: true })
    const inputElement = vm.$el.querySelector('input')
    inputElement.dispatchEvent(event)
    expect(callback).to.have.been.calledWith('test')
    vm.$destroy()
  })

  it ('支持 blur 事件', () => {
    const Constructor = Vue.extend(WInput)
    const vm = new Constructor({}).$mount()
    const callback = sinon.fake()
    vm.$on('blur', callback)
    const event = new Event('blur')
    Object.defineProperty(event,  'target', { value: {value: 'test'}, enumerable: true })
    const inputElement = vm.$el.querySelector('input')
    inputElement.dispatchEvent(event)
    expect(callback).to.have.been.calledWith('test')
    vm.$destroy()
  })
})