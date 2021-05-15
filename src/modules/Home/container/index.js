import { connect } from "react-redux";
import Home from "../components/index";
import homeSelectors from "../selector";
import { setActiveBike } from "../actions";
import { setShowBookingForm } from "../../Booking/actions";
// import { bookingSelector } from "../../Booking/selector";

const mapStateToProps = (state) => ({
  activeBike: homeSelectors.getActiveBike(state),
  //   showBookingForm: bookingSelector.getShowBookingForm(state),
});

const mapDispatchToProps = {
  setActiveBike,
  setShowBookingForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
