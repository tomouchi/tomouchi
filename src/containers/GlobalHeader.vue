<template>
  <header>
    <div class="global-header__title">
      <h1 class="global-header__title__main">
        <g-link class="global-header__title__main__link" :to="{ name: 'top' }">
          <img src="../assets/tomokazu uchiyama.png" alt="tomokazu uchiyama"/>
        </g-link>
      </h1>
      <h2 class="global-header__title__sub">
        <g-link class="nav__link" :to="{ name: $route.name }">◆{{$root.$data.pageName}}</g-link>
      </h2>
    </div>
    <nav class="global-header__nav">
      <ul class="global-header__nav__list">
        <li class="global-header__nav__list__ele">
          <g-link class="nav__link" :to="{ name: 'info' }">INFO</g-link>
        </li>
        <li class="global-header__nav__list__ele">
          <g-link class="nav__link" :to="{ name: 'music' }">MUSIC</g-link>
        </li>
        <li class="global-header__nav__list__ele">
          <g-link class="nav__link" :to="{ name: 'biography' }">PROFILE &amp; BIOGRAPHY</g-link>
        </li>
        <li class="global-header__nav__list__ele global-header__nav__list__ele--end">
          <g-link class="nav__link" :to="{ name: 'lyrics' }">LYRICS</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader',
};
</script>

<style lang="scss" scoped>
$baseColor: #444444;
$keyColor: #6da3fc;
.global-header {
  &__title {
    display: flex;
    &__main {
      margin: 0 auto;
      width: 90%;
      @media (min-width: 768px) {
        margin: 0;
        width: auto;
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
      align-self: flex-end;
      font-size: 1.1rem;
      margin-top: 0.4rem;
      margin-left: auto;
      text-align: right;
      @media (min-width: 768px) {
        font-size: 1.2rem;
        margin-top: 1rem;
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
    margin-top: 25px;
    &__list {
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
          &:not(:first-child) {
            margin-left: 1%;
          }
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
