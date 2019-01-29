<template>
  <Layout>
    <MusicInfo musicInfoType="lyric"></MusicInfo>
  </Layout>
</template>

<script>
import MusicInfo from '~/components/MusicInfo'

export default {
  metaInfo: {
    title: 'LYRICS | tomokazu uchiyama',
  },
  components: {
    MusicInfo,
  },
  created() {
    this.$root.$data.pageName = 'LYRICS';
  },
};
</script>
