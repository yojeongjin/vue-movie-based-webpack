import { createApp } from 'vue'
import App from './App'
import store from './store'
import router from './routes'
import loadImage from './plugins/loadImage'

createApp(App)
.use(store)
.use(router)
.use(loadImage)
.mount('#app')