import { useLocation, useSearchParams } from "@solidjs/router";

function Sandbox02() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(`location.state`, location.state);
  console.log(`searchParams`, { ...searchParams });
  return (
    <div>
      <div>sandbox02</div>
      <div>console.logでパラメータだしてみる</div>
    </div>
  );
}

export { Sandbox02 };
