import { defineClientAppEnhance } from '@vuepress/client'
import { h } from 'vue'

import './styles/index.scss'

export default defineClientAppEnhance(({ app }) => {
  app.component('NavbarSearch', () => {
    const SearchComponent =
      app.component('Docsearch') || app.component('SearchBox')
    if (SearchComponent) {
      return h(SearchComponent)
    }
    return null
  })
  app.component('Toc', () => {
    const Toc = app.component('TocCom')
    if (Toc) {
      return h(Toc)
    }
    return null
  })
})
