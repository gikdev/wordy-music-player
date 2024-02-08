import '../styles/builder.scss'

const $ = (e: string) => document.querySelector(e)

// @ts-ignore
const startFormEl: HTMLFormElement = $('#startForm')!
// @ts-ignore
const musicEl: HTMLAudioElement = $('#music')!
// @ts-ignore
const outputEl: HTMLTextAreaElement = $('#output')!
// @ts-ignore
const addEl: HTMLButtonElement = $('#add')!

let finalContent: Word[] = []
let timesArr: number[] = []
let wordsArr: string[] = []
let i = 0

class Word {
  private text: string = '؟؟؟'
  private time: number = 0
  
  constructor(text: string = '؟؟؟', time: number = 0) {
    this.text = text
    this.time = time
  }
}

startFormEl.addEventListener('submit', e => {
  e.preventDefault()
  const musicURL = (startFormEl[0] as HTMLInputElement).value
  const lyrics = (startFormEl[1] as HTMLInputElement).value
  wordsArr = lyrics.replace('\n', '').split('/')
  
  musicEl.src = musicURL
  musicEl.controls = true
  addEl.innerText = wordsArr[i]
  outputEl.value += `{
    "wordsArr": [`
  startFormEl.style.display = 'none'
})

addEl.addEventListener('click', e => {
  outputEl.value += `\t{ "word": "${wordsArr[i]}", "time": ${musicEl.currentTime.toFixed(1)} },\n`
  i++
  addEl.innerText = wordsArr[i]
})