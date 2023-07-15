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
        createMemoではなく純粋な関数でも同様の事はできるらしい
        ただし、レンダリングの都度呼ばれたりするので キャッシュが利く点ではよい
      </div>

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
