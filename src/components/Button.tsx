import React, { CSSProperties, MouseEventHandler } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: string | React.ReactElement | React.ReactElement[];
  icon?: React.ReactElement;
  styles?: CSSProperties;
}

const Button = ({
  variant: buttonVariant = "primary",
  size: buttonSize = "medium",
  onClick,
  children,
  icon,
  styles,
}: ButtonProps) => {
  return (
    <button
      className={`${baseStyle} ${variants[buttonVariant]} ${sizes[buttonSize]}`}
      onClick={onClick}
      style={styles}
    >
      {icon && (
        <span className="inline-flex shrink-0 self-center pr-2">{icon}</span>
      )}
      {children}
    </button>
  );
};

const baseStyle = `
  rounded-full
  text-center
  font-semibold
  inline-flex
  items-center
  justify-center
  disabled:cursor-not-allowed
  p-[2px]
  w-[100%]
  sm:max-w-[200px]
`;

const variants = {
  // Colors
  primary: `
    bg-yellow-500
    disabled:bg-yellow-700
    text-primary shadow-md hover:shadow-none`,
  secondary: ``,
};

const sizes = {
  // Sizes
  small: `px-3 py-2`,
  medium: `px-4 py-2`,
  large: `px-5 py-2 h-[54px]`,
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
};

export { Button };
