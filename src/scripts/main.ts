import '../styles/main.scss'
import { wordsArr } from './data.json'

const wordEl: HTMLElement = document.querySelector('#word')!
const music: HTMLAudioElement = document.querySelector('#music')!

function bump(e: HTMLElement) {
  setTimeout(() => e.classList.add('pop'), 0)
  setTimeout(() => e.classList.remove('pop'), 200)
}

class Word {
  public word: string = '؟؟؟'
  public time: number = 0
  public isSpecial: boolean = false
  
  constructor(word: string = '؟؟؟', time: number = 0) {
    this.word = word
    this.time = time
  }
}

function bumpWord(word: Word) {
  if (word.isSpecial) wordEl.classList.add('special') 
  else wordEl.classList.remove('special')
  wordEl.innerText = word.word
  bump(wordEl)
}

let times = wordsArr.map(word => word.time - 0.2)
console.log(times)
let i = 0

function start() {
  music.addEventListener('timeupdate', handleMusicPlay)
  music.play()
  document.removeEventListener('click', start)  
}

document.addEventListener('click', start)

function handleMusicPlay() {
  // music.currentTime = music.currentTime
  if (Number(music.currentTime.toFixed(1)) >= times[i]) {
    bumpWord(wordsArr[i])
    i++
  }
}