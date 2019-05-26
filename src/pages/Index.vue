<template>
  <Layout>
    <template #pageName
      >◆TOP</template
    >
    <div class="index">
      <div class="index__hero flexslider">
        <ul class="index__hero__list slides">
          <li>
            <a href="music#ayumumichi"><img src="/images/ayumumichi.jpg"/></a>
          </li>
          <li>
            <a href="music#wisteria"><img src="/images/wisteria.jpg"/></a>
          </li>
        </ul>
      </div>
      <InfoArea class="index__info-area" :infoRow="3" />
    </div>
  </Layout>
</template>

<script>
import InfoArea from "../components/InfoArea";

export default {
  metaInfo: {
    title: "TOP",
  },
  components: {
    InfoArea,
  },
  mounted() {
    jQuery(".flexslider").flexslider({
      directionNav: false,
      animationSpeed: 3000,
    });
  },
};
</script>

<style lang="scss" scoped>
.index {
  &__hero {
    margin-top: 30px;
  }
  &__info {
    margin-top: 20px;
  }
}
</style>
