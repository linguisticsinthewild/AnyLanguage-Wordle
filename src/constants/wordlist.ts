import { CONFIG } from './config'

export const WORDS = [


"lekw'ot",
"t'et'a:t",
"lets'axw",
"qelem",
"ch'ayxwt",
"kw'itsel",
"eltha",
"chalexw",
"kw'oyekw",
"t'i:lem",
"q'owet",
"thqa:t",
"kechel",
"kw'esam",
"kw'o:lexw",
"helem",
"qw'eqw'el",
"eyaqt",
"ho:qwet",
"memo:qw",
"kekwa:y",
"sch'akwx",
"t'o:mel",
"letam",
"lets'es",
"kw'ikw'exw",
"tu:xwes",
"wayel",
"stu:xws",
"kw'i:les",
"kw'ilas",
"kwokwel",
"liqw'em",
"lhq'a:t",
"kw'okw'es",
"tl'ep",
"li:leq",
"so:les",
"eyaqt",
"kwosel",
"altha",
"aletse",
"heyat",
"qiqew",
"hoqwet",
"ts'q'eyx̲",
"mi:meqw",
"skw'a:lx̲",
"pesk'a",
"pepo:t"
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
