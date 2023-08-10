import SidebarNav from '~/components/nav/sidebar';

interface SidebarProps {
  children: React.ReactNode;
}

function SidebarLayout({ children }: SidebarProps) {
  return (
    <div className="flex h-full bg-black">
      <SidebarNav />
      <main className="my-2 h-full w-full flex-1 overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
        {children}
      </main>
    </div>
  );
}

export default SidebarLayout;
