import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import SideBar from "./SideBar";
import { useConvertionType } from "../context/convertionTypeContext";

const Header = () => {
	const convertionType = useConvertionType();
	const [SideBarOpen, setSideBarOpen] = useState("false");
	const burgerClickHandle = () => {
		if (SideBarOpen == "false") {
			setSideBarOpen("true");
		} else {
			setSideBarOpen("false");
		}
	};
	return (
		<header>
			<div className="header-content" data-open={SideBarOpen}>
				<BurgerMenu onBurgerClick={burgerClickHandle} />
				<h2>{convertionType}</h2>
			</div>
			<SideBar open={SideBarOpen} />
		</header>
	);
};

export default Header;
