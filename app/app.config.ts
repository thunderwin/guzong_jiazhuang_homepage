export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      neutral: 'slate'
    },
    navigationMenu: {
      slots: {
        childWrapper: 'bg-slate-950/95 backdrop-blur-lg rounded-lg shadow-lg border border-amber-500/20',
        childList: 'bg-transparent'
      }
    }
  }
})
