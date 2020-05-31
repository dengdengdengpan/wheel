<template>
  <aside class="w-sider">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'WSider'
}
</script>

<style lang="scss" scoped>
.w-sider  {
  flex: 0 0 200px;
  width: 200px;
  max-width: 200px;
  min-width: 200px;
}
</style>