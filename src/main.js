// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false //关闭生产模式下给出的提示

Vue.use(iView)

router.beforeEach((to, from, next) => {
	iView.LoadingBar.start(); //加载进度条开始
	next();
})

router.afterEach(route => {
	iView.LoadingBar.finish();//加载进度条完成
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  template: '<App/>',
  // components: { App } //vue1.0的写法
  render: h => h(App) //vue2.0的写法, h 的实参是 createElement 函数
}).$mount('#app')


