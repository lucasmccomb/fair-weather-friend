import "../styles/App.scss";
import CurrentWeatherCard from "./CurrentWeatherCard";
import Footer from "./Footer";
import ForecastCard from "./ForecastCard";
import Header from "./Header";
import LocationInput from "./LocationInput";
import LocationLabel from "./LocationLabel";
import Loader from "./Loader";

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
