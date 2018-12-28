<template>
  <Layout>
    <main>
      <div class="flexslider">
        <ul class="slides">
          <li><a href="music/index.html#ayumumichi"><img src="images/ayumumichi.jpg"/></a></li>
          <li><a href="music/index.html#wisteria"><img src="images/wisteria.jpg"/></a></li>
        </ul>
      </div>
      <div class="info">
        <h3 class="title--third">Info</h3>
        <div class="info__row clearfix">
          <div class="info__row__ele">
            <h4 id = "content">Content</h4>
            <dl>
              <dt>2017年01月20日</dt>
              <dd>ホームページ作成しました。</dd>
            </dl>
          </div>
          <div class="info__row__ele">
            <h4 id = "technic">Technic</h4>
            <dl>
              <dt>2017年06月02日</dt>
              <dd>ajax導入しました。</dd>
            </dl>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <p> &copy;2016 tomokazu uchiyama</p>
    </footer>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '内山友和のホームページ|TopPage',
    link: [
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.1/flexslider.css'},
    ]
  }
};
</script>

<style scoped>
.title--first {
  margin: auto;
  width: 90%;
}
.title--first>a>img {
  color: #4488ff;
  width: 100%;
  line-height: 0.5;
}
.title--first > a:link {
  color: #4488ff;
}
.title--first > a:visited {
  color: #4488ff;
}
.title--first > a:hover {
  color: #4488ff;
}
.title--first > a:active {
  color: #4488ff;
}
.title--first > a {
  text-decoration: none
}
.title--second {
  color: #99BBFF;
  float: right;
  font-size: calc(100vw / 25);
}
@media (min-width:768px) {
  .title--first {
    float: left;
    margin: 0;
    width: auto;
  }
  .title--second {
    font-size: 1.2em;
    margin-top: 1em;
  }
}
.title--third {
  border-bottom: thin solid;
  font-size: 1.7em;
  line-height: 1.1;
  margin: 1.5em auto 0.5em;
}
</style>
