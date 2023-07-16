import { Switch, createSignal } from "solid-js";
import "./flowSwitch.css";

function FlowSwitch1() {
  const [value1, setValue1] = createSignal("1");

  return (
    <div class="flowSwitch1">
      <div class="flowSwitch1-tab">
        <div class="flowSwitch1-tabHeader">
          <div class="flowSwitch1-tabHeaderItem" onClick={() => setValue1("1")}>
            内容1
          </div>
          <div class="flowSwitch1-tabHeaderItem" onClick={() => setValue1("2")}>
            内容2
          </div>
          <div class="flowSwitch1-tabHeaderItem" onClick={() => setValue1("3")}>
            内容3
          </div>
        </div>
        <div class="flowSwitch1-tabContent">
          <Switch>
            <Match when={value1() === "1"}>
              <pre>内容1を表示します。</pre>
            </Match>
            <Match when={value1() === "2"}>
              <pre>内容2を表示します。</pre>
            </Match>
            <Match when={value1() === "3"}>
              <pre>内容3を表示します。</pre>
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default FlowSwitch1;
