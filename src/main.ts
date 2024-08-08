import { createApp } from 'vue'
import 'amfe-flexible'
import '@/reset.scss'
import App from './App.vue'
import router from '@/router/index'
import { Button,Tabbar, TabbarItem } from 'vant';
import i18n from '@/locale/i18n'
// 2. 引入组件样式
import 'vant/lib/index.css';

// 使用插件

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(Button).use(Tabbar).use(TabbarItem);
app.mount('#app')
