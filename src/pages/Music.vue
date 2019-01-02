<template>
  <Layout>
    <div class="music">
      <h3 class="music__title">Song List</h3>
      <div class="music__lists">
        <div v-for="musicEle in music" :id="musicEle.id" class="music__lists__ele">
          <div v-if="musicEle.thumbnail" class="music__lists__ele__thumbnail"><img :src="musicEle.thumbnail"></div>
          <div class="music__lists__ele__info">
            <div class="music__lists__ele__info__title">{{musicEle.title}}</div>
            <div class="music__lists__ele__info__link"><a :href="musicEle.link" target="new">Lyrics</a></div>
          </div>
          <div class="music__lists__ele__data">
            <template v-if="musicEle.data">
              <audio :src="musicEle.data" controls>
                <p>※ご利用のブラウザでは再生することができません。</p>
              </audio>
            </template>
            <template v-else>
              UP予定
            </template>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import music from '~/data/music';

export default {
  data: function () {
    return {
      music: music,
    };
  },
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
</style>
