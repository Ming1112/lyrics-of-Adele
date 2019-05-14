// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
let lastClickElement

const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////
function displaySong() {
  let htmlContent = ``
  for (let i = 0; i < album.tracks.length; i++) {
    htmlContent += `<a class="nav-item nav-link" href="#">${album.tracks[i]}</a>`
  }
  songList.innerHTML = htmlContent
}

songList.addEventListener('click', function (event) {
  if (lastClickElement !== undefined) {
    lastClickElement.classList.remove('active')
  }
  if (event.target.matches('.nav-item')) {
    event.target.classList.add('active')
    axios.get(`${BASE_URL}adele/${event.target.innerText}`).then(function (response) {
      let htmlContent = ``
      htmlContent += `<h2>${event.target.innerText}</h2>
                      <pre>${response.data.lyrics}</pre> 
                    `
      lyricsPanel.innerHTML = htmlContent
    }).catch(function (error) {
      console.log(error)
    })
    lastClickElement = event.target
  }
})

displaySong()