
export default function ToggleButton({ setOpen }) {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <path d="M 2 2.5 H 20" strokeWidth="3" stroke="black" strokeLinecap="round" />
        <path d="M 2 11.5 H 20" strokeWidth="3" stroke="black" strokeLinecap="round" />
        <path d="M 2 20.5 H 20" strokeWidth="3" stroke="black" strokeLinecap="round" />
      </svg>
    </button>
  );
}
