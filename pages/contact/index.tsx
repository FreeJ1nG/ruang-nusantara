import { FC, ReactNode, useContext, useState } from "react";

import Button from "../../components/Button/Button";
import Image from "next/image";
import { IndoContext } from "../../context/IndoContext";
import TextArea from "../../components/Input/TextArea";
import TextInput from "../../components/Input/TextInput";
import toast from "react-hot-toast";
import { useWindowSize } from "../../hooks/useWindowSize";

const Contact: FC = () => {
	const indo = useContext(IndoContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const size = useWindowSize();

	return (
		<div className="flex flex-col mx-5 sm:mx-20 lg:mx-40 2xl:mx-96 my-10 md:my-20 md:mb-32 gap-y-10 md:gap-y-20">
			<h1 className="text-4xl md:text-5xl font-bold text-center">
				{indo ? "Hubungi Kami" : "Contact Us"}
			</h1>
			<div className="flex justify-center">
				<div className="relative w-full h-[600px]">
					<Image
						src="/location.png"
						layout="fill"
						objectFit="cover"
						alt="PJ Global School Location"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-y-10">
				<div className="flex flex-col gap-y-5">
					<h1 className="text-3xl md:text-4xl font-bold text-center">
						Get in touch with us
					</h1>
					<h1 className="text-lg md:text-xl font-normal text-center">
						Get connected with us without hassle
					</h1>
				</div>
				<div className="flex flex-col lg:flex-row">
					<div className="flex justify-center">
						<div className="flex flex-col lg:justify-center gap-y-10 md:gap-y-20">
							<InformationElement
								imageSrc="/location-logo.png"
								title="Bukit Dieng No. T-12"
								description={
									<div className="flex flex-col">
										<h1>Malang City, East Java,</h1>
										<h1>Indonesia</h1>
									</div>
								}
							/>
							<InformationElement
								imageSrc="/phone-logo.png"
								title="+62 897 6472 159"
								description="Mrs. Qibthy"
							/>
							<InformationElement
								imageSrc="/location-logo.png"
								title="pjglobal.sch@gmail.com"
								description="Email Us"
							/>
						</div>
					</div>
					<div className="flex flex-col items-center lg:items-end gap-y-2 w-full lg:w-3/5">
						<TextInput
							label="Name"
							name="Name"
							width={(size?.width ?? 0) <= 600 ? 280 : 400}
							height={50}
							value={name}
							setValue={setName}
						/>
						<TextInput
							label="E-mail Address"
							name="email"
							width={(size?.width ?? 0) <= 600 ? 280 : 400}
							height={50}
							value={email}
							setValue={setEmail}
						/>
						<TextInput
							label="Subject"
							width={(size?.width ?? 0) <= 600 ? 280 : 400}
							height={50}
							value={subject}
							setValue={setSubject}
						/>
						<TextArea
							label="Message"
							width={(size?.width ?? 0) <= 600 ? 300 : 400}
							height={200}
							value={message}
							setValue={setMessage}
						/>
						<Button
							mt={4}
							type="primary"
							label="Send"
							rightIcon={
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
										d="M9 5l7 7-7 7"
									/>
								</svg>
							}
							width={200}
							height={50}
							onClick={() =>
								toast.success(
									indo
										? "Pesan Anda telah dikirim"
										: "Your message has been heard"
								)
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

type InformationElementType = {
	imageSrc: string;
	title: string;
	description: ReactNode | string;
};

const InformationElement: FC<InformationElementType> = ({
	imageSrc,
	title,
	description,
}) => {
	return (
		<div className="flex flex-row items-center gap-x-5 md:gap-x-10">
			<div className="relative w-14 h-14 md:w-20 md:h-20">
				<Image src={imageSrc} layout="fill" alt="Logo" />
			</div>
			<div className="flex flex-col">
				<h1 className="text-lg md:text-xl font-bold text-lightBrown">
					{title}
				</h1>
				<h1 className="text-base md:text-lg font-normal text-contactGrayText">
					{description}
				</h1>
			</div>
		</div>
	);
};

export default Contact;
