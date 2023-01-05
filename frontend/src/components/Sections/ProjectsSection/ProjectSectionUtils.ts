// eslint-disable-next-line import/prefer-default-export
export const getRandomPastelClass = (activeColor: string) => {
  const pastels = ['bg-red-200', 'bg-amber-200', 'bg-orange-200', 'bg-yellow-200', 'bg-green-200', 'bg-emerald-200', 'bg-lime-200', 'bg-teal-200', 'bg-cyan-200', 'bg-blue-200', 'bg-pink-200', 'bg-indigo-200', 'bg-violet-200', 'bg-fuchsia-200', 'bg-purple-200', 'bg-sky-200']
  const newPastels = pastels.filter((pastel) => pastel !== activeColor)
  return newPastels[Math.floor(Math.random() * (newPastels.length))]
}
