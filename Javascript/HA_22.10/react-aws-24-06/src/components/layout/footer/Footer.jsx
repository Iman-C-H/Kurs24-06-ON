import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
        <button onClick={() => alert("Hallo von Home")}>Homie</button>
        <footer>This is my footer</footer>   
    </div>
  );
}

export default Footer;
