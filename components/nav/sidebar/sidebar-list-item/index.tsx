import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { twMerge } from 'tailwind-merge';

interface SidebarListItemProps {
  label: string;
  active?: Boolean;
  href: string;
  icon: IconType;
}

function SidebarListItem({
  label,
  active,
  href,
  icon: Icon,
}: SidebarListItemProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        'text-md flex h-auto w-full',
        'cursor-pointer flex-row items-center gap-x-4',
        'py-1 font-medium text-neutral-400 transition hover:text-white',
        active && 'text-white',
      )}
    >
      <Icon size={24} />
      <p className="w-100 truncate">{label}</p>
    </Link>
  );
}

export default SidebarListItem;
