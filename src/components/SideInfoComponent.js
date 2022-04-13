import React from "react";

const SideInfoComponent = (props) => {
    return (
        <>
           <h4 className="text-base">{props.title}</h4>
           <h3 className="text-[1.5rem] font-bold">{props.value}</h3>
        </>
    )
}

export default SideInfoComponent;