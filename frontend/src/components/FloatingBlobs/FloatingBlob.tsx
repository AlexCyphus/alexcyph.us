import { ReactComponent as BlobSVG } from './blob.svg'

export interface IFloatingBlob {
  color: 'red' | 'green' | 'blue'
  className?: string
}

const FloatingBlob: React.FC<IFloatingBlob> = ({ color, className }) => {
  const colorToClass = {
    red: 'text-red-website-dark',
    blue: 'text-blue-website-dark',
    green: 'text-green-600',
  }

  return (
    <div className={className}>
      <BlobSVG className={`animate-spin-slow animate ${colorToClass[color]} max-w-full max-h-full`} />
    </div>
  )
}
export default FloatingBlob
