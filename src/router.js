export default [{
  name: "top",
  path: "/",
  component: () => import(/* webpackChunkName: "component--top" */ "~/pages/Index.vue")
}];
