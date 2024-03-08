function getConditionalClasses (criterias, styleKey, value) {
  const aggregatedClasses = []
  const _criterias = Object.entries(criterias)
  const itFulfillsCriterias = _criterias.filter(
    ([_, criteria]) => typeof criteria === 'string' && criteria === value
  )
  if (itFulfillsCriterias[0]) {
    aggregatedClasses.push([crypto.randomUUID(), styleKey])
  }
  return aggregatedClasses.flat()
}

export default getConditionalClasses
