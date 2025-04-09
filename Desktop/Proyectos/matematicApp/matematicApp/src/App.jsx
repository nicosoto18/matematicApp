import { useState } from 'react'
import './App.css'
import VisualizationSet from './components/visualizationSet'
import { union, intersection, difference, symmetricDifference } from 'set-operations';

function App() {
  
  const [sets, setSets] = useState({
    setA: "",
    setB: "",
    setU: "",
  });

  const [operation, setOperation] = useState("union");
  const [preOperation, setPreOperation] = useState("union");
  const [resultado, setResultado] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSets((prevSet) => ({
      ...prevSet,
      [name]: value,
    }));
  };

  const isValid = preOperation === "complemento"
    ? sets.setA && sets.setU
    : sets.setA && sets.setB;


    const calculateOperation = (op) => {
      const A = sets.setA.split(",").map(item => item.trim());
      const B = sets.setB.split(",").map(item => item.trim());
      const U = sets.setU.split(",").map(item => item.trim());
    
      let resultado = [];
    
      switch (op) {
        case "union":
          resultado = union(A, B);
          break;
        case "interseccion":
          resultado = intersection(A, B);
          break;
        case "diferencia":
          resultado = difference(A, B);
          break;
        case "diferenciaSimetrica":
          resultado = symmetricDifference(A, B);
          break;
        case "complemento":
          resultado = difference(U, A);
          break;
        default:
          break;
      }
    
      setResultado(resultado.join(", "));
    };

  const handleChangeSelectOption = (e) => {
    const newPreOperation = e.target.value;
    setPreOperation(newPreOperation);

    // Si la operación es complemento, vacía el conjunto B
    if (newPreOperation === "complemento") {
      setSets((prevSets) => ({
        ...prevSets,
        setB: "", // Limpia setB al cambiar a complemento
      }));
    }
  };

 const handleClick = (e) => {
  e.preventDefault();
  setOperation(preOperation);  
  calculateOperation(preOperation);
};

  return (
    <>
      <h2>Calculadora de Conjuntos</h2>
      
      <div className="bg-gray-100 text-left mx-auto my-6 w-full md:w-[70%] lg:w-[45%]">
        <form className="p-3">
          <section className="mt-3">
            <div className="xl:flex">
              {/* Conjunto A */}
              <div className="my-2 xl:w-1/2 mr-auto">  
                <div className='flex items-center justify-center'>
                  <h4>A = {"{"}</h4>
                  <input
                    type="text"
                    name="setA"
                    onChange={handleChange}
                    value={sets.setA}
                  />
                  <p>{"}"}</p>

                </div>
              </div>

              {/* Conjunto B */}
              {preOperation !== "complemento" && (
                <div className="my-2 xl:w-1/2 ml-auto">
                  <div className='flex items-center justify-center'>
                    <h4>B = {"{"}</h4>
                    <input
                      type="text"
                      name="setB"
                      onChange={handleChange}
                      value={sets.setB}
                      />
                    <p>{"}"}</p>
                    </div>
                </div>
              )}

              {/* Conjunto U */}
              {preOperation === "complemento" && (
                <div className="my-2 flex justify-center items-center xl:w-1/2 ml-auto">
                  <label>
                    <h4>U = {"{"}</h4>
                  </label>
                  <input
                    type="text"
                    name="setU"
                    onChange={handleChange}
                    value={sets.setU}
                  />
                  <p>{"}"}</p>
                </div>
              )}
            </div>
          </section>

          <section className="flex mt-7">
            <select
              className="block mx-auto"
              value={preOperation}
              onChange={handleChangeSelectOption}
            >
              <option value="union">Unión</option>
              <option value="interseccion">Intersección</option>
              <option value="diferencia">Diferencia</option>
              <option value="diferenciaSimetrica">Diferencia Simétrica</option>
              <option value="complemento">Complemento</option>
            </select>
            <button
              className="block mx-auto w-[30%]"
              onClick={handleClick}
              disabled={!isValid}
            >
              Calcular
            </button>
          </section>
        </form>
      </div>

      {resultado.length !== 0 && (
        <VisualizationSet result={resultado} operation={operation} />
      )}
    </>
  );
}

export default App;