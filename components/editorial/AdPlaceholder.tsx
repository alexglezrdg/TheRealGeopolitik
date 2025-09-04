export function AdPlaceholder({ size }: { size: '300x600' | '300x250' }) {
  const [w, h] = size.split('x').map(Number)
  return (
    <div className="border rule rounded-sm grid place-items-center text-xs text-muted-foreground bg-white" style={{ width: w, height: h }} aria-label={`Ad slot ${size}`}>
      Ad {size}
    </div>
  )
}
