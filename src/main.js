import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/styles.scss';
import myRouter from '~/router';


export default function (Vue, {appOptions, head, router}) {
  Vue.component('Layout', DefaultLayout);
  router.addRoutes(myRouter);
  head.htmlAttrs = {lang: 'ja'};
  head.link.push(
    {rel: 'stylesheet', href: '/styles/flexslider.css'},
  );
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width,initial-scale=1.0',
  });
  head.script.push(
    {src: 'https://code.jquery.com/jquery-3.2.1.min.js'},
    {src: 'https://cdnjs.cloudflare.com/ajax/libs/flexslider/2.7.1/jquery.flexslider-min.js'},
  );
}
