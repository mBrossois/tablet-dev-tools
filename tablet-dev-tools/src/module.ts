import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'dev-tools-tablet',
    configKey: 'devToolsTablet'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    if(process.env.NODE_ENV === 'development') {
      addComponent({
        name: 'TabletDevToolsMainComponent', // name of the component to be used in vue templates
        filePath: resolver.resolve('runtime/components/tablet-dev-tools-main.vue')
      })
    }
    
  }
})
