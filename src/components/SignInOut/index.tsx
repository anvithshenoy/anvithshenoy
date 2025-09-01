import { signIn, signOut, useSession } from "next-auth/react";

interface BtnProps {
  text?: string | React.ReactNode;
  className?: string;
}

export const AuthBtn: React.FC<BtnProps> = ({ text, className }) => {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <form
        action={async () => {
          await signOut();
        }}
      >
        <button type="submit" className={className}>
          {text ?? "Sign Out"}
        </button>
      </form>
    );
  }
  return (
    <form
      action={async () => {
        await signIn("google");
      }}
    >
      <button type="submit" className={className}>
        {text ?? "Sign In"}
      </button>
    </form>
  );
};
