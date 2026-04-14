export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral'
    },
    navigationMenu: {
      slots: {
        childWrapper: 'bg-white/50 backdrop-blur-lg rounded-lg shadow-lg',
        childList: 'bg-transparent'
      }
    }
  }
})
