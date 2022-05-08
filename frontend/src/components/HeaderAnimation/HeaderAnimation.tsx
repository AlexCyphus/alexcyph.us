import useCycleHeaderAnimation from './hooks/useCycleHeaderAnimation'

const HeaderAnimation = () => {
  const frame = useCycleHeaderAnimation()

  return (
    <div className="w-full flex justify-center">
      <div className="p-5 max-w-sm h-40 flex items-center justify-center">
        <img
          alt="alex cyphus"
          src={frame}
          className="w-sm"
        />
      </div>
    </div>
  )
}

export default HeaderAnimation
