<template>
  <header>
    <div class="global-header__title">
      <h1 class="global-header__title__main">
        <a class="global-header__title__main__link" href="index.html">
          <img src="../assets/tomokazu uchiyama.png" alt="tomokazu uchiyama"/>
        </a>
      </h1>
      <h2 class="global-header__title__sub">
        <a href="/top">◆TOP</a>
      </h2>
    </div>
    <nav class="global-header__nav">
      <ul class="global-header__nav__list">
        <li class="global-header__nav__list__ele"><a href="info.html">INFO</a></li>
        <li class="global-header__nav__list__ele"><a href="music/index.html">MUSIC</a></li>
        <li class="global-header__nav__list__ele"><a href="profileBiography.html">PROFILE &amp; BIOGRAPHY</a></li>
        <li class="global-header__nav__list__ele global-header__nav__list__ele--end"><a
                href="lyrics/index.html">LYRICS</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "GlobalHeader"
};
</script>


<style lang="scss" scoped>
$baseColor: #444444;
$keyColor: #4488ff;
.global-header {
  &__title {
    &__main {
      margin: 0 auto;
      width: 90%;
      @media (min-width: 768px) {
        margin: 0;
        width: 50%;
      }
      &__link {
        text-decoration: none;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
    }
    &__sub {
      font-size: 1.1rem;
      margin-top: 0.4rem;
      text-align: right;
      @media (min-width: 768px) {
        text-align: left;
      }
      a {
        &:link, &:visited, &:hover, &:active {
          color: $keyColor;
        }
        text-decoration: none;
      }
    }
  }
  &__nav {
    margin-bottom: 2.5em;
    &__list {
      margin-top: 1rem;
      @media (min-width: 768px) {
        display: flex;
      }
      &__ele {
        border-bottom: medium solid rgba(120, 100, 60, 1.00);
        border-left: thin solid rgba(120, 100, 60, 1.00);
        display: flex;
        flex-basis: calc(100% / 4);
        font-size: 1.1rem;
        line-height: 1.5;
        list-style-type: none;
        @media (min-width: 768px) {
          margin-left: 1%;
        }
        a {
          align-items: center;
          display: flex;
          flex-grow: 1;
          justify-content: center;
          text-align: center;
          text-decoration: none;
          &:link, &:visited, &:hover, &:active {
            color: $baseColor;
          }
        }
      }
    }
  }
}
</style>
