import burgerMenu from "../assets/burger-menu.svg";

interface Props {
	convertionType: string;
}

const Header = ({ convertionType }: Props) => {
	return (
		<header>
			<img src={burgerMenu} alt="burger manu icon" className="burger" />
			<h2>{convertionType}</h2>
		</header>
	);
};

export default Header;
