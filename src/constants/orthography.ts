import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  "'",
  'a',
  'ch',
  "ch'",
  'e',
  'h',
  'i',
  'k',
  "k'",
  'kw',
  "kw'",
  'l',
  'lh',
  'm',
  'o',
  'p',
  "p'",
  'q',
  "q'",
  'qw',
  "qw'",
  's',
  'sh',
  'shxw',
  't',
  "t'",
  'th',
  "th'",
  "tl'",
  'ts',
  "ts'",
  'u',
  'w',
  'x',
  'xw',
  'x̲',
  'x̲w',
  'y',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
