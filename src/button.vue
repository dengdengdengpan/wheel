<template>
  <button class="w-button">按钮</button>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.w-button {
        height: var(--button-height);
        padding: 0 1em;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background-color: var(--button-bg);
        font-size: var(--font-size);

        &:hover {
          border-color: var(--border-color-hover);
        }

        &:active {
          background: var(--button-active-bg);
        }

        &:focus {
          outline: none
        }
      }
</style>
