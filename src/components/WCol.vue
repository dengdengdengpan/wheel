<template>
  <div class="w-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const validator = (value) => {
  if (typeof value === 'number') {
    return true
  } else if (typeof value === 'object') {
    const keys = Object.keys(value)
    const propsArray = ['span', 'offset', 'order']
    let valid = true
    keys.forEach(key => {
      if (!propsArray.includes(key)) valid = false
    })
    return valid
  } else {
    return false
  }
}

export default {
  name: 'WCol',
  props: {
    span: {
      type: Number
    },
    offset: {
      type: Number
    },
    xs: {
      type: [Number, Object],
      validator
    },
    sm: {
      type: [Number, Object],
      validator
    },
    md: {
      type: [Number, Object],
      validator
    },
    lg: {
      type: [Number, Object],
      validator
    },
    xl: {
      type: [Number, Object],
      validator
    },
    xxl: {
      type: [Number, Object],
      validator
    }
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    colClass () {
      const { span, offset, xs, sm, md, lg, xl, xxl } = this
      return [
        span === 0 ? 'w-col-0' : (span && `w-col-${span}`),
        offset && `w-col-offset-${offset}`,
        ... this.createSizeClass({ xs, sm, md, lg, xl, xxl })
      ]
    },
    colStyle () {
      const { gutter } = this
      const paddingGutter = (gutter / 2) + 'px'
      return { 
        paddingLeft: paddingGutter,
        paddingRight: paddingGutter
      }
    }
  },
  methods: {
    createSizeClass ({ xs, sm, md, lg, xl, xxl }) {
      const sizeStrArray = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] 
      if (xs || sm || md || lg || xl || xxl ) {
        let sizeObjClass = []
        sizeStrArray.forEach(size => {
          if (typeof this[size] === 'number') {
            sizeObjClass.push([`w-col-${size}-${this[size]}`])
          } else if (typeof this[size] === 'object') {
            const propObj = this[size]
            Object.keys(propObj).forEach(prop => {
              sizeObjClass.push(
                prop === 'span' 
                ? `w-col-${size}-${propObj[prop]}` 
                : `w-col-${size}-${prop}-${propObj[prop]}`
              )
            })
          }
        })
        return sizeObjClass
      } else {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.w-col {
  max-width: 100%;
  min-height: 36px;
}

.w-col-0, .w-col-xs-0 {
  display: none;
}

$class-prefix: w-col-;
@for $n from 1 through 24 {
  .#{$class-prefix}#{$n} {
    display: block;
    flex: 0 0 ($n / 24) * 100%;
    max-width: ($n / 24) * 100%;
  }
}

$class-prefix: w-col-offset-;
@for $n from 1 through 24 {
  .#{$class-prefix}#{$n} {
    margin-left: ($n / 24) * 100%;
  }
}

$class-prefix: w-col-xs-;
@for $n from 1 through 24 {
  .#{$class-prefix}#{$n} {
    display: block;
    flex: 0 0 ($n / 24) * 100%;
    max-width: ($n / 24) * 100%;
  }
}

$class-prefix: w-col-xs-offset-;
@for $n from 1 through 24 {
  .#{$class-prefix}#{$n} {
    margin-left: ($n / 24) * 100%;
  }
}

@media (min-width: 576px) {
  .w-col-sm-0 {
    display: none;
  }
  $class-prefix: w-col-sm-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      display: block;
      flex: 0 0 ($n / 24) * 100%;
      max-width: ($n / 24) * 100%;
    }
  }

  $class-prefix: w-col-sm-offset-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}

@media (min-width: 768px) {
  $class-prefix: w-col-md-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      display: block;
      flex: 0 0 ($n / 24) * 100%;
      max-width: ($n / 24) * 100%;
    }
  }

  $class-prefix: w-col-md-offset-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}

@media (min-width: 992px) {
  $class-prefix: w-col-lg-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      display: block;
      flex: 0 0 ($n / 24) * 100%;
      max-width: ($n / 24) * 100%;
    }
  }

  $class-prefix: w-col-lg-offset-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}

@media (min-width: 1200px) {
  $class-prefix: w-col-xl-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      display: block;
      flex: 0 0 ($n / 24) * 100%;
      max-width: ($n / 24) * 100%;
    }
  }

  $class-prefix: w-col-xl-offset-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}

@media (min-width: 1600px) {
  $class-prefix: w-col-xxl-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      display: block;
      flex: 0 0 ($n / 24) * 100%;
      max-width: ($n / 24) * 100%;
    }
  }

  $class-prefix: w-col-xxl-offset-;
  @for $n from 1 through 24 {
    .#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>