import axios from 'coffeekraken-ww-axios'
;(() => {
  axios.get('https://randomuser.me/api/').then(response => {
    console.log('response', response)
  })
})()
