import { React } from "react";

function App() {
  const styles = {
    main: {
        width: "100%",/* ancho, se puede definir mediante porcentajes o pixeles; mejor en porcentaje que en pixceles */
        height: "10%",/* altura */
        backgroundColor: "#FFD400", /* color de fondo*/
        border: "1px", /* para centrar */
    },
    inputText: {
      padding: "10px",
      color: "red",
    },
  };
  return (
    <div className="main" style={styles.main}>
        <img src="../img/logoUAM.png"></img>
      <input type="text" style={styles.inputText}></input>
    </div>
  );
}
export default App;