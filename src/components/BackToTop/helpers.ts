import { SetStateAction } from "react";

export const listenToScroll = (
	isVisible: boolean,
	setIsVisible: (value: SetStateAction<boolean>) => void
) => {
	const top = document.getElementById("top");
	if (!top) return;
	const heightToHideFrom = getOffset(top)
	const winScroll = document.body.scrollTop ||
		document.documentElement.scrollTop;
	if (winScroll > heightToHideFrom) {
		!isVisible &&      // to limit setting state only the first time         
			setIsVisible(true);
	} else {
		setIsVisible(false);
	}
};

const getOffset = (element: HTMLElement) => {
	const rect = element?.getBoundingClientRect()
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return rect!.top + scrollTop;
};