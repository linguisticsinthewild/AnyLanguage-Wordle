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
  'lh',
  'm',
  'o',
  'o:',
  'p',
  "p'",
  'q',
  "q'",
  'qw',
  "qw'",
  's',
  't',
  "t'",
  "tl'",
  'ts',
  "ts'",
  'u',
  'u:',
  'w',
  'x',
  'x̲',
  'xw',
  'y',
  "'",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
