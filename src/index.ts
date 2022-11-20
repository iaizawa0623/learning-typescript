console.log('Hello, TypeScript!')

interface p {
  a?: number
  b?: number
}

const f = ({ a, b }: p) => {
  console.log(a)
  console.log(b)
}

f({ a: 2, b: 3 })

const f2 = (a: number, b: number) => {
  console.log(a)
  console.log(b)
}
f2(2, 3)
