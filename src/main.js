import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router);
app.mount('#app')

/*
build steps:
app.use(router)
使用了router后则整个框架都将从router入口处理
1. npm install vue-router
   router
2. web ui
3. css

npm run serve ssl error:
SET NODE_OPTIONS=--openssl-legacy-provider
*/