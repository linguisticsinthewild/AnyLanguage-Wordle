import { CONFIG } from './config'

export const WORDS = [
  'yewal',
  'iwest', // Feb 24
  'yiyeq', // Feb 25
  "q'owet", // Feb 26
  'pumil', // Feb 27
  'siyam', // Feb 28
  'yeqwil', // March 1
  "qwe'op",
  'hilekw',
  "q'oyits",
  'syoys', // March 5
  'plist',
  "kw'itsel",
  "lets'axw",
  "t'ilem",
  'kechel', // March 10
  'helem',
  'letam',
  "liqw'em",
  'kwosel',
  'aletse', // March 15
  "ts'q'eyx̲",
  'schiya',
  'isale',
  "ts'its'etl'",
  'hokwex', // March 20
  'chalex',
  "s'atl'q",
  "sxelts'",
  'kwelexw',
  "lep'ex", // March 25
  'lalem',
  "kw'okw'iy",
  'lekli',
  "ikw'elo",
  'lepot',
  'qelat', // March 31
  'qoqet', // April 1
  'liyem',
  "kw'atset",
  'tewat',
  'tselil', // April 5
  'kwelex',
  "tl'elexw", // April 7
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
