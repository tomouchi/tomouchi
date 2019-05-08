<template>
  <div class="layout">
    <GlobalHeader><slot name="pageName"/></GlobalHeader>
    <slot style="margin: 20px" />
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalFooter from "../containers/GlobalFooter";
import GlobalHeader from "../containers/GlobalHeader";

export default {
  components: {
    GlobalFooter,
    GlobalHeader,
  },
};
</script>

<style scoped></style>
