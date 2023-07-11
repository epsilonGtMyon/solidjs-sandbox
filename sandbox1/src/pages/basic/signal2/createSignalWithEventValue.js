import { createSignal } from "solid-js";

function createSignalWithEventValue(value, options) {
  const [getter, setter] = createSignal(value, options);

  /**
   * InputEventのハンドリングを内包
   * @param ev
   */
  function handleEvent(ev) {
    const value = ev.target.value;
    setter(value);
  }

  return [getter, setter, handleEvent];
}

export { createSignalWithEventValue };
