import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'ch',
  "ch'",
  'd',
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
  't',
  "t'",
  "tl'",
  'ts',
  "ts'",
  'u',
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
