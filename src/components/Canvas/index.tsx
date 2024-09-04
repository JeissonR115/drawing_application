import canvas_interface from "./interface";
const Canvas = ({width,height,backgroundColor,style,}: canvas_interface) => {
  const example = ():void => {
    const canvas = document.querySelector("canvas");
    const ctx =  canvas?.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "green";
      ctx.fillRect(10,10,200,200)
    }

  }
  return (
    <canvas
      id="canvas"
      width={width}
      height={height}
      style={{ backgroundColor: backgroundColor, ...style }}
      onWheel={example}
    ></canvas>
  );
};

export default Canvas;
