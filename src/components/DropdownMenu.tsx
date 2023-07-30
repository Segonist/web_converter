import { useState } from "react";

interface Props {
	elements: string[];
	onSelect?: (unit: string) => void;
}

const DropdownMenu = ({ elements, onSelect }: Props) => {
	const [selectedElement, setSelectedElement] = useState(elements[0]);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [hoverOver, setHoverOver] = useState(false);
	const handleOnBlur = () => {
		if (!hoverOver && dropdownOpen) {
			setDropdownOpen((currentState) => {
				return !currentState;
			});
		}
	};
	const handleDropdownToggle = () => {
		setDropdownOpen((currentState) => {
			return !currentState;
		});
	};
	const handleSelectChange = (item: string) => {
		setSelectedElement(item);
		if (onSelect) {
			onSelect(item);
		}
		setDropdownOpen(false);
	};
	return (
		<div className="DropdownMenu">
			<button
				onBlur={handleOnBlur}
				onClick={handleDropdownToggle}
				className={
					dropdownOpen
						? "btn DropdownMenu-selected dropdownOpen"
						: "btn DropdownMenu-selected"
				}
			>
				{selectedElement}
			</button>
			{dropdownOpen && (
				<div className="DropdownMenu-elements">
					{elements.map((item) => (
						<button
							tabIndex={0}
							className="btn DropdownMenu-element"
							key={item}
							value={item}
							onClick={() => handleSelectChange(item)}
							onMouseEnter={() => setHoverOver(true)}
							onMouseLeave={() => setHoverOver(false)}
						>
							{item}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
