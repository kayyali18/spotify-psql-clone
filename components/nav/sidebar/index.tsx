'use client';

import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';

import { HiHome, HiMagnifyingGlass } from 'react-icons/hi2';
import Box from '~/components/box';
import Library from '~/components/library';
import SidebarListItem from './sidebar-list-item';

function SidebarNav() {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: HiMagnifyingGlass,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname],
  );

  return (
    <nav className="hidden h-full w-[300px] flex-col gap-y-2 p-2 text-white md:flex">
      <Box>
        <div className="flex flex-col gap-y-4 px-5 py-4">
          {/* /routes */}
          {routes.map((route) => (
            <SidebarListItem key={route.label} {...route} />
          ))}
        </div>
      </Box>
      <Box className="h-full overflow-y-auto">
        <Library />
      </Box>
    </nav>
  );
}

export default SidebarNav;
