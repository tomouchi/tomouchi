<template>
  <Layout>
    <template #pageName
      >◆LYRICS</template
    >
    <MusicInfo musicInfoType="lyric"></MusicInfo>
  </Layout>
</template>

<script>
import MusicInfo from "~/components/MusicInfo";

export default {
  metaInfo: {
    title: "LYRICS",
  },
  components: {
    MusicInfo,
  },
};
</script>
