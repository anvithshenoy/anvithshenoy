"use client";

import Matter from "matter-js";
import { useEffect, useRef } from "react";

const PhysicsSVG = () => {
  const sceneRef = (useRef < SVGSVGElement) | (null > null);
  const engineRef = (useRef < Matter.Engine) | (null > null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // 1. Create engine and world
    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // 2. Create renderer (we will manually render to SVG)
    const width = 500;
    const height = 500;

    // 3. Create bodies
    const circle = Matter.Bodies.circle(250, 50, 30, {
      restitution: 0.8,
    });
    const ground = Matter.Bodies.rectangle(250, 480, 500, 40, {
      isStatic: true,
    });

    Matter.World.add(world, [circle, ground]);

    // 4. Run engine
    Matter.Engine.run(engine);

    // 5. Render loop for SVG
    const render = () => {
      if (!sceneRef.current) return;
      const [circleEl, groundEl] = sceneRef.current.children;

      // Update SVG positions
      circleEl.setAttribute("cx", circle.position.x.toString());
      circleEl.setAttribute("cy", circle.position.y.toString());

      groundEl.setAttribute("x", (ground.position.x - 250).toString());
      groundEl.setAttribute("y", (ground.position.y - 20).toString());

      requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <svg
      ref={sceneRef}
      width={500}
      height={500}
      style={{ border: "1px solid black" }}
    >
      <circle r={30} fill="red" />
      <rect width={500} height={40} fill="green" />
    </svg>
  );
};

export default PhysicsSVG;
