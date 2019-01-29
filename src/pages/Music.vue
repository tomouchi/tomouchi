<template>
  <Layout>
    <MusicInfo musicInfoType="music"></MusicInfo>
  </Layout>
</template>

<script>
import MusicInfo from '~/components/MusicInfo'

export default {
  metaInfo: {
    title: 'MUSIC | tomokazu uchiyama',
  },
  components: {
    MusicInfo,
  },
  created() {
    this.$root.$data.pageName = 'MUSIC';
  },
};
</script>
