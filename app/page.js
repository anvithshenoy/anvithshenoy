import { Profile, Projects, Skills } from "@/components/profile/myself";

const Home = () => {
  return (
    <div className="flex flex-col place-items-start gap-3">
      <h1 className="font-head text-5xl uppercase sm:text-6xl">
        Anvith Shenoy B
      </h1>
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
