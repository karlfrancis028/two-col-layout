<template>
  <div :class="isIndependent">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "one-column-layout",
    props: {
      useIndependently: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      isIndependent() {
        return this.useIndependently ? 'one-column-layout' : '';
      }
    }
  }
</script>

<style>
  .one-column-layout {
    max-width: 75vw;
    min-width: 75vw;
    margin: 16px auto;
    flex-grow: 1;
  }
</style>