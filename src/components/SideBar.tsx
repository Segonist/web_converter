import * as inputTypes from "../data/inputTypes.json";
import iconsModule from "../assets/icons/icons";
import { useUpdateConvertionType } from "../context/convertionTypeContext";

interface Props {
	open: string;
}

const SideBar = ({ open }: Props) => {
	const inputTypesDict: { [index: string]: any } = inputTypes;
	var inputTypesKeys = Object.keys(inputTypesDict);
	inputTypesKeys.shift();

	const icons: { [index: string]: any } = iconsModule;

	const updateConvertionType = useUpdateConvertionType();
	const handleButtonClick = (item: string) => {
		updateConvertionType(item);
	};

	return (
		<div className="SideBar" data-open={open}>
			<nav>
				{inputTypesKeys.map((item) => {
					return (
						<button onClick={() => handleButtonClick(item)} key={item}>
							<img src={icons[item]} alt="element icon" />
							{item}
						</button>
					);
				})}
			</nav>
			<button className="btn">
				<img src={icons["settings"]} alt="settings icon" />
				Settings
			</button>
		</div>
	);
};

export default SideBar;
