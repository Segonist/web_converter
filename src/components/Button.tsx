import { ReactNode } from "react";

interface Prop {
	color?: string;
	bgcolor?: string;
	fontsize?: number;
	children?: ReactNode;
	onButtonClick?: () => void;
}

const Button = ({
	color,
	bgcolor,
	fontsize,
	children,
	onButtonClick,
}: Prop) => {
	return (
		<button
			style={{
				color: color,
				backgroundColor: bgcolor,
				fontSize: fontsize,
			}}
			onClick={onButtonClick}
			className="Button"
		>
			{children}
		</button>
	);
};

export default Button;
