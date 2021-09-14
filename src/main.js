import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入阿里字体图标
import './assets/fonts/iconfont.css'
// 导入表格树形商品的分类
import TreeTable from 'vue-table-with-tree-grid'
// 导入moment
import Moment from 'moment'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本对应的样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

// 导入axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// axios请求拦截
axios.interceptors.request.use(config => {
  // 为请求对象（header）添加Token验证的Authorization
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)
// 注册富文本编辑器组件
Vue.use(VueQuillEditor)

Vue.filter('fmtDate', function(value) {
  return Moment(value).format('YYYY-MM-DD HH:mm:ss')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
