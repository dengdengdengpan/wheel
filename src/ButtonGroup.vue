<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  mounted () {
    for (let node of this.$el.children) {
      let nodeName = node.nodeName.toLowerCase()
      if (nodeName !== 'button') {
        console.warn(`w-button-group 的子元素应该全是 w-button，而你写的是${nodeName}`)
      }
    } 
  }
}
</script>

<style lang="scss">
.w-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .w-button {
    border-radius: 0;

    &:not(:first-child) { // 修复 w-button-group 中第一个元素的 margin-left: -1px 的问题
      margin-left: -1px; // 使按钮中处于中间的按钮的左右 border 不会互相重叠
    }

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    // 修复 marg-left: -1px 造成的 button 的右 border 在hovuer 时被后一个元素左 border 覆盖的问题
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
