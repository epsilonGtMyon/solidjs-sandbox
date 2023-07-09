import { useRoutes } from "@solidjs/router";
import { routes } from "./common/routes";

function App() {
  // @solidjs/routerでインポートしたRoutesではなくuseRoutesの結果を使う
  // useRoutesを使うと <Routes base={base}>{routes as any}</Routes> というjsxが返されるらしい
  const Routes = useRoutes(routes);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
