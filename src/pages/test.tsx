import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  display: block;
  margin: 0 auto;
  border: 1px solid #ccc;
  vertical-align: top; width: 782px; height: 559px;
  overflow-clip-margin: content-box;
    overflow: clip;
    overflow-x: ;
    overflow-y: ;
`;

const DrawPeople = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const drawPerson = (x: number, y: number, isMale: boolean) => {
          ctx.beginPath();
          ctx.arc(x, y, 30, 0, Math.PI * 2);
          ctx.fillStyle = isMale ? 'blue' : 'pink';
          ctx.fill();
          ctx.closePath();
        };

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw 3 males
        drawPerson(100, 100, true);
        drawPerson(200, 100, true);
        drawPerson(300, 100, true);

        // Draw 2 females
        drawPerson(150, 200, false);
        drawPerson(250, 200, false);
      }
    }
  }, []);

  return <Canvas ref={canvasRef} width={500} height={300}></Canvas>;
};

export default DrawPeople;
