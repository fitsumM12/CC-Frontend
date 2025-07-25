import { AppBar, ThemeProvider, Toolbar, styled, useTheme } from "@mui/material";

import { Span } from "./Typography";
import useSettings from "app/hooks/useSettings";
import { topBarHeight } from "app/utils/constant";

// STYLED COMPONENTS
const AppFooter = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  minHeight: topBarHeight,
  "@media (max-width: 499px)": {
    display: "table",
    width: "100%",
    minHeight: "auto",
    padding: "1rem 0",
    "& .container": {
      flexDirection: "column !important",
      "& a": { margin: "0 0 16px !important" }
    }
  }
}));

const FooterContent = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0px 1rem",
  maxWidth: "1170px",
  margin: "0 auto"
}));

export default function Footer() {
  const theme = useTheme();
  const { settings } = useSettings();
  const currentYear = new Date().getFullYear();
  const footerTheme = settings.themes[settings.footer.theme] || theme;

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar color="primary" position="relative" sx={{ zIndex: 96 }}>
        <AppFooter>
          <FooterContent>
          Ethiopian Artificial Intelligence Institute (EAII) &copy; {currentYear}
          <Span m="auto"></Span>
          </FooterContent>
        </AppFooter>
      </AppBar>
    </ThemeProvider>
  );
}
