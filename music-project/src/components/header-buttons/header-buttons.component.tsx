import React from "react";
import "./header-buttons.component.scss";

type HeaderButtonProps = {
  className?: string;
};

export function HeaderButtons({ className }: HeaderButtonProps) {
  return (
    <>
      <button>Home</button>
      <button>Album Reviews</button>
      <button>New Releases</button>
      <button>About</button>
      <button>Contribute</button>
    </>
  );
}
