import { IKImage, IKUpload, IKContext } from "imagekitio-vue";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("IKContext", IKContext)
  nuxtApp.vueApp.component("IKImage", IKImage)
  nuxtApp.vueApp.component("IKUpload", IKUpload)
})