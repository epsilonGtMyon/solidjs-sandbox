import { onCleanup, onMount } from "solid-js";
import { useNavigate } from "@solidjs/router";

function Sandbox01() {
  const navigate = useNavigate();
  console.log(`sandbox01`);
  onMount(() => {
    console.log(`sandbox01:mount`);
  });
  onCleanup(() => {
    console.log(`sandbox01:cleanup`);
  });

  function toSandbox02() {
    navigate(`/sandbox02`);
  }
  function toSandbox02Replace() {
    navigate(`/sandbox02`, { replace: true });
  }

  function toSandbox02Param() {
    // クエリパラメータつけるのはこれが正しいの？
    navigate(`/sandbox02?aaa=111`, { state: { a01: "a" } });
  }

  return (
    <div>
      sandbox01
      <div>
        ライフサイクルをconsoleに表示
      </div>
      <div>
        通常遷移
        <button onClick={toSandbox02}>sandbox02</button>
      </div>
      <div>
        replaceで遷移
        <button onClick={toSandbox02Replace}>sandbox02</button>
      </div>
      <div>
        パラメータつけて遷移
        <button onClick={toSandbox02Param}>sandbox02</button>
      </div>
    </div>
  );
}

export { Sandbox01 };
