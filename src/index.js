import { heroMatchedRanked } from './js/heroMatchedRanked.js'
import { heroMessageResult } from './js/heroMessageResult.js'

const form = document.querySelector('form')
export const heroName = document.getElementById('heroName')
export const heroLevel = document.getElementById('heroLevel')

form.onsubmit = event => {
  event.preventDefault()

  const name = heroName.value
  const level = parseInt(heroLevel.value)
  const result = heroMatchedRanked(level)

  heroMessageResult.open()
  heroMessageResult.message.innerText = `O Herói ${name} está no Nível ${result}`
}
