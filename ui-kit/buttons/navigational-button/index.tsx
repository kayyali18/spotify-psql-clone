import { useParams, useRouter } from 'next/navigation';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';

interface NavigationButtonProps {
  direction: 'prev' | 'next';
  className?: string;
  size?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function NavigationalButton({
  direction,
  className,
  size = 35,
  onClick,
}: NavigationButtonProps) {
  const router = useRouter();
  const isPrev = direction === 'prev';

  const navigate = () => (isPrev ? router.back() : router.forward());

  const { lang }: any = useParams();

  const renderCaret = () => {
    const leftCaret = <RxCaretLeft size={size} />;
    const rightCaret = <RxCaretRight size={size} />;
    const isRTL = lang === 'ar';

    if (isPrev && !isRTL) return leftCaret;
    else if (isPrev) return rightCaret;
    else if (!isPrev && !isRTL) return rightCaret;
    else return leftCaret;
  };

  return (
    <button
      onClick={onClick ? onClick : navigate}
      className={twMerge('transition hover:opacity-75', className)}
    >
      {renderCaret()}
    </button>
  );
}

export default NavigationalButton;
