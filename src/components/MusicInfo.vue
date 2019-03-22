<template>
  <div class="music-info">
    <template v-if="musicInfoType === 'music'">
      <article class="music-info__music">
        <h3 class="music-info__music__title">Song List</h3>
        <div class="music-info__music__lists">
          <article
            v-for="musicEle in music"
            :id="musicEle.id"
            class="music-info__music__lists__ele"
          >
            <div v-if="musicEle.thumbnail" class="music-info__music__lists__ele__thumbnail">
              <img :src="musicEle.thumbnail" />
            </div>

            <div class="music-info__music__lists__ele__info">
              <div class="music-info__music__lists__ele__info__title">{{ musicEle.title }}</div>
              <div
                class="music-info__music__lists__ele__info__toggle"
                @click.stop.prevent="lyricDisplay(musicEle.id)"
              >
                Lyrics
              </div>
            </div>
            <div class="music-info__music__lists__ele__sound">
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
                :id="`music-info__lyrics__${musicEle.id}`"
                class="music-info__music__lists__lyric"
                v-html="lyricDateList[musicEle.id]"
              ></article>
            </slide-up-down>
          </article>
        </div>
      </article>
    </template>

    <template v-else>
      <article class="music-info__lyrics">
        <h3 class="music-info__lyrics__title">Lyrics List</h3>
        <div class="music-info__lyrics__lists">
          <section v-for="musicEle in music" class="music-info__lyrics__lists__ele">
            <h4
              class="music-info__lyrics__lists__ele__title"
              @click.stop.prevent="lyricDisplay(musicEle.id)"
            >
              {{ musicEle.title }}
            </h4>
            <slide-up-down :active="lyricDisplayFlags[musicEle.id]" :duration="1000">
              <article
                :id="`music-info__lyrics__lists__${musicEle.id}`"
                class="music-info__lyrics__lists__ele__lyric"
                v-html="lyricDateList[musicEle.id]"
              ></article>
            </slide-up-down>
          </section>
        </div>
      </article>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import SlideUpDown from "vue-slide-up-down";

import music from "~/data/music";

export default {
  components: { SlideUpDown },
  props: {
    musicInfoType: String,
  },
  data: function() {
    return {
      music: music,
      lyric: null,
      lyricDisplayFlags: {},
      lyricDateList: {},
    };
  },
  created() {
    this.lyricDisplayFlags = music.reduce((acc, cur) => ({ ...acc, [cur.id]: false }), {});
    this.addLyricData();
  },
  methods: {
    addLyricData() {
      music.forEach((ele) => {
        this.getLyricData(ele.id)
          .then((resolve) => {
            this.$set(this.lyricDateList, ele.id, resolve.data);
          })
          .catch((reject) => {
            this.$set(this.lyricDateList, ele.id, reject.data);
          });
      });
    },
    getLyricData(musicEleId) {
      return new Promise((resolve, reject) => {
        axios.get(`/lyrics/${musicEleId}.html`).then(
          (lyric) => {
            resolve(lyric);
          },
          () => {
            reject(`<div>歌詞が用意できていません<div/>`);
          }
        );
      });
    },
    lyricDisplay(musicEleId) {
      this.lyricDisplayFlags[musicEleId] = !this.lyricDisplayFlags[musicEleId];
    },
  },
};
</script>

<style lang="scss" scoped>
.music-info {
  &__music {
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
  &__lyrics {
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
}
</style>
