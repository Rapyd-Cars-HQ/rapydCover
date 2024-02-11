import React from "react";

function TabTitle({ id, title, activeTab, setActiveTab }) {
  const handTabSwitch = () => {
    setActiveTab(id);
  };

  return (
    <main
      onClick={handTabSwitch}
      className={activeTab === id ? "activeS" : "notActiveS"}
    >
      <ul className=" tabTitle">
        <li id={id} className=" ">
          <h4>{title}</h4>
        </li>
      </ul>
    </main>
  );
}

export default TabTitle;
