<template>
  <div class="layout">
    <GlobalHeader/>
    <slot/>
  </div>
</template>

<script>
import GlobalHeader from "../containers/GlobalHeader";

export default {
  components: {
    GlobalHeader
  }
};
</script>

<style scoped>
</style>
