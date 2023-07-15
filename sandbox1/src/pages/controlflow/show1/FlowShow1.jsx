import { createSignal, Show } from "solid-js";

function FlowShow1() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h1>show</h1>
      <div>
        <div>
          <div>count: {count()}</div>
          <button onClick={() => setCount((prev) => prev + 1)}>
            カウントアップ
          </button>
        </div>

        <div>
          Showコンポーネント：
          <Show when={count() % 2 === 0} fallback={"奇数"}>
            偶数
          </Show>
        </div>
        <div>
          参考演算子：
          {count() % 2 === 0 ? "偶数" : "奇数"}
        </div>
      </div>
    </div>
  );
}

export default FlowShow1;
