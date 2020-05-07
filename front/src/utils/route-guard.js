function execGuard(guards, to, from, cb) {
  if (guards.length == 0) return cb()
  let g = guards[0]
  g(from, to, res => {
    if (res) {
      cb(res)
    } else {
      execGuard(guards.slice(1), to, from, cb)
    }
  })
}

export default function (guards) {
  return function (from, to, next) {
    execGuard(guards, from, to, res => next(res))
  }
}