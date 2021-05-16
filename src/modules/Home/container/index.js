import { connect } from "react-redux";
import Home from "../components/index";
import homeSelectors from "../selector";
import themeSelector from "../../Theme/selector";
import { setActiveBike } from "../actions";
import { setShowBookingForm } from "../../Booking/actions";
import { setCurrentTheme } from "../../Theme/actions";

const mapStateToProps = (state) => ({
  activeBike: homeSelectors.getActiveBike(state),
  currentTheme: themeSelector.getCurrentTheme(state),
});

const mapDispatchToProps = {
  setActiveBike,
  setShowBookingForm,
  setCurrentTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
