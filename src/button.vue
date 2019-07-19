<template>
  <button class="w-button" :class="{[`icon-${iconPosition}`]: true}">
    <w-icon v-if="icon" :name="icon"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      } 
    }
  }
}
</script>

<style lang="scss">
.w-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: var(--button-height);
  padding: 0 1em;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--button-bg);
  font-size: var(--font-size);
  // 要使内联元素垂直方向对齐的方式
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none
  }

  > .icon {
    order: 1;
    margin-right: .1em;
  }

  > .content {
    order: 2; 
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-left: .1em;
      margin-right: 0;
    }

    > .content {
      order: 1;
    }
  }
}
</style>
