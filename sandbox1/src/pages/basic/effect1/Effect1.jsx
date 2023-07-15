import { createEffect, createSignal, onCleanup } from "solid-js";

function Effect1() {
  const [value1, setValue1] = createSignal("");

  createEffect(() => {
    const bodyElem = document.querySelector("body");
    let effect1Elem = bodyElem.querySelector(".effect1");
    if (effect1Elem == undefined) {
      effect1Elem = document.createElement("div");
      effect1Elem.classList.add("effect1");
      bodyElem.append(effect1Elem)
    }

    effect1Elem.textContent = value1()
  });

  onCleanup(() => {
    let effect1Elem = document.querySelector("body .effect1");
    effect1Elem.remove()
  });

  return (
    <div>
      <h1>Effect1</h1>
      <div>
        signalの内容をもとにDOMを変更したりするときに使うらしい。
        effectの中ではsinnalをなるべく変更しないほうがいいみたい。
        いろいろややこしそう
      </div>

      <lavel>
        input:
        <input
          type="text"
          value={value1()}
          onInput={(e) => setValue1(e.target.value)}
        />
      </lavel>
    </div>
  );
}

export default Effect1;
