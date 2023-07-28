import Image from 'next/image';
import logo from '@/assets/img/logo.png';

const Logo = () => {
  return (
    <Image
      priority
      className="w-auto h-auto"
      src={logo}
      width={500}
      height={500}
      alt="Logo Open Source UBB"
    />
  );
};

export default Logo;
