import React from "react";
import "./header.component.scss";
import { HeaderButtons } from "../header-buttons/header-buttons.component";

type HeaderProps = {
  className?: string;
};

export function HeaderComponent({ className }: HeaderProps) {
  return (
    <header className={`headerComponent ${className ?? ""}`}>
      <h1 className="headerComponent__title">private music</h1>
      <HeaderButtons />
    </header>
  );
}
