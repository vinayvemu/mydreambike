import { connect } from "react-redux";
import Theme from "../components/index";

import { setCurrentTheme } from "../actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setCurrentTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
