import styles from "./index.module.css";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  width?: string;
  size?: "default" | "small";
  color?: "green" | "red" | "blue" | "yellow";
  onClick: () => void;
}

const Button = ({
  children,
  disabled,
  color = "green",
  size = "default",
  onClick,
}: ButtonProps) => {
  const className = [styles.container, styles[size], styles[color]].join(" ");

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
