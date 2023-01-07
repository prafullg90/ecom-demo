import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Container from '@mui/material/Container';
import NavBar from './NavBar';
import Footer from './Footer';
import { useSelector } from 'react-redux';

export default function PageLayout({ children }) {
  const themeType = useSelector((state) => state.theme);

  return (
    <>
      <ThemeProvider theme={createTheme(themeType)}>
        <NavBar />
        <Container maxWidth='sm'>{children}</Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}
