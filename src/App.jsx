import { useState } from "react";
import Cards from "./Cards";

function App() {
  const [listColor, setListColor] = useState([]);
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#202020");
  const [borderColor, setBorderColor] = useState("#202020");
  const [isDisabled, setIsDisabled] = useState(false);

  const showError = () => {
    if (nome.length < 3) {
      return "Nome deve ter mais do que 3 caracteres.";
    } else if (cor.length < 7) {
      return "Cor deve ter mais do que 6 caracteres.";
    }
  };

  const handleForm = (event) => {
    event.preventDefault();

    const colorsList = { nome: nome, cor: cor };

    if (nome.length < 3 || cor.length < 6) {
      setBackgroundColor("#221515");
      setBorderColor("#FF7070");
      setIsDisabled(true);

      setTimeout(() => {
        setIsDisabled(false);
      }, 2000);
    } 

    if (nome.length > 3 && cor.length > 6) {
      setBackgroundColor("#202020");
      setBorderColor("#202020");
      alerta("ok")
      setListColor((prevColorList) => [...prevColorList, colorsList]);
    }
  };

  return (
    <>
      <main className="relative w-full">
        <div className="flex justify-center py-8 flex-col mx-auto w-3/5 gap-2">
          <div
            className="flex flex-col gap-4 p-8 rounded-2xl"
            style={{
              backgroundColor: backgroundColor,
              border: `solid 1px ${borderColor}`,
            }}
          >
            <h1 className="text-white font-extrabold text-3xl uppercase">
              adicionar nova cor
            </h1>
            <form className="flex gap-5 flex-col" onSubmit={handleForm}>
              <fieldset className="flex gap-8 flex-wrap md:flex-nowrap">
                <div className="flex flex-col md:w-1/2">
                  <label htmlFor="nome" className="text-white/60">
                    nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="rounded-md w-full h-8 px-2 text-white/40"
                    style={{ backgroundColor: "#353535" }}
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <label htmlFor="cor" className="text-white/60">
                    cor
                  </label>
                  <input
                    type="text"
                    name="cor"
                    value={cor}
                    onChange={(e) => setCor(e.target.value)}
                    placeholder="insira sua cor no formato Hexadecimal"
                    className="rounded-md w-full h-8 px-2  text-white/60"
                    style={{ backgroundColor: "#353535" }}
                  />
                </div>
              </fieldset>
              <input
                type="submit"
                value="ADICIONAR"
                disabled={isDisabled}
                className="self-end rounded-md text-white bg-green-400 px-6 py-2 font-bold cursor-pointer disabled:opacity-40"
              />
            </form>
          </div>

          {isDisabled && <div className="-mt-1" style={{color:"#FF7070"}}>{showError()}</div>}

          <div className="flex flex-wrap p-8 flex-col gap-8">
            <h1 className="text-white font-extrabold text-3xl uppercase">
              cores favoritas
            </h1>
            <div className="flex flex-wrap w-full gap-4 justify-between">
              {listColor &&
                listColor.map((favColor, index) => {
                  return (
                    <Cards
                      nome={favColor.nome}
                      cor={favColor.cor}
                      key={index}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
