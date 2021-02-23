import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to='/'>
					<h1>Logo</h1>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to='/about-us' activeStyle>
						About Us
					</NavLink>
					<NavLink to='/support' activeStyle>
						Support
					</NavLink>
					{/* <NavLink to='/contact-us' activeStyle>
						Contact Us
					</NavLink> */}
					<NavLink to='/sign-in' activeStyle>
						Sign In
					</NavLink>
					{/* Second Nav */}
					<NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
				</NavMenu>
				{/* <NavBtn>
					<NavBtnLink to='/signin'>Sign In</NavBtnLink>
				</NavBtn> */}
			</Nav>
		</>
	);
};

export default Navbar;
