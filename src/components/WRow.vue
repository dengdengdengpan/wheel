<template>
  <div class="w-row" :style="{ marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WRow',
  props: {
    gutter: {
      type: Number
    }
  },
  mounted () {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
.w-row {
  display: flex;
  /* 如果一个 row 中的 col 总和超过 24，那么多余的 col 会作为一个整体另起一行排列 */
  flex-flow: row wrap;
  margin-bottom: 8px;
}
</style>