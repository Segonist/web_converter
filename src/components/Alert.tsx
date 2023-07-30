import { useEffect, useState } from "react";

import Button from "./Button";
import Cross from "../assets/cross.svg";

interface Prop {
	children: string;
}

const Alert = ({ children }: Prop) => {
	const [alertShown, setAlertShown] = useState(false);
	useEffect(() => {
		setAlertShown(true);
	});
	const onClose = () => {
		setAlertShown(false);
	};
	return (
		<div className="Alert">
			{alertShown ? (
				<>
					<span>{children}</span>
					<Button onButtonClick={onClose}>
						<img
							style={{ height: "100%" }}
							src={Cross}
							alt="close alert"
						/>
					</Button>
				</>
			) : null}
		</div>
	);
};

export default Alert;
