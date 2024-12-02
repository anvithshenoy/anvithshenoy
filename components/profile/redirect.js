"use client";

const RedirectHeader = ({ link, text, subtext }) => {
  const handleRedirect = () => {
    window.open(link, "_blank");
  };

  return (
    <h4
      className={`mb-1 text-nowrap text-lg font-bold leading-none ${link && "cursor-pointer"}`}
      onClick={link ? handleRedirect : undefined}
      title={subtext ?? ""}
    >
      {text}
    </h4>
  );
};

export default RedirectHeader;
