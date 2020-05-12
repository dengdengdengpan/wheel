<template>
  <div class="input-wrapper" :class="{ error }">
    <input 
      type="text"
      :value="value" 
      :disabled="disabled" 
      :readonly="readonly" 
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <w-icon name="error" class="icon-error"></w-icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import WIcon from './WIcon.vue'

export default {
  name: 'WInput',
  components: { WIcon },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #666;
$border-color-hover: #999;
$border-radius: 4px;
$font-size: 14px;
$color: #111;
$box-shadow-color: rgba(0, 0, 0, .5);
$error: #F1453D;

.input-wrapper {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  font-size: $font-size;

  > :not(:last-child) {
    margin-right: 0.4em;
  }

  > input {
    height: $height;
    padding: 0 8px;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    font-size: inherit;
    color: $color;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }

    &:disabled {
      border-color: #e4e7ed;
      background-color: #f5f7fa;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

  &.error {
    > input {
      border-color: $error;
    }
  }

  .icon-error {
    fill: $error;
  }

  .error-message {
    color: $error;
  }
}
</style>