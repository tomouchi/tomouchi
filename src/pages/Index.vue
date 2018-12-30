<template>
  <Layout>
    <div class="index">
      <div class="index__hero flexslider">
        <ul class="index__hero__list slides">
          <li><a href="music/index.html#ayumumichi"><img src="@/assets/ayumumichi.jpg"/></a></li>
          <li><a href="music/index.html#wisteria"><img src="@/assets/wisteria.jpg"/></a></li>
        </ul>
      </div>
      <div class="index__info">
        <h3 class="index__info__title">Info</h3>
        <div class="index__info__contents">
          <div class="index__info__contents__ele">
            <h4 class="index__info__contents__ele__title">Content</h4>
            <dl v-for="contentEle in info.content" class="index__info__contents__ele__txt">
              <dt>{{contentEle[0]}}</dt>
              <dd>{{contentEle[1]}}</dd>
            </dl>
          </div>
          <div class="index__info__contents__ele">
            <h4 class="index__info__contents__ele__title">Tech</h4>
            <dl v-for="infoTech in info.tech" class="index__info__contents__ele__txt">
              <dt>{{infoTech[0]}}</dt>
              <dd>{{infoTech[1]}}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import info from '~/assets/info';

export default {
  metaInfo: {
    title: '内山友和のホームページ|TopPage',
    link: [
      {rel: 'stylesheet', href: '/styles/flexslider.css', type: 'text/css'},
    ],
    script: [
      {src: 'https://code.jquery.com/jquery-3.2.1.min.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.1/jquery.flexslider-min.js'},
    ],
  },
  data: function () {
    return {
      info: info,
    };
  },
  mounted() {
    $('.flexslider').flexslider({
      directionNav: false,
      animationSpeed: 3000,
    });
  }
  ,
};
</script>

<style lang="scss" scoped>
.index {
  &__hero {
    margin-top: 30px;
  }
  &__info {
    &__title {
      border-bottom: thin solid;
      font-size: 1.7rem;
      line-height: 1.1;
      margin: 1.5em auto 0.5em;
    }
    &__contents {
      @media (min-width: 768px) {
        display: flex;
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
}
</style>
