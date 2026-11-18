import { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface MediaImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  priority?: boolean;
}

export function MediaImage({
  src,
  alt,
  title,
  className = '',
  priority = false,
}: MediaImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#171510] via-[#101012] to-[#08080A] p-6 text-center border border-[#D4AF37]/20 ${className}`}
        role="img"
        aria-label={alt}
      >
        <UtensilsCrossed className="h-8 w-8 text-[#D4AF37] mb-3 opacity-80" aria-hidden="true" />
        <span className="font-display text-sm font-semibold text-[#F5F2EB]">
          {title || 'Hangs Burguer · Belém - PA'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
}
