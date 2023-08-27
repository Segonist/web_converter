interface Props {
	onBurgerClick?: () => void;
}

const BurgerMenu = ({ onBurgerClick }: Props) => {
	return (
		<div className="BurgerMenu">
			<input onClick={onBurgerClick} type="checkbox" id="menu_checkbox" />
			<label htmlFor="menu_checkbox">
				<div></div>
				<div></div>
				<div></div>
			</label>
		</div>
	);
};

export default BurgerMenu;
