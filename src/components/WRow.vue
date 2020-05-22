<template>
  <div class="w-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WRow',
  props: {
    gutter: {
      type: Number
    },
    justify: {
      type: String,
      validator (value) {
        return ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'].includes(value)
      }
    },
    align: {
      type: String,
      validator (value) {
        return ['top', 'middle', 'bottom'].includes(value)
      }
    }
  },
  computed: {
    rowStyle () {
      const { gutter } = this
      if (gutter) {
        return {
          marginLeft: (-gutter / 2) + 'px',
          marginRight: (-gutter / 2) + 'px'
        }
      }
      
    },
    rowClass () {
      const { justify, align } = this
      return [
        justify && `w-row-${justify}`,
        align && `w-row-${align}`
      ]
    }
  },
  mounted () {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
.w-row {
  display: flex;
  /* 如果一个 row 中的 col 总和超过 24，那么多余的 col 会作为一个整体另起一行排列 */
  flex-flow: row wrap;
  margin-bottom: 8px;

  &.w-row-start {
    justify-content: flex-start;
  }

  &.w-row-end {
    justify-content: flex-end;
  }

  &.w-row-center {
    justify-content: center;
  }

  &.w-row-space-between {
    justify-content: space-between;
  }

  &.w-row-space-around {
    justify-content: space-around;
  }

  &.w-row-space-evenly {
    justify-content: space-evenly;
  }

  &.w-row-top {
    align-items: flex-start;
  }

  &.w-row-middle {
    align-items: center;
  }

  &.w-row-bottom {
    align-items: flex-end;
  }
}
</style>