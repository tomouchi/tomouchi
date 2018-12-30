import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/styles.scss';
import myRouter from "~/router";

export default function (Vue, {head, router}) {
  Vue.component('Layout', DefaultLayout);
  router.addRoutes(myRouter);
  head.meta.push({
    name: 'viewport',
    content: "width=device-width,initial-scale=1.0"
  });
}
