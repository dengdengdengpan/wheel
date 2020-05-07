<template>
  <div class="input-wrapper">
    <input :value="value" :disabled="disabled" :readonly="readonly" type="text">
  </div>
</template>

<script>
export default {
  name: 'WInput',
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

.input-wrapper {
  display: inline-block;
  vertical-align: middle;
  font-size: $font-size;

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
}
</style>