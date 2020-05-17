<template>
  <div 
    class="w-col" 
    :class="[`w-col-${span}`]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WCol',
  props: {
    span: {
      type: Number
    }
  },
  data () {
    return {
      //
    }
  },
}
</script>

<style lang="scss" scoped>
.w-col {
  max-width: 100%;
  min-height: 36px;
  border: 1px solid red;
  background-color: skyblue;

  $class-prefix: w-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      flex: 0 0 ($n / 24) * 100%;
      max-width: ($n / 24) * 100%;
    }
  }
}
</style>