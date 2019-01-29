<template>
  <Layout>
    <div class="info">
      <InfoArea class="info__info-area"/>
    </div>
  </Layout>
</template>

<script>
import InfoArea from '../components/InfoArea';

export default {
  metaInfo: {
    title: 'INFO | tomokazu uchiyama',
  },
  components: {
    InfoArea,
  },
  created() {
    this.$root.$data.pageName = 'INFO';
  },
};
</script>

<style lang="scss" scoped>
.info{
  &__info-area{
   margin-top: 30px;
  }
}
</style>
