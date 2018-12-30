<template>
  <div class="info-area">
    <h3 class="info-area__title">Info</h3>
    <div class="info-area__contents">
      <div class="info-area__contents__ele">
        <h4 class="info-area__contents__ele__title">Content</h4>
        <dl v-for="contentEle in infoContent" class="info-area__contents__ele__txt">
          <dt>{{contentEle[0]}}</dt>
          <dd>{{contentEle[1]}}</dd>
        </dl>
      </div>
      <div class="info-area__contents__ele">
        <h4 class="info-area__contents__ele__title">Tech</h4>
        <dl v-for="techEle in infoTech" class="info-area__contents__ele__txt">
          <dt>{{techEle[0]}}</dt>
          <dd>{{techEle[1]}}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import info from '~/assets/info';

export default {
  props: {
    infoRow: Number
  },
  computed: {
    infoContent() {
      return info.content.slice(0, this.infoRow || info.content.length);
    },
    infoTech() {
      return info.tech.slice(0, this.infoRow || info.tech.length);
    },
  },
};
</script>

<style lang="scss" scoped>
.info-area {
  &__title {
    border-bottom: thin solid;
    font-size: 1.7rem;
    line-height: 1.1;
  }
  &__contents {
    @media (min-width: 768px) {
      display: flex;

      margin-top: 15px;
      background-image: url('../assets/listBackgroundImage.jpg');
      background-size: cover;
    }
    &__ele {
      background-image: url("../assets/listBackgroundImage.jpg");
      background-size: cover;
      margin: 1rem 0 0;
      padding: 0.5em 0 0.1rem;
      @media (min-width: 768px) {
        background-image: none;
        float: left;
        padding: 0 4%;
        width: 42%;
      }
      &__title {
        font-size: 1.1rem;
        border-bottom: thin dotted;
      }
      &__txt {
        dt {
          border-bottom: thin dotted;
          display: inline-block;
          line-height: 1.2;
        }
        dd {
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
