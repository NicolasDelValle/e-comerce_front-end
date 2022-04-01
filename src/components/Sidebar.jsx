import logoBlanco from "../img/logos/logoBlanco.png";
import { RiFileList3Line } from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import { CgUserList } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "react-pro-sidebar";
import {
  BsList,
  BsBox,
  BsArrowLeftRight,
  BsPersonCircle,
} from "react-icons/bs";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="me-5">
      <ProSidebar collapsed={showSidebar} className="position-fixed ">
        <SidebarHeader className="py-4 d-flex justify-content-center align-items-center">
          <Link
            className="wLogoContainer d-flex justify-content-center p-0 m-0 border-none"
            to="/"
          >
            <img
              className="wLogoContainer-logo p-1"
              src={logoBlanco}
              alt="Logo"
            />
          </Link>
        </SidebarHeader>
        <SidebarContent className="d-flex flex-column">
          <Menu iconShape="circle">
            <SubMenu
              title="Administrador"
              icon={<MdAdminPanelSettings size={20} />}
              className="mb-2"
            >
              <MenuItem icon={<BsList />}>
                <Link to="/admin">Administrador</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="Productos"
              icon={<BsBox size={20} />}
              className="mb-2 "
            >
              <MenuItem icon={<BsList />}>
                <Link to="/admin/products"> Lista de Productos</Link>
              </MenuItem>
              <MenuItem icon={<GoPlus />}>
                <Link to="/admin/products/create">Nuevo Producto</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="Órdenes"
              icon={<CgUserList size={20} />}
              className="mb-2 "
            >
              <MenuItem icon={<RiFileList3Line />}>
                <Link to="/admin/orders"> Lista de Órdenes</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              title="Usuarios"
              icon={<FiUsers size={20} />}
              className="mb-2 "
            >
              <MenuItem icon={<CgUserList />}>
                <Link to="/admin/users"> Lista de Usuarios</Link>
              </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="circle">
            <MenuItem
              icon={<BsArrowLeftRight size={20} />}
              className=""
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
