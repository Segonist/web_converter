import { useEffect, useState } from "react";

interface Props {
	elements: string[];
	width?: string;
	onSelect?: (unit: string) => void;
}

const DropdownMenu = ({ elements, width, onSelect }: Props) => {
	const [selectedElement, setSelectedElement] = useState(elements[0]);
	const [dropdownElements, setDropdownElements] = useState(elements);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [hoverOver, setHoverOver] = useState(false);
	useEffect(() => {
		// this hook prevents appearing same element in list and selected state (just UI thing)
		setDropdownElements(elements);
		setDropdownElements((currentState) => {
			var filtered = currentState.filter((elem: string) => {
				return elem != selectedElement;
			});
			return filtered;
		});
	}, [selectedElement]);
	const handleOnBlur = () => {
		// onBlur event occures when element loses focus
		if (!hoverOver && dropdownOpen) {
			// check if dropdown is open and user is not hovering on it
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
		<div className="DropdownMenu" style={{ width: width }}>
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
				<div className="DropdownMenu-elements" style={{ width: width }}>
					{dropdownElements.map((item) => (
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
