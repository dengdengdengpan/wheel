<template>
  <div 
    class="w-col" 
    :class="[span && `w-col-${span}`, offset && `offset-${offset}`]"
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
    },
    offset: {
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

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>