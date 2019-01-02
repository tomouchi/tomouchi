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
    title: 'tomokazu uchiyama | INFO',
  },
  components: {
    InfoArea,
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
