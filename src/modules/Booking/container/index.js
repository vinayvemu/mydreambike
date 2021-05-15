import { connect } from "react-redux";
import BookingDrawer from "../components/index";
import bookingSelector from "../selector";
import homeSelectors from "../../Home/selector";
import { setShowBookingForm, setUserData } from "../actions";

const mapStateToProps = (state) => ({
  showBookingForm: bookingSelector.getShowBookingForm(state),
  activeBike: homeSelectors.getActiveBike(state),
});

const mapDispatchToProps = {
  setShowBookingForm,
  setUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingDrawer);
