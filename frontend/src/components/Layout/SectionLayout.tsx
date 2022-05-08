interface ISectionLayout {
  title: string
}

const SectionLayout: React.FC<ISectionLayout> = ({ title, children }) => (
  <div className="flex flex-col gap-y-16 pt-20 items-center z-20">
    <p className="text-3xl bg-black text-white py-2 px-16 rounded-lg">{title}</p>
    {children}
  </div>
)

export default SectionLayout
