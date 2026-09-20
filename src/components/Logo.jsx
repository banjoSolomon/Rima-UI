import rimaLogo from '../assets/rima-logo.jpeg'

export default function Logo({ size = 56, className = '' }) {
  return (
    <img
      src={rimaLogo}
      alt="Rima MFB Logo"
      width={size}
      height={size}
      className={`object-contain rounded-lg ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
