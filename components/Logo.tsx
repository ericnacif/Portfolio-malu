import Image from 'next/image';
import Link from 'next/link';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`relative block ${className}`}>
      <Image 
        src="/LogoMalu.png" 
        alt="Malu Milkovich Arquitetura" 
        width={200} 
        height={80} 
        className="w-auto h-full object-contain"
        priority
      />
    </Link>
  );
};