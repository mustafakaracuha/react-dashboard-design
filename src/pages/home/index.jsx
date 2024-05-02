import React from "react";
import Side from "../../components/side/index";
import Welcome from "../../components/welcome/index";
import Count from "../../components/count/index";
import Targets from "../../components/targets/index";

function index() {
    return (
        <div className="w-full h-full flex gap-20">
            <Side />
            <Welcome />
            <Count />
            <Targets />
        </div>
    );
}

export default index;
