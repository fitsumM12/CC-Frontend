import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

// STYLED COMPONENTS
const FlexBox = styled(Box)({
  display: "flex",
  alignItems: "center"
});

const JustifyBox = styled(FlexBox)({
  maxWidth: 320,
  flexDirection: "column",
  justifyContent: "center"
});

const IMG = styled("img")({
  width: "100%",
  marginBottom: "32px"
});

const NotFoundRoot = styled(FlexBox)({
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh !important"
});

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundRoot>
      <JustifyBox>
        <IMG src={process.env.PUBLIC_URL+"/assets/images/illustrations/404.svg"} alt="" />

        <Button
          color="primary"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </JustifyBox>
    </NotFoundRoot>
  );
}
