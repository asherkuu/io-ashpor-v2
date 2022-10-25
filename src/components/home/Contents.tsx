import React from "react";
import Skills from "./Skills";
import Bio from "./Bio";
import WorkExp from "./WorkExp";
import OnTheWeb from "./OnTheWeb";

const Contents = ({ t }) => {
  return (
    <React.Fragment>
      <Skills />
      {/* <Bio /> */}
      <WorkExp />
      <OnTheWeb />
    </React.Fragment>
  );
};

export default Contents;
