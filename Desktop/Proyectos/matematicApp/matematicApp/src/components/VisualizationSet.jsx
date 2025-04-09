import { UnionGraphic, IntersectionGraphic, SubtractionGraphic, SimetricDiferenceGraphic, ComplementGraphic } from "./graphics/graphics";

const VisualizationSet = ({ result, operation }) => {
    
    let iconOperation = ""; 

    if(result) {
        switch(operation) {
            case "union":
                iconOperation = "∪"; // Representa la unión
                break;
            case "interseccion":
                iconOperation = "∩"; // Representa la intersección
                break;
            case "diferencia":
                iconOperation = "−"; // Representa la intersección
                break;
            case "diferenciaSimetrica":
                iconOperation = "Δ"; // Representa la intersección
                break;
            case "complemento":
                iconOperation = "¬"; // Representa la intersección
                break;
            default:
                iconOperation = "Operación desconocida"; // Valor por defecto si no coincide
                break;
        }
    }
        


    return (
      <div className="bg-gray-100 text-left w-[45%] mx-auto my-6 p-4 rounded h-45">
        {result && (
          <div>
            <p className="font-semibold mb-2">Resultado:</p>

             <div className="flex">
              <div className="flex">
                {/* voy a cambiar todo */}
                 A {iconOperation} B = {"{"}<p>{result}</p>{"}"}
              </div>
            </div> 

            <div className="mt-14 bg-red-300 w-[180px] mx-auto ">
              {
                operation =="union"? <UnionGraphic/>
                : operation == "interseccion" ? <IntersectionGraphic/>
                : operation == "diferencia"  ? <SubtractionGraphic/>
                : operation == "diferenciaSimetrica" ? <SimetricDiferenceGraphic/>
                : operation == "complemento" && <ComplementGraphic/>
              }

            </div>

          </div>
        )}
      </div>
    );
  };
export default VisualizationSet;