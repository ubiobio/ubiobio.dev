import Link from 'next/link';
import github from '@/assets/img/github.png';
import inst from '@/assets/img/inst.png';
import discord from '@/assets/img/discord.png';
import TypingAnimation from '@/components/TypingAnimation';
import Logo from '@/components/Logo';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex flex-col justify-evenly items-center max-w-xl md:flex-row">
      <Logo />
      <section>
        <div className="min-w-[390px] min-h-[320px]">
          <h1 className=" text-primary-white font-semibold text-8xl text-center md:text-left m-3">
            <TypingAnimation text="Open Source UBB" delay={100} />
          </h1>
        </div>
        <p className="text-2xl text-primary-white text-center md:text-left mx-5">
          La comunidad de desarrollo de software colaborativo formada por
          estudiantes de la Universidad del Bío Bío
        </p>
        <section className="flex justify-around m-5 items-center">
          <Link
            className="hover:scale-110 transition-all duration-200 ease-in-out "
            href="https://www.github.com/ubiobio"
            target="_blank"
            title="Visita nuestro github @ubiobio"
          >
            <Image
              className="w-[50px] h-[50px]"
              src={github}
              width={50}
              height={50}
              alt="Logo GitHub"
            />
          </Link>
          <Link
            className="hover:scale-110 transition-all duration-200 ease-in-out"
            href="https://discord.gg/CWnZg4VphC"
            target="_blank"
            title="Únete a nuestro servidor de Discord"
          >
            <Image
              className="w-[60px] h-[50px]"
              src={discord}
              width={60}
              height={50}
              alt="Logo Discord"
            />
          </Link>
          <Link
            className="hover:scale-110 transition-all duration-200 ease-in-out"
            href="https://www.instagram.com/opensourceubb/"
            target="_blank"
            title="Visita nuestro instagram @opensourceubb"
          >
            <Image
              className="w-[50px] h-[50px]"
              src={inst}
              width={50}
              height={50}
              alt="Logo Instagram"
            />
          </Link>
        </section>
      </section>
    </header>
  );
};

export default Header;
