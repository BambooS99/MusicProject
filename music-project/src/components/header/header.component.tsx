import "./header.component.scss";
import { HeaderButtons } from "../header-buttons/header-buttons.component";

type HeaderProps = {
  className?: string;
  onChangePage: (page: string) => void;
};

export function HeaderComponent({ className, onChangePage }: HeaderProps) {
  return (
    <header className={`headerComponent ${className ?? ""}`}>
      <h1 className="headerComponent__title">private music</h1>
      <HeaderButtons onChangePage={onChangePage} />
    </header>
  );
}
