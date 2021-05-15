import React from "react";
import { notification } from "antd";

const successNotification = (message, dataKeySuffix) =>
  notification.success({
    message: (
      <span {...{ [`data-test-${dataKeySuffix}`]: true }}>{message}</span>
    ),
  });

export default successNotification;
