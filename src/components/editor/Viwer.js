import React from "react";

import "react-quill/dist/quill.snow.css";
import { ViewerWrap } from "./styled";

const Viewer = ({ contents }) => {
  return (
    <ViewerWrap>
      <div
        className="detail-container"
        dangerouslySetInnerHTML={{ __html: contents }}
      ></div>
    </ViewerWrap>
  );
};

export default Viewer;
