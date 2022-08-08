import { FC, ReactNode, useEffect, useRef } from "react";

type PopupType = {
	children?: ReactNode | undefined;
	showPopup: boolean;
	setShowPopup: Function;
};

const Popup: FC<PopupType> = ({ children, showPopup, setShowPopup }) => {
	useEffect(() => {
		if (showPopup) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [showPopup]);
	const popupRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		let handler = (e: any) => {
			if (popupRef.current && !popupRef.current.contains(e.target)) {
				setShowPopup(false);
			}
		};
		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});

	return (
		<div
			className={`transition-all duration-200 fixed top-0 bottom-0 left-0 right-0 flex items-end ${
				showPopup ? "bg-black/50 z-80" : "bg-transparent z-0"
			}`}
		>
			<div className="w-screen z-90" ref={popupRef}>
				{children}
			</div>
		</div>
	);
};

export default Popup;
