import { useRoutes, A } from "@solidjs/router";
import { routes } from "../routes";

function MainLayout() {
  const Routes = useRoutes(routes[0].children);

  return (
    <div>
      <div>
        <header>
          <A href="/">home</A>
          <div>
            <A href="/basic/signal1">signal1</A> |
            <A href="/basic/signal2">signal2</A> |
            <A href="/basic/effect1">effect1</A> |
            <A href="/basic/memo1">memo1</A> |
          </div>
          <div>
            <A href="/control-flow/for1">for1</A> |
            <A href="/control-flow/show1">show1</A> |
            <A href="/control-flow/switch1">switch1</A> |
          </div>
        </header>
      </div>

      <Routes />
    </div>
  );
}

export default MainLayout;
