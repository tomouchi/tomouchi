<template>
  <Layout>
    <div class="profile-biography">
      <div class="profile-biography__profile">
        <h3 class="profile-biography__profile__title">Profile</h3>
        <div class="profile-biography__profile__content">
          <div class="profile-biography__profile__content__photo">
            <img src="../assets/profile.jpg" width="500"/>
          </div>
          <div class="profile-biography__profile__content__txt">
            <p class="profile-biography__profile__content__txt__name">内山 友和</p>
            <dl class="profile-biography__profile__content__txt__other">
              <div class="profile-biography__profile__content__txt__other__ele">
                <dt>出身地</dt>
                <dd>新潟県</dd>
              </div>
              <div class="profile-biography__profile__content__txt__other__ele">
                <dt>身長</dt>
                <dd>162cm</dd>
              </div>
              <div class="profile-biography__profile__content__txt__other__ele">
                <dt>体重</dt>
                <dd>52kg</dd>
              </div>
              <div class="profile-biography__profile__content__txt__other__ele">
                <dt>血液型</dt>
                <dd>A型</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div class="profile-biography__biography">
        <h3 class="profile-biography__biography__title">Biography</h3>
        <div class="profile-biography__biography__content">
          <div v-for="biographyRowUnitCountEle in biographyRowUnitCount"
               class="profile-biography__biography__content__row">
            <div class="profile-biography__biography__content__row__ele">
              <h4>{{biography[biographyRowUnitCountEle].date}}</h4>
              <p>{{biography[biographyRowUnitCountEle].content}}</p>
            </div>
            <div v-if="biographyRowUnitCountEle+1<biography.length"
                 class="profile-biography__biography__content__row__ele">
              <h4>{{biography[biographyRowUnitCountEle+1].date}}</h4>
              <p>{{biography[biographyRowUnitCountEle+1].content}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-biography__biography__career"><a href="career.html">CAREER</a></div>
    </div>
  </Layout>
</template>

<script>
import biography from '~/data/biography';

export default {
  name: 'ProfileBiography',
  data: function () {
    return {
      biography: biography,
    };
  },
  computed: {
    biographyRowUnitCount: function () {
      let biographyRowUnitCount = [];
      for (let i = 0; i < biography.length; i++) {
        if ((i % 2) === 0) {
          biographyRowUnitCount.push(i);
        }
      }
      console.log(biographyRowUnitCount);
      return biographyRowUnitCount;
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-biography {
  &__profile {
    margin-top: 30px;
    &__title {
      border-bottom: thin solid;
      font-size: 1.7rem;
      line-height: 1.1;
    }
    &__content {
      margin-top: 15px;
      @media (min-width: 768px) {
        display: flex;
      }
      &__photo {
        width: 150px;
        height: 150px;
        img {
          width: 100%;
        }
      }
      &__txt {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 150px;
        padding: 15px 0 7px 0;
        width: 130px;
        @media (min-width: 768px) {
          padding: 15px 0 7px 2%;
        }
        &__other {
          padding-top: 17px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          &__ele {
            display: flex;
            justify-content: space-between;
            dt {
              &:after {
                content: ':';
              }
            }
          }
        }
      }
    }
  }
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
    &__career {
      margin-top: 20px;
      text-align: right;
    }
  }
}
</style>
