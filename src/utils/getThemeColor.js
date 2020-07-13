const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  // return theme === 'light' ? "#fff" : "16202c"
  if (theme === 'light') return '#fff'
  if (theme === 'dark') return '#16202c'
}

export default getThemeColor