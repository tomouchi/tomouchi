<template>
  <Layout>
    <template #pageName
      >◆MUSIC</template
    >
    <section class="music">
      <h3 class="music__title">Song List</h3>
      <div class="music__lists">
        <article v-for="musicEle in music" :id="musicEle.id" class="music__lists__ele">
          <div v-if="musicEle.thumbnail" class="music__lists__ele__thumbnail">
            <img :src="musicEle.thumbnail" />
          </div>

          <div class="music__lists__ele__info">
            <div class="music__lists__ele__info__title">{{ musicEle.title }}</div>
            <div
              class="music__lists__ele__info__toggle"
              @click.stop.prevent="lyricDisplay(musicEle.id)"
            >
              Lyrics
            </div>
          </div>
          <div class="music__lists__ele__sound">
            <template v-if="musicEle.data">
              <audio :src="musicEle.data" controls>
                <p>※ご利用のブラウザでは再生することができません。</p>
              </audio>
            </template>
            <template v-else>
              音源UP予定
            </template>
          </div>
          <slide-up-down :active="lyricDisplayFlags[musicEle.id]" :duration="1000">
            <article
              :id="`lyrics__${musicEle.id}`"
              class="music__lists__lyric"
              v-html="lyricDateList[musicEle.id]"
            ></article>
          </slide-up-down>
        </article>
      </div>
    </section>
  </Layout>
</template>

<script>
import displayLyrics from "~/mixins/displayLyrics";

export default {
  metaInfo: {
    title: "MUSIC",
  },
  mixins: [displayLyrics],
};
</script>

<style lang="scss" scoped>
.music {
  margin-top: 30px;
  &__title {
    border-bottom: thin solid;
    font-size: 1.7rem;
    line-height: 1.1;
  }
  &__lists {
    margin-top: 20px;
    &__ele {
      background-image: url(../assets/listBackgroundImage.jpg);
      background-size: cover;
      border-left: thin solid #666666;
      margin: 9px 0 0;
      padding: 20px 0 15px 10px;
      &__thumbnail {
        padding-bottom: 10px;
        width: 150px;
        img {
          width: 100%;
        }
      }
      &__info {
        display: flex;
        &__title {
          font-weight: bold;
        }
        &__toggle {
          align-self: flex-end;
          cursor: pointer;
          font-size: 85%;
          margin-left: 1%;
          text-decoration-color: #999999;
          text-decoration: underline;
        }
      }
      &__sound {
        font-size: 80%;
        padding: 10px 0 0;
      }
    }
  }
}
</style>
