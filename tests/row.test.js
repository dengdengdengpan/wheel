import Vue from 'vue'
import WRow from '../src/components/WRow.vue'
import WCol from '../src/components/WCol.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

const expect = chai.expect

describe('WRow', () => {
  it('存在', () => {
    expect(WRow).to.be.exist
  })

  describe('props', () => {
    it('可以设置 gutter', (done) => {
      Vue.component('w-row', WRow)
      Vue.component('w-col', WCol)
      const testDivElement = document.createElement('div')
      testDivElement.innerHTML = `
        <w-row :gutter="10">
          <w-col :span="12"></w-col>
          <w-col :span="12"></w-col>
        </w-row>
      `
      document.body.appendChild(testDivElement)
      const vm = new Vue({ el: testDivElement })
      setTimeout(() => {
        const rowElement = vm.$el.querySelector('.w-row')
        expect(getComputedStyle(rowElement).marginRight).to.equal('-5px')
        expect(getComputedStyle(rowElement).marginLeft).to.equal('-5px')
        const colElements = vm.$el.querySelectorAll('.w-col')
        expect(getComputedStyle(colElements[0]).paddingRight).to.equal('5px')
        expect(getComputedStyle(colElements[1]).paddingLeft).to.equal('5px')
        vm.$el.remove()
        vm.$destroy()
        done()
      })
    })

    it('可以设置 justify', () => {
      const testDivElement = document.createElement('div')
      document.body.appendChild(testDivElement)
      const Constructor = Vue.extend(WRow)
      const vm = new Constructor({
        propsData: {
          justify: 'center'
        }
      }).$mount(testDivElement)
      const rowElement = vm.$el
      expect(rowElement.classList.contains('w-row-center')).to.equal(true)
      testDivElement.remove()
      vm.$destroy()
    })

    it('可以设置 align', () => {
      const testDivElement = document.createElement('div')
      document.body.appendChild(testDivElement)
      const Constructor = Vue.extend(WRow)
      const vm = new Constructor({
        propsData: {
          align: 'bottom'
        }
      }).$mount(testDivElement)
      const rowElement = vm.$el
      expect(rowElement.classList.contains('w-row-bottom')).to.equal(true)
      testDivElement.remove()
      vm.$destroy()
    })
  })
})