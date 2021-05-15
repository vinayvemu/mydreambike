import React from "react";
import { Drawer as AntdDrawer } from "antd";

import Footer from "./partials/Footer";
import LoadingOverlay from "../../utils/SpinnerOverlay";

const Drawer = ({
  title,
  width,
  onClose,
  closable,
  visible,
  content,
  footer,
  loading,
  footerStyles,
  ...rest
}) => (
  <AntdDrawer
    {...rest}
    title={title}
    placement="right"
    width={width}
    closable={closable}
    onClose={onClose}
    visible={visible}
  >
    {loading && <LoadingOverlay spin={rest.spin || false} />}
    {content}
    {footer && <Footer footerStyles={footerStyles}>{footer}</Footer>}
  </AntdDrawer>
);

export default Drawer;
