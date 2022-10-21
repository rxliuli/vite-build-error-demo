import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import App from './App.vue'

async function startUp() {
  createApp(App)
    .use(Antd as any)
    .use(
      createRouter({
        history: createWebHashHistory(),
        routes: [{ path: '/', component: () => import('./views/Hello.vue') }],
      }),
    )
    .mount('#app')
}

startUp()
