import { createMemo, createSignal } from "solid-js";

function Memo1() {
  const [text, setText] = createSignal("");

  const reversedText = createMemo(() => text().split("").reverse().join(""));

  function inputText(ev) {
    setText(ev.target.value);
  }

  return (
    <div>
      <h1>Memo1</h1>

      <div>
        <label>
          文字列：
          <input type="text" value={text()} onInput={inputText} />
        </label>
      </div>
      <div>
        <div>反転した文字列：</div>
        {reversedText()}
      </div>
    </div>
  );
}

export default Memo1;
