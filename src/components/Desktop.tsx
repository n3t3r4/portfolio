import ProjetosIcon from "../assets/projetos.png";
import CurriculoIcon from "../assets/curriculo.png";
import ContatoIcon from "../assets/contato.png";
import InfoIcon from "../assets/info.png";

export function Desktop() {
  return (
    <>
      <div className="z-0 flex flex-col items-start justify-center pt-2 text-white">
        <div className="flex flex-col items-center m-3 cursor-pointer min-w-[80px] max-w-[80px] ">
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
        <div className="flex flex-col items-center m-3 cursor-pointer min-w-[80px]">
          <div>
            <img src={InfoIcon} className="max-w-[90px] my-[-20px]" />
          </div>
          <div>Informações</div>
        </div>
      </div>
    </>
  );
}
