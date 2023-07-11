import { useRoutes } from "@solidjs/router";
import { routes } from "./common/routes";

function App() {
  const Routes = useRoutes(routes);
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
