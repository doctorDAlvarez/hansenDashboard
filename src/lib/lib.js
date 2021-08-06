import styled from "@emotion/styled";
import { Dialog as ReachDialog } from "@reach/dialog";

export const Button = styled.button((props) => {
  return {
    marginTop: 10,
    padding: "15px 15px",
    lineHeight: "1",
    border: 0,
    borderRadius: "6px",
    boxShadow: "0 0 3px 1px lightgrey",
    background: props.variant === "primary" ? "#3f51b5" : "#f1f2f7",
    color: props.variant === "primary" ? "white" : "#434449",
    "&:hover": {
      boxShadow: "0 0 3px 1px coral",
    },
  };
});

export const Input = styled.input({
  borderRadius: "5px",
  border: "1px solid #f1f1f4",
  background: "#f1f2f7",
  padding: "8px 12px",
});

export const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
  "input:focus": {
    outline: "none",
    boxShadow: "0 0 3px 1px coral",
  },
  "& > label": {
    color: "grey",
    marginBottom: 10,
  },
});

const CircleButton = styled.button({
  borderRadius: "30px",
  padding: "0",
  width: "40px",
  height: "40px",
  lineHeight: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  color: "#434449",
  border: `1px solid #f1f1f4`,
  cursor: "pointer",
});

const Dialog = styled(ReachDialog)({
  maxWidth: "450px",
  borderRadius: "3px",
  paddingBottom: "3.5em",
  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.2)",
  margin: "20vh auto",
  "@media (max-width: 991px)": {
    width: "100%",
    margin: "10vh auto",
  },
});

export { CircleButton, Dialog };
