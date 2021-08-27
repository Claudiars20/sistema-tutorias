import React, { useState } from 'react';
import Aside from './barCoordinador.jsx';

function Layout({ setLocale }) {
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div style={{  position: 'fixed' }} className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
    <Aside  
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
    </div>
  );
}

export default Layout;