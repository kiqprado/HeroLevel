import { heroName, heroLevel } from '../index.js'
import { heroRankedInfo } from './heroRankedInfo.js'

export const heroMessageResult = {
  card: document.querySelector('.heroResult'),
  message: document.querySelector('h2'),
  closeBtn: document.getElementById('closeResult'),

  open() {
    heroMessageResult.card.classList.add('open')
  },
  close() {
    heroMessageResult.card.classList.remove('open')
  }
}

heroMessageResult.closeBtn.onclick = () => {
  heroMessageResult.close()
  heroName.value = ''
  heroLevel.value = ''
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    heroMessageResult.close()
    heroName.value = ''
    heroLevel.value = ''
  }
})

function rankedInfo() {
  heroRankedInfo.open()
}

rankedLevels.addEventListener('click', rankedInfo)
