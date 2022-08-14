import { Toaster as T } from "react-hot-toast";

export const Toaster = () => (
	<T
		position="bottom-center"
		reverseOrder={false}
		toastOptions={{
			style: {
				boxShadow: "0px 12px 16px 0px #0000004D",
				padding: "12px 16px",
				borderRadius: "12px",
				fontWeight: 700,
				fontSize: "16px",
				color: "#00000080",
				fontFamily: "Inter, sans-serif",
				boxSizing: "border-box",
				lineHeight: "1.5",
				width: "fit-content",
				overflow: "hidden",
				overflowWrap: "break-word",
				wordWrap: "break-word",
				zIndex: "9999",
			},
			success: {
				icon: (
					<div className="text-green-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
				),
				style: {
					background: "#3EEBBE",
					border: "2px solid #68FCD6",
				},
			},
			error: {
				icon: (
					<div className="h-6 w-6 text-red-600">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
				),
				style: {
					background: "pink",
					border: "2px solid #FF96A5",
				},
			},
			loading: {
				style: {
					background: "#373951",
					border: "2px solid #3E405B",
					color: "white",
				},
			},
		}}
	/>
);
