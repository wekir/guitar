// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import App from './App.vue'
import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import '@varlet/ui/es/style.js'
import router from './route/index'
import less from 'less'
// import md5 from 'js-md5'
// import musicApi from '@suen/music-api'
import { AppBar,Sticky,Swipe, SwipeItem,Popup,Dialog  } from '@varlet/ui'

createApp(App).use(Varlet).use(router).use(less).use(AppBar).use(Sticky).use(Swipe).use(SwipeItem).use(Popup).use(Dialog).mount('#app')
