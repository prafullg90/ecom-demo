import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import NavBar from './NavBar';
import Footer from './Footer';
import { useSelector } from 'react-redux';

export default function PageLayout({ children }) {
  const themeType = useSelector((state) => state.theme);

  return (
    <>
      <ThemeProvider theme={createTheme(themeType)}>
        <CssBaseline />
        <NavBar />
        <br></br>
        <Container>{children}</Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}
