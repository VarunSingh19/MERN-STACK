import React from "react";
import Sdata from "./NetflixSdata";
import Card from "./NetflixCard";

const Hbo = () => {
    
    return (
        <Card
        key={Sdata[2].id}
        sname={Sdata[2].sname}
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        links={Sdata[2].links}
        />
        );
    
}

export default Hbo;