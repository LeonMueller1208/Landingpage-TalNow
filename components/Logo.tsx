type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'gradient' | 'white';
};

export default function Logo({ size = 'md', variant = 'gradient' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-3xl',
    md: 'text-4xl',
    lg: 'text-5xl',
  };

  if (variant === 'gradient') {
    return (
      <span className={`inline-block font-black tracking-tight ${sizeClasses[size]} bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent select-none`}>
        TalNow
      </span>
    );
  }

  const variantClasses = {
    default: 'text-gray-900',
    white: 'text-white',
  };

  return (
    <div className={`font-black tracking-tight ${sizeClasses[size]} ${variantClasses[variant as 'default' | 'white']} select-none`}>
      TalNow
    </div>
  );
}

