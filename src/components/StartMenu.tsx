import ProjetosIcon from "../assets/projetos.png";
import CurriculoIcon from "../assets/curriculo.png";
import ContatoIcon from "../assets/contato.png";
import InfoIcon from "../assets/info.png";
import { MdNavigateNext } from "react-icons/md";

interface StartMenu {
  visible: boolean;
}

export function StartMenu(props: StartMenu) {
  return (
    <>
      <div
        className={
          props.visible
            ? `bg-[#C0C0C0] shadow-2xl border-b-[1px] border-white absolute bottom-[43.8px]`
            : `hidden`
        }
      >
        <ul className="p-10 pt-2 pl-2">
          <li className="flex items-center cursor-pointer">
            <img src={ProjetosIcon} className="max-w-[50px]" /> Projetos
            <MdNavigateNext />
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={CurriculoIcon} className="max-w-[50px]" /> Currículo
            <MdNavigateNext />
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={ContatoIcon} className="max-w-[50px]" /> Contato
            <MdNavigateNext />
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={InfoIcon} className="max-w-[50px]" /> Informações
            <MdNavigateNext />
          </li>
        </ul>
      </div>
    </>
  );
}
