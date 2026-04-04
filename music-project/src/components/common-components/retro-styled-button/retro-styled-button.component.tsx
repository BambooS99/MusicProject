import "./retro-styled-button.component.scss";

interface RetroStyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function RetroStyledButton({
  children,
  className,
  type = "button",
  ...props
}: RetroStyledButtonProps) {
  return (
    <button
      type={type}
      className={`retro-styled-button ${className ?? ""}`.trim()}
      {...props}>
      {children}
    </button>
  );
}
