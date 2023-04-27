import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {enabled: boolean}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'developer-tools-tablet',
    configKey: 'developerToolsTablet'
  },
  // Default configuration options of the Nuxt module
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)
    if(options.enabled === true) {
      addComponent({
        name: 'TabletDevToolsMainComponent', // name of the component to be used in vue templates
        filePath: resolver.resolve('runtime/components/tablet-dev-tools-main.vue')
      })
    }
    
  }
})
