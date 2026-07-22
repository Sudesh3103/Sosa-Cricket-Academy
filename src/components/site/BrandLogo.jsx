import { Link } from 'react-router-dom'

const BrandLogo = ({ compact = false, className = '' }) => {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <img src="/favicon.svg" alt="SOSA Cricket Academy" className={compact ? 'h-10 w-auto' : 'h-12 w-auto'} />
      <div className="leading-none">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-white sm:text-sm">SOSA</p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ffca28] sm:text-xs">Cricket Academy</p>
      </div>
    </Link>
  )
}

export default BrandLogo
