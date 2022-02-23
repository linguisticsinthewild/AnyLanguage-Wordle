import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'a:',
  'b',
  'ch',
  "ch'",
  'd',
  'e',
  'e:',
  'h',
  'i',
  'i:',
  'k',
  "k'",
  'kw',
  "kw'",
  'l',
  'm',
  'o',
  'o:',
  'p',
  "p'",
  's',
  't',
  "t'",
  'ts',
  "ts'",
  'u',
  'u:',
  'w',
  'x',
  'x̲'
  'xw',
  'y',
  "'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
