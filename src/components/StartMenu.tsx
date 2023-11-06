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
        <ul className="p-10 pl-2 pt-2">
          <li>MENU ITEM</li>
          <li>MENU ITEM</li>
          <li>MENU ITEM</li>
          <li>MENU ITEM</li>
          <li>MENU ITEM</li>
        </ul>
      </div>
    </>
  );
}
