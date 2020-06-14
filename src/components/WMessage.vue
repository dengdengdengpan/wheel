<template>
  <div class="w-message">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WMessage'
} 
</script>

<style lang="scss" scoped>
.w-message {
  display: flex;
  align-items: center;
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  padding: 10px 16px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  line-height: 1.5;
  font-size: 14px;
  color: rgba(0,0,0,.65);
}
</style>