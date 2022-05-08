interface IHyperlink {
  text: string
  url: string
}

const Hyperlink: React.FC<IHyperlink> = ({ text, url }) => (
  <a href={url} className="bg-gray-200 py-1 px-2 rounded-lg hover:bg-black hover:text-white">
    {text}
  </a>
)

export default Hyperlink
