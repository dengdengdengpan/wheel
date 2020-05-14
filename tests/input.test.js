import Vue from 'vue'
import WInput from '../src/components/WInput.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

const expect = chai.expect

describe('WInput', () => {
  it('存在', () => {
    expect(WInput).to.be.exist
  })

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

  it('可是设置报错信息', () => {
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