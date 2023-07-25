import React from "react";
import ButtonWithIconComponent from "./ButtonWithIconComponent";
import InputWitchIconComponent from "./InputWitchIconComponent";

function SideBarComponent({}) {
  return (
    <div>
      <div className="sidebartopcontainer">
        <ButtonWithIconComponent
          src={"https://cdn-icons-png.flaticon.com/128/1946/1946488.png"}
          text={"Home"}
          buttonclass={"sidebarTopButtons"}
          imgclass={"homeTaskIcon"}
          textclass={"homeTaskText"}
        />
        <InputWitchIconComponent />
      </div>
      <div className="sidebarcitycolumn">
        <div className="sidebarcity">
          <p>İstanbul</p>
          <p>20°C</p>
        </div>
        <div className="sidebarcity">
          <p>İstanbul</p>
          <p>20°C</p>
        </div>
        <div className="sidebarcity">
          <p>İstanbul</p>
          <p>20°C</p>
        </div>
      </div>
    </div>
  );
}

export default SideBarComponent;
