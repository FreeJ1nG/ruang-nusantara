import { FC, ReactNode, useEffect, useRef } from "react";

type PopupPropType = {
	children: ReactNode;
	showPopup: boolean;
	setShowPopup: Function;
};

const Popup: FC<PopupPropType> = ({ children, showPopup, setShowPopup }) => {
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
		<>
			{showPopup && (
				<div className="z-100 fixed left-0 right-0 top-0 bottom-0 bg-black/50 flex justify-center items-center">
					<div ref={popupRef} className="w-full h-full relative bg-darkBrown">
						<button onClick={() => setShowPopup(false)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="absolute top-4 right-4 h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Popup;
