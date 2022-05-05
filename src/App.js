import "./App.css";
import { Router } from "./routes";
import { ThemeComponent } from "./theme";
function App() {
  return (
    <ThemeComponent>
      <Router />
    </ThemeComponent>
  );
}

export default App;
