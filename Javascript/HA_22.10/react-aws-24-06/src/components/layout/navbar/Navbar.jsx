import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <button onClick={() => alert("Hallo von Home")}>Homie</button>
    </div>
  );
}

export default Navbar;


