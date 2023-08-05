export const getMostVisibleEntry = (
  entries: IntersectionObserverEntry[]
): IntersectionObserverEntry => {
  return entries?.reduce(
    (
      mostHigherRatioEntry: IntersectionObserverEntry,
      entry: IntersectionObserverEntry
    ) => {
      const entryIntersectionRatio = entry?.intersectionRatio
      const higherIntersectionRatio =
        mostHigherRatioEntry?.intersectionRatio ?? 0

      if (entryIntersectionRatio >= higherIntersectionRatio) {
        return (mostHigherRatioEntry = entry)
      }

      return mostHigherRatioEntry
    },
    {} as IntersectionObserverEntry
  )
}
