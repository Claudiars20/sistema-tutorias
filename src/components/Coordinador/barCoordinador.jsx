import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import { FaThLarge, FaFileInvoice, FaAddressBook,FaList} from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({  
  image:
  {
    padding: '1px',
    marginBottom: '-10px',
    alignContent: 'center',
    display:'flex',
    justifyContent:'center',
    height:'100px',
  },
  img:
  {
    padding:'0px',
    maxWidth: '100%',
    maxHeight:'100%',
  },
  texto:{
    padding: '3px 24px 24px 24px',
    wordWrap: 'normal',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: '1px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
  } 
}));
const Aside = ({logo,collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  const classes = useStyles();
  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="xs"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div className={classes.image} >
          <img className={classes.img} src="https://i.ibb.co/LPDw5CL/logo2.png" alt="logo2" border="0" />
        </div>
        <div
        className={classes.texto}>
          {intl.formatMessage({ id: 'Escuela Profesional de Ingeniería Informática y de Sistemas' })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaThLarge />}
          >
            {intl.formatMessage({ id: 'Dashboard' })}
          </MenuItem>
          <MenuItem icon={<FaFileInvoice />}> {intl.formatMessage({ id: 'Fichas de Tutoria' })}</MenuItem>
          <SubMenu
            title={intl.formatMessage({ id: 'Informes de Tutoria' })}
            icon={<FaList />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          
          <SubMenu title={intl.formatMessage({ id: 'Registro' })} icon={<FaAddressBook />}>
            <MenuItem>{intl.formatMessage({ id: 'Docentes' })} 
            <a
                href="../coordinador/docentes"
                className="sidebar-btn"
                rel="noopener noreferrer"
            ></a>
            </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'Estudiantes' })}
            <a
                href="../coordinador/estudiantes"
                className="sidebar-btn"
                rel="noopener noreferrer"
            ></a>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
        <span> {intl.formatMessage({ id: 'Cerrar Sesión' })}</span>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;