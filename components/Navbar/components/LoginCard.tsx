import { FC, useContext, useState } from "react";

import Button from "$components/Button/Button";
import Image from "next/image";
import { TextField } from "@mui/material";
import { UserContext } from "$context/UserContext";
import { UserStatus } from "$constants/constants";
import { UsersContext } from "$context/UsersContext";
import { toast } from "react-hot-toast";

const LoginCard: FC<{
	setLoginPanel: Function;
	setSignupPanel: Function;
	setUser: Function;
}> = ({ setLoginPanel, setSignupPanel, setUser }) => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const user = useContext(UserContext);
	const users = useContext(UsersContext);
	console.log(users);

	return (
		<div className="p-5 w-[700px] rounded-md bg-white flex flex-col relative">
			<div className="absolute top-6 right-6">
				<div className="relative w-28 h-28">
					<Image src="/logo_low_opacity.png" alt="logo" layout="fill" />
				</div>
			</div>
			<div className="flex flex-col gap-y-5 py-10">
				<div className="flex flex-col gap-y-2 items-center">
					<div className="font-ubuntu font-bold text-5xl">Login</div>
					<div className="flex items-center gap-x-2">
						<h1>{`Don't have an account?`}</h1>
						<button
							onClick={() => {
								setLoginPanel(false);
								setSignupPanel(true);
							}}
							className="text-lightBrown font-bold"
						>
							Sign Up
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-y-5 py-5">
					<div className="flex flex-col gap-y-5 items-center">
						<div className="w-1/2 flex flex-col gap-y-4">
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
						</div>
						<Button
							label="Login"
							width={200}
							height={40}
							type="primary"
							onClick={() => {
								const u = users.find(
									(user) => user.email === email && user.password === password
								);
								if (u) {
									setUser({ ...u, status: UserStatus.LOGGED_IN });
									toast.success("Logged In!");
									setLoginPanel(false);
								} else {
									toast.error("Password or email invalid");
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

export default LoginCard;
