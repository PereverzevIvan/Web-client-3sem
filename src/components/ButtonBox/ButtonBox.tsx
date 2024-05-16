import classes from "./buttonBox.module.scss";

interface ButtonBoxProps {
  children: JSX.Element | JSX.Element[];
}

function ButtonBox(props: ButtonBoxProps) {
  return <div className={classes["button-box"]}>{props.children}</div>;
}

export default ButtonBox;
