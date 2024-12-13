import ContactForm from "@/components/form/ContactForm";
import {
  Education,
  Experience,
  Profile,
  Skills,
} from "@/components/profile/myself";
import Projects from "@/components/profile/projects";

const Home = () => {
  return (
    <div className="flex flex-col place-items-start gap-3">
      <h1 className="font-head text-5xl uppercase sm:text-6xl">
        Anvith Shenoy B.
      </h1>
      <Profile />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <ContactForm />
    </div>
  );
};

export default Home;
