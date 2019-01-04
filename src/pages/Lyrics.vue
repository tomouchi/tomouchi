<template>
  <Layout>
    <MusicInfo musicInfoType="lyric"></MusicInfo>
  </Layout>
</template>

<script>
import MusicInfo from '~/components/MusicInfo'

export default {
  components: {
    MusicInfo,
  },
  mounted() {
    this.$root.$data.pageName = 'LYRICS';
  },
};
</script>
