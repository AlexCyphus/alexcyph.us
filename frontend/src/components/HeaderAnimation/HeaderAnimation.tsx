import useCycleHeaderAnimation from './hooks/useCycleHeaderAnimation'

const HeaderAnimation = () => {
  const frame = useCycleHeaderAnimation()

  return (
    <div className="w-full flex flex-col gap-y-2 items-center">
      <div className="p-5 max-w-sm h-40 flex items-center justify-center">
        <img
          alt="alex title animation"
          src={frame}
          className="w-sm"
        />
      </div>
      <p className="italic text-sm text-center">Welcome to my corner of the internet</p>
    </div>
  )
}

export default HeaderAnimation
