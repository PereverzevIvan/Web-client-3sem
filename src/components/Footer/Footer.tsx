import styles from "./footer.module.scss";

// Компонент подвала сайта
function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p className="title title_medium">Переверзев Иван 221-321</p>
    </footer>
  );
}

export default Footer;
