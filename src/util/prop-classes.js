function getPropClasses (criterias, styleKey, val) {
  const aggregatedClasses = []
  const _criterias = Object.entries(criterias)
  const itFulfillsCriterias = _criterias.filter(([key]) => key === styleKey)

  if (itFulfillsCriterias[0]) {
    const props = Object.values(criterias.prop)
    props.map((prop) => {
      const match = val.filter((v) => criterias.prop[v] === prop)
      if (match[0]) return aggregatedClasses.push([crypto.randomUUID(), prop])
      return -1
    })
  }

  return aggregatedClasses
}

export default getPropClasses
