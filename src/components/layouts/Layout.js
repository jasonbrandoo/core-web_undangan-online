import React from 'react';
import { Notification, Navbar, Tab, Footer, Header } from '.';

const MainLayout = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <Notification />
      <Navbar />
      <Tab />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
