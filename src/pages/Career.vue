<template>
  <Layout>
    <div class="profile-career">
      <div class="profile-career__profile">
        <profile/>
      </div>
      <History title="CAREER" :historyData="career"/>
      <div class="profile-career__link">
        <g-link :to="{ name: 'biography' }">PROFILE &amp; BIOGRAPHY</g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
import career from '~/data/career';
import Profile from '~/components/Profile';
import History from '~/components/History';


export default {
  metaInfo: {
    title: 'PROFILE & CAREER | tomokazu uchiyama',
  },
  components: {
    History,
    Profile,
  },
  data: function () {
    return {
      career: career,
    };
  },
  created() {
    this.$root.$data.pageName = 'PROFILE & CAREER';
  },
};
</script>

<style lang="scss" scoped>
.profile-career {
  &__link {
    margin-top: 20px;
    text-align: right;
  }
}
</style>
