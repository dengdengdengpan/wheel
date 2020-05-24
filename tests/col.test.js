import Vue from 'vue'
import WCol from '../src/components/WCol.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

const expect = chai.expect

describe('WCol', () => {
  it('存在', () => {
    expect(WCol).to.be.exist
  })

  describe('props', () => {
    const testDivElement = document.createElement('div')
    const Constructor = Vue.extend(WCol)
    let vm
    beforeEach(() => {
      document.body.appendChild(testDivElement)
    })
    afterEach(() =>{
      testDivElement.remove()
      vm.$destroy()
    })

    it('可以设置 span', () => {
      vm = new Constructor({
        propsData: {
          span: 12
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-12')).to.be.equal(true)
    })

    it('可以设置 offset', () => {
      vm = new Constructor({
        propsData: {
          offset: 2
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-offset-2')).to.be.equal(true)
    })

    it('可以设置 xs Number 类型', () => {
      vm = new Constructor({
        propsData: {
          xs: 3
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-xs-3')).to.be.equal(true)
    })

    it('可以设置 xs Object 类型', () => {
      vm = new Constructor({
        propsData: {
          xs: { span: 4, offset: 2 }
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-xs-4')).to.be.equal(true)
      expect(colElement.classList.contains('w-col-xs-offset-2')).to.be.equal(true)
    })

    it('可以设置 sm Number 类型', () => {
      vm = new Constructor({
        propsData: {
          sm: 3
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-sm-3')).to.be.equal(true)
    })

    it('可以设置 sm Object 类型', () => {
      vm = new Constructor({
        propsData: {
          sm: { span: 4, offset: 2 }
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-sm-4')).to.be.equal(true)
      expect(colElement.classList.contains('w-col-sm-offset-2')).to.be.equal(true)
    })

    it('可以设置 md Number 类型', () => {
      vm = new Constructor({
        propsData: {
          md: 3
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-md-3')).to.be.equal(true)
    })

    it('可以设置 md Object 类型', () => {
      vm = new Constructor({
        propsData: {
          md: { span: 4, offset: 2 }
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-md-4')).to.be.equal(true)
      expect(colElement.classList.contains('w-col-md-offset-2')).to.be.equal(true)
    })

    it('可以设置 lg Number 类型', () => {
      vm = new Constructor({
        propsData: {
          lg: 3
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-lg-3')).to.be.equal(true)
    })

    it('可以设置 lg Object 类型', () => {
      vm = new Constructor({
        propsData: {
          lg: { span: 4, offset: 2 }
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-lg-4')).to.be.equal(true)
      expect(colElement.classList.contains('w-col-lg-offset-2')).to.be.equal(true)
    })

    it('可以设置 xl Number 类型', () => {
      vm = new Constructor({
        propsData: {
          xl: 3
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-xl-3')).to.be.equal(true)
    })

    it('可以设置 xl Object 类型', () => {
      vm = new Constructor({
        propsData: {
          xl: { span: 4, offset: 2 }
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-xl-4')).to.be.equal(true)
      expect(colElement.classList.contains('w-col-xl-offset-2')).to.be.equal(true)
    })

    it('可以设置 xxl Number 类型', () => {
      vm = new Constructor({
        propsData: {
          xxl: 3
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-xxl-3')).to.be.equal(true)
    })

    it('可以设置 xxl Object 类型', () => {
      vm = new Constructor({
        propsData: {
          xxl: { span: 4, offset: 2 }
        }
      }).$mount(testDivElement)
      const colElement = vm.$el
      expect(colElement.classList.contains('w-col-xxl-4')).to.be.equal(true)
      expect(colElement.classList.contains('w-col-xxl-offset-2')).to.be.equal(true)
    })
  })
})