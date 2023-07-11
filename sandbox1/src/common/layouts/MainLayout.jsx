import { useRoutes, A } from "@solidjs/router";
import { routes } from "../routes";

function MainLayout() {
  const Routes = useRoutes(routes[0].children);

  return (
    <div>
      <div>
        <header>
          <A href="/">home</A> | 
          <A href="/basic/signal1">signal1</A> | 
          <A href="/basic/signal2">signal2</A> | 
          <A href="/basic/memo1">memo1</A> |
        </header>
      </div>

      <Routes />
    </div>
  );
}

export default MainLayout;
