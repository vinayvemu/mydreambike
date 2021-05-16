import { connect } from "react-redux";
import Theme from "../components/index";
import DynamicThemeSelector from "../selector";
import { setCurrentTheme } from "../actions";

const mapStateToProps = (state) => ({
  currentTheme: DynamicThemeSelector.getCurrentTheme(state),
});

const mapDispatchToProps = {
  setCurrentTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);
