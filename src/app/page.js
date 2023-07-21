import Image from 'next/image';
import Link from 'next/link';
import github from '@/assets/img/github.png';
import inst from '@/assets/img/inst.png';
import discord from '@/assets/img/discord.png';
import TypingAnimation from '@/components/TypingAnimation';

const Header = () => {
  return (
    <header className="flex flex-col justify-evenly items-center max-w-xl md:flex-row">
      <Logo />
      <section>
        <div className="min-w-[370px] min-h-[310px]">
          <h1 className=" text-primary-white font-semibold text-8xl text-center md:text-left m-5">
            <TypingAnimation text="Open Source UBB" delay={100} />
          </h1>
        </div>
        <p className="text-xl text-primary-white text-center md:text-left mx-5">
          La comunidad de desarrollo de software colaborativo formada por
          estudiantes de la Universidad del Bío Bío
        </p>
        <section className="flex justify-around m-5">
          <Link href="https://www.github.com/ubiobio" target="_blank">
            <Image src={github} width={50} height={50} alt="Logo GitHub" />
          </Link>
          <Link href="https://discord.gg/CWnZg4VphC" target="_blank">
            <Image src={discord} width={60} height={50} alt="Logo Discord" />
          </Link>
          <Link href="https://www.instagram.com/opensourceubb/" target="_blank">
            <Image src={inst} width={50} height={50} alt="Logo Instagram" />
          </Link>
        </section>
      </section>
    </header>
  );
};

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      width={500}
      height={500}
      alt="Logo Open Source UBB"
    />
  );
};

export default function Home() {
  return (
    <div className="bg-primary-black p-10 flex flex-col justify-center items-center min-h-screen">
      <Header />
    </div>
  );
}
