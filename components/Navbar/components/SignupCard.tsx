import { FC, useContext, useState } from "react";

import Button from "$components/Button/Button";
import Image from "next/image";
import { IndoContext } from "$context/IndoContext";
import { TextField } from "@mui/material";
import { UserContext } from "$context/UserContext";
import { UsersContext } from "$context/UsersContext";
import { toast } from "react-hot-toast";

const SignupCard: FC<{
	setLoginPanel: Function;
	setSignupPanel: Function;
	setUsers: Function;
}> = ({ setLoginPanel, setSignupPanel, setUsers }) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const users = useContext(UsersContext);
	const indo = useContext(IndoContext);

	return (
		<div className="p-5 w-[700px] rounded-md bg-white flex flex-col relative">
			<div className="absolute top-6 right-6">
				<div className="relative w-28 h-28">
					<Image src="/logo_low_opacity.png" alt="logo" layout="fill" />
				</div>
			</div>
			<div className="flex flex-col gap-y-5 py-10">
				<div className="flex flex-col gap-y-2 items-center">
					<div className="font-ubuntu font-bold text-5xl">Sign up</div>
					<div className="flex items-center gap-x-2">
						<h1>{`Already have an account?`}</h1>
						<button
							onClick={() => {
								setSignupPanel(false);
								setLoginPanel(true);
							}}
							className="text-lightBrown font-bold"
						>
							Login
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-y-5 py-5">
					<div className="flex flex-col gap-y-5 items-center">
						<div className="w-2/3 flex flex-col gap-y-4">
							<TextField
								variant="filled"
								label="Email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<TextField
								variant="filled"
								label="Password"
								value={password}
								type="password"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div className="flex gap-x-5 w-full">
								<div className="w-1/2">
									<TextField
										variant="filled"
										label="First name"
										type="text"
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</div>
								<div className="w-1/2">
									<TextField
										variant="filled"
										label="Last name"
										type="text"
										onChange={(e) => setLastName(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<Button
							label="Sign Up"
							width={200}
							height={40}
							type="primary"
							onClick={() => {
								if (email !== "" && password !== "") {
									setUsers([
										...users,
										{
											email: email,
											password: password,
											first_name: firstName,
											last_name: lastName,
											bookings: [],
										},
									]);
									toast.success(
										indo
											? "Akun Anda telah terdaftar!"
											: "You have been registered!"
									);
									setSignupPanel(false);
									setLoginPanel(true);
								} else {
									toast.error(
										indo ? "Data belum lengkap" : "Requirements not fulfilled"
									);
								}
							}}
						/>
					</div>
					<div className="flex flex-row gap-x-4 justify-center items-center">
						<div className="border-t-[1px] border-gray w-24"></div>
						<div className="">or</div>
						<div className="border-t-[1px] border-gray w-24"></div>
					</div>
					<div className="flex justify-center">
						<button
							onClick={() => toast.error("Feature not ready")}
							className="rounded-3xl border-2 px-8 py-2 transition-all duration-300 border-gray hover:border-yellowText flex gap-x-5 justify-center items-center"
						>
							<div className="relative w-8 h-8">
								<Image src="/navbar/google.png" alt="google" layout="fill" />
							</div>
							<h1 className="text-sm font-semibold">Sign in with Google</h1>
						</button>
					</div>
				</div>
				<div className="text-center text-sm">
					By continuing, you agree to Ruang Nusantara’s{" "}
					<span className="font-bold underline">Terms of use</span> and{" "}
					<span className="font-bold underline">Privacy policy</span>
				</div>
			</div>
		</div>
	);
};

export default SignupCard;
