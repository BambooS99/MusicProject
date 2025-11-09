import React from "react";
import "./header-buttons.component.scss";

type HeaderButtonProps = {
  className?: string;
  onChangePage: (page: string) => void;
};

export function HeaderButtons({ className, onChangePage }: HeaderButtonProps) {
  return (
    <>
      <button onClick={() => onChangePage("Home")}>Home</button>
      <button onClick={() => onChangePage("Album Reviews")}>
        Album Reviews
      </button>
      <button onClick={() => onChangePage("New Releases")}>New Releases</button>
      <button onClick={() => onChangePage("About")}>About</button>
      <button onClick={() => onChangePage("Contribute")}>Contribute</button>
    </>
  );
}
