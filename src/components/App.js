import "../styles/App.scss";
import Header from "./Header";
import LocationInput from "./LocationInput";
import Loader from "./Loader";
import LocationLabel from "./LocationLabel";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastCard from "./ForecastCard";
import Footer from "./Footer";

function App() {
  return (
    <div className="fwf__main container">
      <Header />
      <hr className="fwf__hr" />
      <LocationInput />
      <Loader />
      <LocationLabel />
      <CurrentWeatherCard />
      <ForecastCard />
      <Footer />
    </div>
  );
}

export default App;
