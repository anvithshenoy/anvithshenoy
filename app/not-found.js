import { Error } from "@/components/Loader/Splash";
import Footer from "@/components/profile/footer";
import PageTransition from "./Animate";

const ErrorPage = () => {
  return (
    <PageTransition>
      <div className="mx-auto flex h-[calc(100svh-3.75rem)] flex-col items-center justify-center self-center md:aspect-video">
        <Error />
      </div>
      <Footer />
    </PageTransition>
  );
};

export default ErrorPage;
