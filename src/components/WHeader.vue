<template>
  <header class="w-header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'WHeader'
}
</script>

<style lang="scss" scoped>
.w-header {
  flex: 0 0 auto;
  height: 64px;
  padding: 0 50px;
  line-height: 64px;
}
</style>