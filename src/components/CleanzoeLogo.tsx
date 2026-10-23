import React from 'react';
import { useLogo } from '../context/LogoContext';

interface CleanzoeLogoProps {
  variant?: 'color' | 'white' | 'dark';
  showTagline?: boolean;
  hideTaglineOnMobile?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  iconOnly?: boolean;
  className?: string;
  imgStyle?: React.CSSProperties;
  brandNameStyle?: React.CSSProperties;
  taglineStyle?: React.CSSProperties;
  customImageSrc?: string;
  onClick?: () => void;
}

export const CleanzoeLogo: React.FC<CleanzoeLogoProps> = ({
  variant = 'color',
  showTagline,
  hideTaglineOnMobile = true,
  size = 'md',
  iconOnly = false,
  className = '',
  imgStyle,
  brandNameStyle,
  taglineStyle,
  customImageSrc,
  onClick,
}) => {
  const { config } = useLogo();

  const isWhite = variant === 'white';
  const isDark = variant === 'dark';

  // Effective colors
  const navyColor = isWhite ? '#FFFFFF' : isDark ? '#0F172A' : (config.primaryColor || '#052652');
  const cyanColor = isWhite ? '#40C6D9' : (config.accentColor || '#0082E6');
  const brandName = config.brandName || 'Cleanzoe';
  const tagline = config.tagline || 'On nettoie, vous respirez';
  const shouldShowTagline = showTagline !== undefined ? showTagline : config.showTagline;

  const sizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const svgSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-24 h-24',
  };

  const imgSizes = {
    sm: 'h-7 max-w-[120px]',
    md: 'h-10 max-w-[160px]',
    lg: 'h-14 max-w-[220px]',
    xl: 'h-24 max-w-[320px]',
  };

  const effectiveImageUrl = customImageSrc || (config.mode === 'custom-image' ? config.customImageUrl : null);

  // If user uploaded a custom logo image or passed customImageSrc
  if (effectiveImageUrl) {
    return (
      <div
        className={`flex items-center gap-3 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
        onClick={onClick}
      >
        <img
          src={effectiveImageUrl}
          alt={brandName}
          style={imgStyle}
          className={`${imgStyle?.width ? '' : imgSizes[size]} object-contain drop-shadow-xs transition-transform duration-200 hover:scale-105`}
        />
        {!iconOnly && (
          <div className="flex flex-col">
            <span
              style={brandNameStyle}
              className={`font-heading font-extrabold tracking-tight leading-none ${
                isWhite ? 'text-white' : 'text-[#052652]'
              } ${sizeClasses[size]}`}
            >
              {brandName}
            </span>
            {shouldShowTagline && tagline && (
              <span
                style={taglineStyle}
                className={`${
                  hideTaglineOnMobile ? 'hidden sm:inline-block' : 'inline-block'
                } text-[10px] tracking-wide font-medium mt-1 leading-none ${
                  isWhite ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                {tagline}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  // Vector SVG Mode
  return (
    <div
      className={`flex items-center gap-3 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {/* Official Cleanzoe Emblem Mark (AZ + Maison + Étoile + Vague d'eau) */}
      <svg
        viewBox="0 0 1000 1000"
        className={`${svgSizes[size]} shrink-0 transition-transform duration-200 group-hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Logo ${brandName} Marrakech`}
      >
        {/* Main "C" Crescent Arc & Connected House Roof */}
        <path
          fill={navyColor}
          d="
            M 658 266
            C 580 196 470 180 368 212
            C 232 254 144 386 154 530
            C 160 616 206 694 270 732
            L 180 756
            L 300 706
            L 480 560
            L 580 642
            L 624 624
            L 480 508
            L 300 640
            C 236 590 214 500 222 432
            C 230 350 290 286 388 256
            C 472 230 562 246 618 290
            Z
          "
        />

        {/* 4-Pane Window below the roof peak */}
        <rect x="442" y="628" width="30" height="30" rx="3.5" fill={navyColor} />
        <rect x="480" y="628" width="30" height="30" rx="3.5" fill={navyColor} />
        <rect x="442" y="666" width="30" height="30" rx="3.5" fill={navyColor} />
        <rect x="480" y="666" width="30" height="30" rx="3.5" fill={navyColor} />

        {/* The Bold Dynamic "Z" */}
        <path
          fill={navyColor}
          d="
            M 568 458
            L 616 408
            L 870 408
            L 538 742
            L 806 742
            L 860 692
            L 676 692
            L 778 458
            Z
          "
        />

        {/* The 4-Point Star / Étoile de Propreté (Cyan / Accent) */}
        <path
          fill={cyanColor}
          d="
            M 434 410
            C 478 406 512 372 518 318
            C 524 372 558 406 600 410
            C 558 414 524 448 518 502
            C 512 448 478 414 434 410
            Z
          "
        />

        {/* The Fresh Water Wave / Vague d'Eau (Cyan / Accent) */}
        <path
          fill={cyanColor}
          d="
            M 198 775
            C 270 735 348 708 424 722
            C 504 736 578 800 676 800
            C 716 800 752 782 770 758
            C 746 790 690 826 620 834
            C 498 848 358 818 198 775
            Z
          "
        />
      </svg>

      {/* Brand Wordmark & Tagline */}
      {!iconOnly && (
        <div className="flex flex-col">
          <span
            style={brandNameStyle}
            className={`font-heading font-extrabold tracking-tight leading-none ${
              isWhite ? 'text-white' : 'text-[#052652]'
            } ${sizeClasses[size]}`}
          >
            {brandName}
          </span>
          {shouldShowTagline && tagline && (
            <span
              style={taglineStyle}
              className={`${
                hideTaglineOnMobile ? 'hidden sm:inline-block' : 'inline-block'
              } text-[10px] tracking-wide font-medium mt-1 leading-none ${
                isWhite ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              {tagline}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
