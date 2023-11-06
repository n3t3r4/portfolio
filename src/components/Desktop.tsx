import ProjetosIcon from "../assets/projetos.png";
import CurriculoIcon from "../assets/curriculo.png";
import ContatoIcon from "../assets/contato.png";

export function Desktop() {
  return (
    <>
      <div className="flex flex-col items-start justify-center pt-2">
        <div className="flex flex-col items-center m-3 cursor-pointer min-w-[80px] max-w-[80px]">
          <div>
            <img src={ProjetosIcon} className="max-w-[90px] my-[-20px]" />
          </div>
          <div>Projetos</div>
        </div>
        <div className="flex flex-col items-center m-3 cursor-pointer min-w-[80px]">
          <div>
            <img src={CurriculoIcon} className="max-w-[90px] my-[-20px]" />
          </div>
          <div>Currículo</div>
        </div>
        <div className="flex flex-col items-center m-3 cursor-pointer min-w-[80px]">
          <div>
            <img src={ContatoIcon} className="max-w-[90px] my-[-20px]" />
          </div>
          <div>Contato</div>
        </div>
      </div>
    </>
  );
}
