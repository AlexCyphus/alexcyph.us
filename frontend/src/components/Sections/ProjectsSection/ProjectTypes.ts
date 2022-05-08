export type ProjectTagType = 'Engineering' | 'Product' | 'Leadership'

export type ProjectType = {
  title: string
    tags: ProjectTagType[]
    description: string
    image: string
    url: string
    years: string
}
