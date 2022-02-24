import { CONFIG } from './config'

export const WORDS = [
  'yewal',
  'i:west',
  'yiyeq',
  "q'owet",
  'pumi:l',
  'spa:th',
  'siya:m',
  'yeqwil',
  "qwe'op",
  'hilekw',
  "q'oyi:ts",
  'syo:ys',
  'plist',
  "kw'i:tsel",
  'tetha',
  "lets'axw",
  "t'ilem",
  'kechel',
  'helem',
  'letam',
  "liqw'em",
  'kwosel',
  'aletse',
  "ts'q'eyx̲",
  'schi:ya',
  'isa:le',
  "ts'its'etl'",
  'ho:kwex',
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
  'qo:qet',
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
