import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ControlButton = styled(Button)(({ _ }) => ({
  color: "#fefefe",
  backgroundColor: "transparent",
  border: "none",
  transition: "all 0.3s ease",
  fontSize: "1.25rem",
  padding: "5px",
  margin: "0",
  minWidth: "0 !importent",
}));

export default ControlButton;
