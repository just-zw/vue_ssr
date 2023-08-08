import App from './App.vue'
import { createSSRApp } from 'vue'
import{renderToString} from 'vue/server-renderer'

console.log(App,'zwApp');


export async function render(url, manifest) {
    console.log(55555);
    // const { app, router, pinia } = createApp()
    console.log(url,'zwurl');
    // router.push(url)
    // await router.isReady()
  
    const ctx = {}

    const html = await renderToString(createSSRApp(App), ctx)
    console.log(html,'zwhtml');
    return html
  }