import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface RegisterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const RegisterButton = forwardRef<HTMLButtonElement, RegisterButtonProps>(
  ({ disabled, type = 'button', className, children, ...rest }, ref) => {
    return (
      <button
        className={twMerge(
          'cursor-pointer transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50',
          'width-full rounded-full border border-transparent',
          'bg-green-500 px-3 py-3 font-bold text-black',
          className,
        )}
        type={type}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

RegisterButton.displayName = 'Register Button';

export default RegisterButton;
