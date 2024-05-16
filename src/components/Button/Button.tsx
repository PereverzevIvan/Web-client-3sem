import { useContext } from "react";
import styles from "./button.module.scss";
import { AppThemeContext } from "../../context/AppThemeContext";

type Props = {
  children: string;
  disabled?: boolean;
  onClick?: any;
  type?: "button" | "submit" | "reset" | undefined;
};

function Button(props: Props) {
  const { theme } = useContext(AppThemeContext);

  return (
    <button
      className={`${styles.button} ${styles[theme]}`}
      type={props.type}
      disabled={props.disabled && true}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
