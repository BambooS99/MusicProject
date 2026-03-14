import "./terminal-section.component.scss";

interface TerminalSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalSection({
  title,
  children,
  className,
}: TerminalSectionProps) {
  return (
    <aside className={`terminal-section ${className ?? ""}`}>
      <div className="terminal-section__header">
        <div className="terminal-section__traffic-lights">
          <div className="terminal-section__light terminal-section__light--red"></div>
          <div className="terminal-section__light terminal-section__light--yellow"></div>
          <div className="terminal-section__light terminal-section__light--green"></div>
        </div>
      </div>
      <div className="terminal-section__title">
        <p className="bash">{title}</p>
      </div>
      <div className="terminal-section__content">{children}</div>
    </aside>
  );
}
