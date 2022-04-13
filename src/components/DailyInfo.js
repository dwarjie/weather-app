import React from "react";

// component
import DailyInfoComponent from "./DailyInfoComponent";

const DailyInfo = () => {
    return (
        <div className="w-full sm: mt-16">
            <ul>
                <DailyInfoComponent day="Sunday"/>
                <DailyInfoComponent day="Monday"/>
                <DailyInfoComponent day="Tuesday"/>
                <DailyInfoComponent day="Wednesday"/>
                <DailyInfoComponent day="Thursday"/>
                <DailyInfoComponent day="Friday"/>
                <DailyInfoComponent day="Saturday"/>
            </ul>
        </div>
    );
}

export default DailyInfo;