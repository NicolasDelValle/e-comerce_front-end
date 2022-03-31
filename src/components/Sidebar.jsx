import { Button } from "react-bootstrap";
import {
	ProSidebar,
	Menu,
	MenuItem,
	SubMenu,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import {
	BsList,
	BsBox,
	BsArrowLeftRight,
	BsPersonCircle,
} from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { CgUserList } from "react-icons/cg";
import { RiFileList3Line } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";

import { Link } from "react-router-dom";
import logoBlanco from "../img/logos/logoBlanco.png";

function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(true);

	return (
		<div className="vh-100">
			<ProSidebar collapsed={showSidebar}>
				<SidebarHeader className="py-4 d-flex justify-content-center align-items-center">
					<Link
						className="wLogoContainer d-flex justify-content-center p-0 m-0 border-none"
						to="/"
					>
						<img className="wLogoContainer-logo" src={logoBlanco} alt="Logo" />
					</Link>
				</SidebarHeader>
				<SidebarContent className="d-flex flex-column">
					<Menu iconShape="circle">
						<SubMenu
							title="Productos"
							icon={<BsBox size={20} />}
							className="mb-2 fs-5"
						>
							<MenuItem icon={<BsList />}>Lista de Productos</MenuItem>
							<MenuItem icon={<GoPlus />}>Nuevo Producto</MenuItem>
						</SubMenu>
						<SubMenu
							title="Órdenes"
							icon={<CgUserList size={20} />}
							className="mb-2 fs-5"
						>
							<MenuItem icon={<RiFileList3Line />}>Lista de Órdenes</MenuItem>
						</SubMenu>
						<SubMenu
							title="Usuarios"
							icon={<FiUsers size={20} />}
							className="mb-2 fs-5"
						>
							<MenuItem icon={<CgUserList />}>Lista de Usuarios</MenuItem>
						</SubMenu>
					</Menu>
					<Menu iconShape="circle">
						<MenuItem
							icon={<BsArrowLeftRight size={20} />}
							className="fs-5"
							onClick={() => setShowSidebar((prev) => !prev)}
						>
							Colapsar
						</MenuItem>
					</Menu>
				</SidebarContent>
				<SidebarFooter>
					<Menu className="fs-3">
						<MenuItem icon={<BsPersonCircle />}>Pedro González</MenuItem>
					</Menu>
				</SidebarFooter>
			</ProSidebar>
		</div>
	);
}

export default Sidebar;
