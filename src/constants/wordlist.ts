import { CONFIG } from './config'

export const WORDS = [
  'yewal',
  'iwest',
  'yiyeq',
  "q'owet",
  'pumil',
  'siyam',
  'yeqwil',
  "qwe'op",
  'hilekw',
  "q'oyits",
  'syoys',
  'plist',
  "kw'itsel",
  "lets'axw",
  "t'ilem",
  'kechel',
  'helem',
  'letam',
  "liqw'em",
  'kwosel',
  'aletse',
  "ts'q'eyx̲",
  'schiya',
  'isale',
  "ts'its'etl'",
  'hokwex',
  'chalex',
  "s'atl'q",
  "sxelts'",
  'kwelexw',
  "lep'ex",
  'lalem',
  "kw'okw'iy",
  'lekli',
  "ikw'elo",
  'lepot',
  'qelat',
  'qoqet',
  'liyem',
  "kw'atset",
  'tewat',
  'tselil',
  'kwelex',
  "tl'elexw",
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
