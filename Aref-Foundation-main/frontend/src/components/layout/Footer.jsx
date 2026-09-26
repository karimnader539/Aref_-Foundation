import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full border-t-[0.5px] border-[#C5A059]/20 dark:border-brand-gold/30 bg-white dark:bg-zinc-950 transition-colors duration-300 mt-auto">
      <div className="flex flex-col items-center pt-12 sm:pt-20 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
        <Link to="/" className="mb-6 md:mb-8 hover:opacity-70 transition-opacity duration-500 flex justify-center">
          <img alt="A.F Logo" className="h-20 sm:h-28 md:h-40 w-auto object-contain opacity-80 drop-shadow-md" src="/logo.png" />
        </Link>
        <p className="font-serif text-[10px] tracking-[0.15em] uppercase text-zinc-600 dark:text-zinc-400 text-center flex items-center justify-center gap-2">
          © 2026 AREF FOUNDATION. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
