import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { ImMail4 } from "react-icons/Im";
import { DiAtom } from "react-icons/di";
import { ChevronLeftIcon, ChevronRightIcon, AtSignIcon } from "@chakra-ui/icons";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a
					style={{
						display: "flex",
						alignItems: "center",
						color: "white",
						marginBottom: "20px",
					}}
				>
					{/* <DiAtom size="3rem" /> */}
					<ChevronLeftIcon h={25} w={25} color="#3ccf91" />
					<AtSignIcon h={12} w={12} color="#3ccf91" />
					<Span> srshashibhushan</Span>
					<ChevronRightIcon h={25} w={25} color="#3ccf91" />
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href="https://github.com/ReeSSB">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://www.linkedin.com/in/srshashibhushannbhardwaj/">
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
			<SocialIcons href="mailto:contact@shashi.as05@gmail.com">
				<ImMail4 size="2.7rem" />
			</SocialIcons>
			{/* <SocialIcons href="https://instagram.com/">
				<AiFillInstagram size="3rem" />
			</SocialIcons> */}
		</Div3>
	</Container>
);

export default Header;
