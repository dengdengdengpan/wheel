<template>
  <footer class="w-footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'WFooter'
}
</script>

<style lang="scss" scoped>
.w-footer {
  flex: 0 0 auto;
  padding: 24px 50px;
  font-size: 14px;
}
</style>