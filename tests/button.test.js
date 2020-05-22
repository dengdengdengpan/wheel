import Vue from 'vue'
import WButton from '../src/components/WButton.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

const expect = chai.expect

describe('WButton', () => {
  it('存在', () => {
    expect(WButton).to.be.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(WButton)
    let vm
    afterEach(() =>{
      vm.$destroy()
    })

    it('可以设置 icon', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#icon-settings')
    })
  
    it('可以设置loading', () => {
      vm = new Constructor({
        propsData: {
          icon: 'settings',
          loading: true
        }
      }).$mount()
      const useElements = vm.$el.querySelectorAll('use')
      expect(useElements.length).to.equal(1)
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
    })
  
    it('svg 元素默认的 order 是 1', () => {
      const divElement = document.createElement('div')
      document.body.appendChild(divElement)
      vm = new Constructor({
        propsData: {
          icon: 'settings'
        }
      }).$mount(divElement)
      const svgElement = vm.$el.querySelector('svg')
      expect(getComputedStyle(svgElement).order).to.eq('1')
      vm.$el.remove()
    })

    it('设置 iconPosition 可以改变 svg 元素的 order', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          icon: 'settings',
          iconPosition: 'right'
        }
      }).$mount(div)
      const svgElement = vm.$el.querySelector('svg')
      expect(getComputedStyle(svgElement).order).to.eq('2')
      vm.$el.remove()
    })
  })

  describe('事件', () => {
    it('支持 click 事件', () => {
      const Constructor = Vue.extend(WButton)
      const vm = new Constructor({}).$mount()
      const spy = sinon.fake()
      vm.$on('click', spy)
      vm.$el.click()
      expect(spy).to.have.been.called
      vm.$destroy()
    })
  })
})
