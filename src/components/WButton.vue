<template>
  <button class="w-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <w-icon v-if="icon && !loading" class="w-button-icon" :name="icon"></w-icon>
    <w-icon v-if="loading" class="w-button-icon w-button-loading" name="loading"></w-icon>
    <div class="w-button-text">
      <slot></slot>
    </div> 
  </button>
</template>

<script>
import WIcon from './WIcon.vue'

export default {
  name: 'WButton',
  components: { WIcon },
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return ['left', 'right'].indexOf !== -1
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
    border-color: var(--button-border-color-hover);
  }

  &:active {
    background-color: var(--button-bg-active);
  }

  &:focus {
    outline: none
  }

  > .w-button-icon {
    order: 1;
    margin-right: .1em;
  }

  > .w-button-text {
    order: 2; 
  }

  &.icon-right {
    > .w-button-icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }

    > .w-button-text {
      order: 1;
    }
  }

  .w-button-loading {
    animation: spin 2s infinite linear;
  }
}
</style>
