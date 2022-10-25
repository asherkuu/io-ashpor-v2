import React from "react";

import { View } from "./styled";

import "react-quill/dist/quill.snow.css";

const Viewer = ({ contents }) => {
  return (
    <View>
      <div
        className="detail-container"
        dangerouslySetInnerHTML={{ __html: contents }}
      />
    </View>
  );
};

export default Viewer;
