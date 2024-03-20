function propsClx (c, k, val) {
  const aggClx = []
  const _c = Object.entries(c)
  const ok = _c.filter(([key]) => key === k)

  if (ok[0]) {
    const ps = Object.values(c.props)
    ps.map((p) => {
      const match = val.filter((v) => c.props[v] === p)
      if (match[0]) return aggClx.push([p + 'key', p])
      return -1
    })
  }

  return aggClx
}

module.exports = propsClx
