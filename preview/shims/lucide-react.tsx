// Bản thay thế tối giản của lucide-react cho bản xem trước (đường vẽ lấy từ Lucide).
const icon = (paths: string[]) => ({ className = '', ...rest }: { className?: string; [k: string]: any }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}>
    {paths.map((d, i) => <path key={i} d={d} />)}
  </svg>
)
export const ArrowUpRight = icon(['M7 7h10v10', 'M7 17 17 7'])
export const ArrowRight = icon(['M5 12h14', 'm12 5 7 7-7 7'])
