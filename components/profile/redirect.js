"use client";

const RedirectHeader = ({ link, text }) => {
  const handleRedirect = () => {
    window.open(link, "_blank");
  };

  return (
    <h4
      className={`mb-1 indent-1 text-lg font-bold leading-none ${link && "cursor-pointer transition-all duration-300 ease-in hover:underline"}`}
      onClick={link ? handleRedirect : undefined}
    >
      {text}
    </h4>
  );
};

export default RedirectHeader;
