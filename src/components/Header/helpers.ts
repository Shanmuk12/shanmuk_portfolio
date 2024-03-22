import { SetStateAction } from "react";

export const listenToScroll = (
  isOnTop: boolean,
  setIsOnTop: (value: SetStateAction<boolean>) => void,
  header: HTMLElement | null,
) => {
  if (!header) return;
  // const heightToHideFrom = getOffset(document.getElementById("header"))
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  if (winScroll > header.offsetHeight / 2) {
    !isOnTop &&      // to limit setting state only the first time         
      setIsOnTop(true);

  } else {
    setIsOnTop(false);
  }
};