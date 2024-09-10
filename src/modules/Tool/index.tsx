import Tool_interface from "./interface";
import "style.css";

const Tool = ({
  name,
  icon,
  isActive,
  description = "no description",
  position = [0, 0],
  size = [0, 0],
}: Tool_interface) => {
  const [x, y] = position;
  const [width, height] = size;
  return (
    <div className={`tool-container ${isActive ? "active" : ""}`}>
      <img src={icon} alt={name} className="tool-icon" />
      <span className="tool-name">{name}</span>
      <span className="tool-description">{description}</span>
      <div
        className="tool"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
    </div>
  );
};

export default Tool;
