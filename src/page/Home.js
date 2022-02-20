import useGnb from "../hooks/useGnb";

export default function Home() {
  const { increment, decrement } = useGnb();
  return (
    <div>
      <h1>HOME</h1>
      <section>
        <p>GNB의 카운터를 조정해봅시다</p>
        <button onClick={() => increment()}> + </button>
        <button onClick={() => decrement()}> - </button>
      </section>
    </div>
  );
}
