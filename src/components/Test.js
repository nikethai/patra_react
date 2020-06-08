import React, { useMemo } from "react";
import ReactWebChat, { createDirectLine } from "botframework-webchat";

import axios from "axios";

export default function Test() {
  const directLine = useMemo(() =>
    createDirectLine(
      { token: "SunfNWvSQqw.6-jB98azvRC4BwB2k1uY1-3sqHFlj3Iff74HG2UdeJE" },
      []
    )
  );
  return <ReactWebChat directLine={directLine} userId="tutaoidnheahihih" />;
}
