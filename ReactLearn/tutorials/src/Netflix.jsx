import React from "react";
import Sdata from "./NetflixSdata";
import Card from "./NetflixCard";

const Netflix = () => {
    
    return (
        <Card
        key={Sdata[1].id}
        sname={Sdata[1].sname}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        links={Sdata[1].links}
        />
        );
    
}

export default Netflix;