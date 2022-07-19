import { FC, useState } from "react";

type TextInputPropType = {
	name?: string | undefined;
	value: any;
	setValue: Function;
	label: string;
	width?: number | undefined;
	height?: number | undefined;
	fit?: boolean | undefined;
	onEnter?: Function | undefined;
	defaultValue?: any | undefined;
	rightLabel?: boolean | undefined;
};

const TextInput: FC<TextInputPropType> = ({
	name,
	value,
	setValue,
	label,
	width,
	height,
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
					className={`${
						rightLabel && "text-right"
					} transition-all duration-400 font-semibold text-md ${
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
				<input
					name={name}
					defaultValue={defaultValue}
					type="text"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							if (onEnter) onEnter();
						}
					}}
					style={{
						width: JSON.stringify(width) + "px",
						height: JSON.stringify(height) + "px",
					}}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					className={`${
						fit && "w-full"
					} transition-all duration-400 outline-none px-5 py-3 ${
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

export default TextInput;
