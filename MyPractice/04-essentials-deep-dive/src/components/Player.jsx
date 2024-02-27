import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleEditClick = () => {
    // state updates are not performed instantly, but at some point in the future (when react has time for it). So we should pass a function inside the state updating function.

    // setIsEditing(!isEditing); // schedules a state update to true
    // setIsEditing(!isEditing); // it also true, as in both the case, isEditing is in same state, once the component is rerendered then the isEditing value will be changed. as here both lines of setIsEditing is accessing the previous isEditing value, so both will assign it to true instead of  true followed by false

    setIsEditing((editing) => !editing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing)
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
