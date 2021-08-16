import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/WeatherCard";
import ToggleTheme from "./components/ToggleTheme";
import { useSelector } from "react-redux";

export default function App() {
  const theme = useSelector(state => state.theme);
  return (
    <div className={theme ? "App dark" : "App"}>
      <ToggleTheme />
      <Form />
      <Card />
    </div>
  );
}
