import App from './App.vue'
import { createApp } from 'vue'
import{renderToString} from 'vue/server-renderer'

console.log(App,'zwApp');
// console.log(createSSRApp, '123123123123132');

createApp(App).mount('#app')
