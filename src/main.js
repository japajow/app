import { createApp } from 'vue'
import App from '@/App.vue';

import '@/assets/css/tailwind.css'
import router from '@/router'
import store from '@/store'
import '@/plugins/axios'

createApp(App).use(store).use(router).mount('#app')
