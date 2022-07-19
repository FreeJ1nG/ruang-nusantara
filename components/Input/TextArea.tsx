import { FC, useState } from "react";

type TextAreaPropType = {
	name?: string | undefined;
	value: any;
	setValue: Function;
	label: string;
	height?: number | undefined;
	width?: number | undefined;
	fit?: boolean | undefined;
	onEnter?: Function | undefined;
	defaultValue?: any | undefined;
	rightLabel?: boolean | undefined;
};

const TextArea: FC<TextAreaPropType> = ({
	name,
	value,
	setValue,
	label,
	height,
	width,
	fit,
	onEnter,
	defaultValue,
	rightLabel,
}) => {
	const [focused, setFocused] = useState(false);

	return (
		<div className={`${fit && "w-full"} flex flex-col gap-y-1 my-1`}>
			<div className="h-5">
				<h1
					className={`transition-all duration-400 font-semibold text-md ${
						value !== "" || focused
							? focused
								? "text-lightBrown"
								: "text-white"
							: "text-transparent"
					}`}
				>
					{label}
				</h1>
			</div>
			<div
				style={height ? { height: JSON.stringify(height + 8) + "px" } : {}}
				className={`${fit && "w-full"}`}
			>
				<textarea
					style={{
						width: JSON.stringify(width) + "px",
						height: JSON.stringify(height) + "px",
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							if (onEnter) onEnter();
						}
					}}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					className={`${
						fit && "w-full"
					} transition-all duration-400 outline-none py-5 px-5 ${
						value === ""
							? "placeholder:text-white"
							: "placeholder:text-transparent"
					} placeholder:font-bold ${
						focused && "border-2 border-lightBrown"
					} rounded-xl bg-textInputBg/40`}
					placeholder={focused ? "" : label}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default TextArea;
