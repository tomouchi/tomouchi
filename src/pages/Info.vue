<template>
  <Layout>
    <template #pageName
      >◆INFO</template
    >
    <div class="info">
      <InfoArea class="info__info-area" />
    </div>
  </Layout>
</template>

<script>
import InfoArea from "../components/InfoArea";

export default {
  metaInfo: {
    title: "INFO",
  },
  components: {
    InfoArea,
  },
};
</script>

<style lang="scss" scoped>
.info {
  &__info-area {
    margin-top: 30px;
  }
}
</style>
