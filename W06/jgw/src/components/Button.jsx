export default function Button({ text, color = "yellow", children }) {
  let btnClick = () => {
    alert("클릭!");
  };
  return (
    <div>
      <button
        style={{ color }}
        onClick={btnClick}
        onContextMenu={() => {
          console.log("마오!");
        }}
      >
        {text}, {children}
      </button>
    </div>
  );
}
