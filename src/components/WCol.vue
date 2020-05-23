<template>
  <div class="w-col" :class="colClass" :style="colStyle">
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
    },
    order: {
      type: Number
    }
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass () {
      const { span, offset } = this
      return [
        span && `w-col-${span}`,
        offset && `w-offset-${offset}`
      ]
    },
    colStyle () {
      const { gutter, order } = this
      return { 
        paddingLeft: (gutter / 2) + 'px',
        paddingRight: (gutter / 2) + 'px',
        order: order
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.w-col {
  max-width: 100%;
  min-height: 36px;

  $class-prefix: w-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      flex: 0 0 ($n / 24) * 100%;
      max-width: ($n / 24) * 100%;
    }
  }

  $class-prefix: w-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>