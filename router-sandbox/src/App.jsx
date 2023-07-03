//import styles from './App.module.css';
import { Routes, Route, A } from "@solidjs/router";
import { Home } from "./pages/home/Home";
import { Sandbox01 } from "./pages/sandbox01/Sandbox01";
import { Sandbox02 } from "./pages/sandbox02/Sandbox02";

// RoutesとRouteでルーティング
// 遷移はAというコンポーネントで
function App() {
  return (
    <div>
      <div>
        <A href="/">home</A> |
        <A href="/sandbox01">sandbox01</A> |
        <A href="/sandbox02">sandbox02</A> |
        <A href="/sandbox02" replace>sandbox02(replace)</A> |
      </div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/sandbox01" component={Sandbox01} />
        <Route path="/sandbox02" component={Sandbox02} />
      </Routes>
    </div>
  );
}

export default App;
