<template>
  <div class="music-info">
    <template v-if="musicInfoType==='music'">
      <div class="music-info__music">
        <h3 class="music-info__music__title">Song List</h3>
        <div class="music-info__music__lists">
          <div v-for="musicEle in music" :id="musicEle.id" class="music-info__music__lists__ele">
            <div v-if="musicEle.thumbnail" class="music-info__music__lists__ele__thumbnail"><img
                    :src="musicEle.thumbnail"></div>
            <div class="music-info__music__lists__ele__info">
              <div class="music-info__music__lists__ele__info__title">{{musicEle.title}}</div>
              <div class="music-info__music__lists__ele__info__link">
                <a href="#" @click.stop.prevent="lyricDisplay(musicEle.id)">Lyrics</a>
              </div>
            </div>
            <div class="music-info__music__lists__ele__data">
              <template v-if="musicEle.data">
                <audio :src="musicEle.data" controls>
                  <p>※ご利用のブラウザでは再生することができません。</p>
                </audio>
              </template>
              <template v-else>
                UP予定
              </template>
            </div>
            <div :id="`music-info__lyrics__${musicEle.id}`" class="music-info__lyrics__list__lyric"
                 hidden v-html="lyricDateList[musicEle.id]"></div>
          </div>
        </div>
      </div>
    </template>


    <template v-else>
      <div class="music-info__lyrics">
        <h3 class="music-info__lyrics__title">Lyrics List</h3>
        <ul v-for="musicEle in music" class="music-info__lyrics__list">
          <li class="music-info__lyrics__list__ele">
            <a href="#" @click.stop.prevent="lyricDisplay(musicEle.id)">{{musicEle.title}}</a>
          </li>
          <div :id="`music-info__lyrics__${musicEle.id}`" class="music-info__lyrics__list__lyric"
               hidden v-html="lyricDateList[musicEle.id]"></div>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';

import music from '~/data/music';

export default {
  props: {
    musicInfoType: String,
  },
  data: function () {
    return {
      music: music,
      lyric: null,
      lyricDisplayFlags: {},
      lyricDateList: {},
    };
  },
  created() {
    this.lyricDisplayFlags = music.reduce((acc, cur) => ({...acc, [cur.id]: false}), {});
    this.addLyricData();
  },
  methods: {
    addLyricData() {
      music.forEach(ele => {
        this.getLyricData(ele.id).then(resolve => {
          this.$set(this.lyricDateList, ele.id, resolve.data);
        }).catch(reject => {
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
            },
          );
        },
      );
    },
    lyricDisplay(musicEleId) {
      if (this.lyricDisplayFlags[musicEleId] === true) {
        jQuery(`#music-info__lyrics__${musicEleId}`).slideUp(500);
      } else {
        jQuery(`#music-info__lyrics__${musicEleId}`).slideDown(1000);
      }
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
      margin-top: 15px;
      &__ele {
        background-image: url(../assets/listBackgroundImage.jpg);
        background-size: cover;
        border-left: thin solid #666666;
        margin: 9px 0 0;
        padding: 20px 0 15px 10px;
        &__thumbnail {
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
          &__link {
            align-self: flex-end;
            margin-left: 1%;
            font-size: 85%;
          }
        }
        &__data {
          font-size: 80%;
          margin: 15px 0 0;
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
    &__list {
      list-style: none;
      &__ele {
        margin: 20px 0 1%;
      }
    }
  }
}
</style>
