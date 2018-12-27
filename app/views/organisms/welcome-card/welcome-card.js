;(async () => {
  if (document.querySelector('.card--welcome')) {
    await import('./_welcome-card')
    console.log('imported')
  }
})()
