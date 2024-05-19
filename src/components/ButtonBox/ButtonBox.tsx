import classes from "./buttonBox.module.scss";

interface IButtonBoxProps {
  children: JSX.Element | JSX.Element[];
}

function ButtonBox(props: IButtonBoxProps) {
  return <div className={classes["button-box"]}>{props.children}</div>;
}

export default ButtonBox;
