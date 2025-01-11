import Footer from "@/components/profile/footer";
import {
  Education,
  Experience,
  Profile,
  Skills,
} from "@/components/profile/myself";
import Projects from "@/components/profile/projects";
import PageTransition from "./Animate";

const Home = () => {
  return (
    <PageTransition>
      <h1 className="font-head text-5xl uppercase sm:text-6xl">
        Anvith Shenoy B.
      </h1>
      <Profile />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </PageTransition>
  );
};

export default Home;
