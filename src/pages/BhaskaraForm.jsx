import { useState } from "react";
import "./styles/bhaskara.css";

const BhaskaraForm = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [resultadoX1, setResultadoX1] = useState();
  const [resultadoX2, setResultadoX2] = useState();
  const [erro, setErro] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setResultadoX1("");
    setResultadoX2("");
    setErro("");
    if (!a || !b || !c) {
      setErro("Informe todos os Coeficientes!");
    } else {
      let delta = b ** 2 - 4 * a * c; //** É elevado ao quadrado
      //Math.sqrt raiz quadrada
      //Math.sqrt raiz quadrada
      console.log(); //Para achar problemas no código
      if (!(Math.sign(delta) === -1 || Math.sign(delta) === -0)) {
        //! está negando
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        setResultadoX1(x1);
        setResultadoX2(x2);
      } else {
        setErro("Não existem raízes reais, pois o delta é negativo!");
      }
    }
  };

  return (
    <div class="calculadora">
      <h2>Calculadora de Bhaskara</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label class="botoes">
            Coeficiente A:
            <br></br>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label class="botoes">
            Coeficiente B:
            <br></br>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label class="botoes">
            Coeficiente C:
            <br></br>
            <input
              type="number"
              value={c}
              onChange={(e) => setC(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Calcular</button>
      </form>
      <div>
        <p class="Raiz">Raíz 1: {resultadoX1}</p>
        <p class="Raiz">Raíz 2: {resultadoX2}</p>
        <p class="erro">Erro: {erro}</p>
      </div>
    </div>
  );
};

export default BhaskaraForm;
