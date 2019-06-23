<template>
  <Layout>
    <template #pageName
      >◆LYRICS</template
    >
    <section class="lyrics">
      <h3 class="lyrics__title">Lyrics List</h3>
      <div class="lyrics__lists">
        <section v-for="musicEle in music" class="lyrics__lists__ele">
          <h4 class="lyrics__lists__ele__title" @click.stop.prevent="lyricDisplay(musicEle.id)">
            {{ musicEle.title }}
          </h4>
          <slide-up-down :active="lyricDisplayFlags[musicEle.id]" :duration="1000">
            <article
              :id="`lyrics__lists__${musicEle.id}`"
              class="lyrics__lists__ele__lyric"
              v-html="lyricDateList[musicEle.id]"
            ></article>
          </slide-up-down>
        </section>
      </div>
    </section>
  </Layout>
</template>

<script>
import displayLyrics from "~/mixins/displayLyrics";

export default {
  metaInfo: {
    title: "LYRICS",
  },
  mixins: [displayLyrics],
};
</script>
<style lang="scss" scoped>
.lyrics {
  margin-top: 30px;
  &__title {
    border-bottom: thin solid;
    font-size: 1.7rem;
    line-height: 1.1;
  }
  &__lists {
    margin-top: 20px;
    &__ele {
      list-style: none;
      margin: 20px 0 1%;
      &__title {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: #999999;
      }
    }
  }
}
</style>
