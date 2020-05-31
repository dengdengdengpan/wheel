<template>
  <section class="w-layout" :class="layoutClass">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'WLayout',
  data () {
    return {
      layoutClass: {
        'w-layout-has-sider': false
      }
    }
  },
  mounted () {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'WSider') {
        this.layoutClass['w-layout-has-sider'] = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.w-layout {
  flex: auto;
  display: flex;
  flex-direction: column;

  &.w-layout-has-sider {
    flex-direction: row;
  }
}
</style>