import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/styles.scss'

export default function (Vue, {head}) {
  Vue.component('Layout', DefaultLayout);
  head.meta.push({
    name: 'viewport',
    content: "width=device-width,initial-scale=1.0"
  });
}
