<template>
  <Layout>
    <template #pageName
      >◆PROFILE & BIOGRAPHY</template
    >
    <div class="profile-biography">
      <div class="profile-biography__profile">
        <profile />
      </div>
      <div class="profile-biography__biography">
        <h3 class="profile-biography__biography__title">Biography</h3>
        <div class="profile-biography__biography__content">
          <div
            v-for="biographyRowUnitCountEle in historyRowUnitCount"
            class="profile-biography__biography__content__row"
          >
            <div class="profile-biography__biography__content__row__ele">
              <h4>{{ biography[biographyRowUnitCountEle].date }}</h4>
              <p>{{ biography[biographyRowUnitCountEle].content }}</p>
            </div>
            <div
              v-if="biographyRowUnitCountEle + 1 < biography.length"
              class="profile-biography__biography__content__row__ele"
            >
              <h4>{{ biography[biographyRowUnitCountEle + 1].date }}</h4>
              <p>{{ biography[biographyRowUnitCountEle + 1].content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-biography__link">
        <g-link to="/career">CAREER</g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
import biography from "~/data/biography";
import Profile from "~/components/Profile";

export default {
  metaInfo: {
    title: "PROFILE & BIOGRAPHY",
  },
  components: {
    Profile,
  },
  data: function() {
    return {
      biography: biography,
    };
  },
  computed: {
    historyRowUnitCount: function() {
      let historyRowUnitCount = [];
      for (let i = 0; i < biography.length; i++) {
        if (i % 2 === 0) {
          historyRowUnitCount.push(i);
        }
      }
      return historyRowUnitCount;
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-biography {
  &__biography {
    margin-top: 30px;
    &__title {
      border-bottom: thin solid;
      font-size: 1.7rem;
      line-height: 1.1;
    }
    &__content {
      margin-top: 15px;
      &__row {
        @media (min-width: 768px) {
          background-image: url("../assets/listBackgroundImage.jpg");
          background-size: cover;
          border-left: thin solid #666666;
          display: flex;
          margin-top: 7px;
          padding: 15px 0;
        }
        &__ele {
          background-image: url("../assets/listBackgroundImage.jpg");
          background-size: cover;
          border-left: thin solid #666666;
          margin-top: 7px;
          padding: 15px 0 15px 1.5%;
          @media (min-width: 768px) {
            background-image: initial;
            border-left: none;
            box-sizing: border-box;
            flex-basis: 50%;
            margin-top: 0;
            padding: 0 0 0 3%;
          }
          h4 {
            border-bottom: dotted thin;
            line-height: 1.2;
          }
          p {
            line-height: 2;
          }
        }
      }
    }
  }
  &__link {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
