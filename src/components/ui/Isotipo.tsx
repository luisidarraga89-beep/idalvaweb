'use client'
import { cn } from '@/lib/utils'

interface IsotipoProps {
  size?: number; animated?: boolean; onDark?: boolean; className?: string; hero?: boolean
}

export function Isotipo({ size = 48, animated = true, onDark = true, className, hero = false }: IsotipoProps) {
  const apex  = '#C8F04E'
  const edges = onDark ? 'rgba(245,244,240,0.28)' : 'rgba(10,10,11,0.28)'
  const baseD = onDark ? 'rgba(245,244,240,0.14)' : 'rgba(10,10,11,0.14)'
  const inner = onDark ? 'rgba(200,240,78,0.52)'  : 'rgba(10,10,11,0.50)'
  const inner2= onDark ? 'rgba(200,240,78,0.28)'  : 'rgba(10,10,11,0.28)'
  const nodes = onDark ? 'rgba(245,244,240,0.55)' : 'rgba(10,10,11,0.45)'
  const midC  = onDark ? 'rgba(200,240,78,0.70)'  : 'rgba(10,10,11,0.62)'
  const sw    = Math.max(0.6, size * 0.022)

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={cn('select-none', className)} aria-label="idalva — Nodo Estructural" role="img">
      <line x1="50" y1="12" x2="10" y2="82" stroke={edges} strokeWidth={sw} strokeLinecap="round"/>
      <line x1="50" y1="12" x2="90" y2="82" stroke={edges} strokeWidth={sw} strokeLinecap="round"/>
      <line x1="10" y1="82" x2="90" y2="82" stroke={baseD} strokeWidth={sw*0.55} strokeLinecap="round" strokeDasharray="6 4"/>
      <line x1="50" y1="12" x2="50" y2="50" stroke={inner}  strokeWidth={sw*0.7}  strokeLinecap="round"/>
      <line x1="50" y1="50" x2="10" y2="82" stroke={inner2} strokeWidth={sw*0.55} strokeLinecap="round"/>
      <line x1="50" y1="50" x2="90" y2="82" stroke={inner2} strokeWidth={sw*0.55} strokeLinecap="round"/>
      <circle cx="50" cy="12" r="5.5" fill={apex} className={animated ? 'animate-pulse-volt' : ''}/>
      <circle cx="10" cy="82" r="3.5" fill={nodes}/>
      <circle cx="90" cy="82" r="3.5" fill={nodes}/>
      <circle cx="50" cy="50" r="2.2" fill={midC}  className={animated ? 'animate-pulse-volt' : ''} style={{ animationDelay: '1.2s' }}/>
      {hero && <circle cx="50" cy="12" r="9" fill="none" stroke={apex} strokeWidth="1" opacity="0.2" className="animate-pulse-volt"/>}
    </svg>
  )
}

export function Wordmark({ size = 'md', onDark = true, className }: { size?: 'sm'|'md'|'lg'|'xl'; onDark?: boolean; className?: string }) {
  const sizes = { sm: 'text-lg', md: 'text-2xl', lg: 'text-3xl', xl: 'text-4xl' }
  return (
    <span className={cn('font-bold tracking-tight leading-none', sizes[size], className)} aria-label="idalva">
      <span className={onDark ? 'text-marfil' : 'text-grafito'}>idal</span>
      <span className="text-volt-dim">va</span>
    </span>
  )
}

export function Lockup({ isoSize = 36, wmSize = 'md' as 'sm'|'md'|'lg'|'xl', onDark = true, showTag = false, animated = true, className }: {
  isoSize?: number; wmSize?: 'sm'|'md'|'lg'|'xl'; onDark?: boolean; showTag?: boolean; animated?: boolean; className?: string
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Isotipo size={isoSize} animated={animated} onDark={onDark} />
      <div className="w-px self-stretch" style={{ background: onDark ? 'rgba(200,240,78,0.28)' : 'rgba(10,10,11,0.18)' }} aria-hidden />
      <div className="flex flex-col gap-0.5">
        <Wordmark size={wmSize} onDark={onDark} />
        {showTag && <span className={cn('text-[10px] font-light tracking-widest uppercase', onDark ? 'text-marfil/38' : 'text-grafito/38')}>Escalar sin caos. Operar sin límites.</span>}
      </div>
    </div>
  )
}
