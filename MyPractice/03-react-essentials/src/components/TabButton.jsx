export default function TabButton({ children, onSelect, isSelected }) {
  //   console.log("hello inside"); // It'll be rendered nth times where n is the number of TabButton components are used
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
