<template>
  <svg class="w-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'WIcon',
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.w-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
