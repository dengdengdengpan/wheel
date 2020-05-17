<template>
  <div class="w-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WRow'
}
</script>

<style lang="scss" scoped>
.w-row {
  display: flex;
  /* 如果一个 row 中的 col 总和超过 24，那么多余的 col 会作为一个整体另起一行排列 */
  flex-flow: row wrap;
  margin-bottom: 8px;
  background-color: pink;
}
</style>