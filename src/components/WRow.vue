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
    }
  },
  computed: {
    rowStyle () {
      const { gutter } = this
      return {
        marginLeft: (-gutter / 2) + 'px',
        marginRight: (-gutter / 2) + 'px'
      }
    },
    rowClass () {
      const { justify } = this
      return [
        justify && `w-row-${justify}`
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
}
</style>