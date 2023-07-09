import { useRoutes, A } from "@solidjs/router";
import { routes } from "../routes";

function MainLayout() {
  // どういう仕組みでこれで上手くいくんだろうか？
  const Routes = useRoutes(routes[0].children);

  return (
    <div>
      <div>
        <header>
          <A href="/">home</A> |<A href="/sandbox01">sandbox01</A> |
        </header>
        <div>
          レイアウト
        </div>
      </div>

      <Routes />
    </div>
  );
}

export default MainLayout;
