<template>
  <button class="w-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <w-icon v-if="icon && !loading" class="icon" :name="icon"></w-icon>
    <w-icon v-if="loading" name="loading" class="icon loading"></w-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import WIcon from './WIcon.vue'

export default {
  name: 'WButton',
  components: {
    WIcon
  },
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
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.w-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: var(--button-height);
  padding: 0 1em;
  border: 1px solid var(--button-border-color);
  border-radius: var(--button-border-radius);
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

  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
