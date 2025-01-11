"use client";

import { useEffect } from "react";

const useCustomCursor = () => {
  useEffect(() => {
    // Create the cursor element dynamically
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    cursor.style.aspectRatio = "1/1"; // Default size
    cursor.style.height = "0.5rem"; // Default size
    document.body.appendChild(cursor);

    // Function to move the cursor with the mouse
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Check if the cursor is over an element with `data-click=true`
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target && target.closest("[data-click='true']")) {
        cursor.style.width = "1.5rem"; // Expand size by 10px
        cursor.style.height = "1.5rem"; // Expand size by 10px
      } else {
        cursor.style.width = "0.5rem"; // Default size
        cursor.style.height = "0.5rem"; // Default size
      }
    };

    // Function to handle ripple effect on click
    const rippleEffect = (e) => {
      const ripple = document.createElement("div");
      ripple.classList.add("ripple");
      document.body.appendChild(ripple);

      // Get mouse position on click
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      ripple.style.left = `${mouseX}px`;
      ripple.style.top = `${mouseY}px`;

      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    // Add event listeners
    document.body.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("click", rippleEffect);

    // Cleanup on unmount
    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("click", rippleEffect);
      cursor.remove();
    };
  }, []);

  return null;
};

export default useCustomCursor;
