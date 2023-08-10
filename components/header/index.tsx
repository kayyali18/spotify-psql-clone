'use client';

import { lang as langAtom } from '@/utils/store/globals';
import { useAtom } from 'jotai';
import { useParams } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi2';
import { twMerge } from 'tailwind-merge';

import NavigationalButton from '~/ui-kit/buttons/navigational-button';
import RegisterButton from '~/ui-kit/buttons/register';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

function Header({
  children,
  className,
}: HeaderProps): ReturnType<React.FC<HeaderProps['children']>> {
  const { lang }: any = useParams();
  const [, setLang] = useAtom(langAtom);
  setLang(lang);

  const handleLogout = () => {};
  return (
    <header
      className={twMerge(
        'h-fit bg-gradient-to-b from-emerald-800 p-6',
        className,
      )}
    >
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="hidden items-center gap-x-2 rtl:flex-row-reverse md:flex">
          <NavigationalButton
            className="flex items-center justify-center rounded-full bg-black"
            direction={lang === 'ar' ? 'next' : 'prev'}
            size={35}
          />
          <NavigationalButton
            className="flex items-center justify-center rounded-full bg-black"
            direction={lang === 'en' ? 'next' : 'prev'}
            size={35}
          />
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <>
            <div>
              <RegisterButton
                onClick={(e) => e.preventDefault()}
                className="bg-transparent font-medium text-neutral-300"
              >
                Sign Up
              </RegisterButton>
              <RegisterButton
                onClick={(e) => e.preventDefault()}
                className="bg-white px-6 py-2"
              >
                Log In
              </RegisterButton>
            </div>
          </>
        </div>
      </div>
      {children}
    </header>
  );
}

export default Header;
