<template>
  <div class="profile">
    <h3 class="profile__title">Profile</h3>
    <div class="profile__content">
      <div class="profile__content__photo">
        <img src="../assets/profile.jpg" width="500" />
      </div>
      <div class="profile__content__txt">
        <p class="profile__content__txt__name"
          >内山 友和<a
            href="https://github.com/tomouchi"
            target="_blank"
            title="内山友和のGitHubページを新しいウィンドウで開く"
          >
            <img
              src="/images/GitHub-Mark-32px.png"
              alt="内山友和のGitHubページを新しいウィンドウで開く"
            />
          </a>
        </p>
        <dl class="profile__content__txt__other">
          <div class="profile__content__txt__other__ele">
            <dt>出身地</dt>
            <dd>新潟県</dd>
          </div>
          <div class="profile__content__txt__other__ele">
            <dt>身長</dt>
            <dd>162cm</dd>
          </div>
          <div class="profile__content__txt__other__ele">
            <dt>体重</dt>
            <dd>52kg</dd>
          </div>
          <div class="profile__content__txt__other__ele">
            <dt>血液型</dt>
            <dd>A型</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
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
        padding: 15px 0 7px 15px;
      }
      &__name {
        img {
          padding-left: 10px;
          vertical-align: -10px;
        }
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
              content: ":";
            }
          }
        }
      }
    }
  }
}
</style>
