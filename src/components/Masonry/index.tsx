import React from "react";

interface MasonryProps {
  children: React.ReactNode;
}

const Masonry = ({ children }: MasonryProps) => {
  return (
    <section className="masonryLayout">
      {React.Children.map(children, (child, i) => (
        <div key={i} className="masonryCard">
          {child}
        </div>
      ))}
    </section>
  );
};

export default Masonry;
