import Image from "next/image";

const edDetails: {
  year: {
    startYear: number;
    endYear?: number;
  };
  expertise: string;
  institution: string;
  grade?: number;
  type?: string;
}[] = [
  {
    year: {
      startYear: 2022,
      endYear: 2024,
    },
    expertise: "Computer Applications",
    type: "Master's",
    institution: "St Joseph Engineering College, Vamanjoor",
    grade: 8.62,
  },
  {
    year: {
      startYear: 2019,
      endYear: 2022,
    },
    expertise: "Computer Applications",
    type: "Bachelor's",
    institution: "Canara College",
    grade: 7.68,
  },
];

const Resume = () => {
  return (
    <>
      <div className="relative px-2.5 text-xl">
        <h2 className="indent-2.5 text-5xl">Experience</h2>
      </div>

      <div className="flex flex-col justify-start gap-5 divide-y px-2.5 sm:border-x">
        <div className="space-y-1.5 py-2.5">
          <h2 className="mb-3.5 indent-2.5 text-5xl">Expertise</h2>
          <p className="max-w-prose">
            CSS, ReactJS, Javascript, Adobe Photoshop, UI/UX
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-2.5 pb-5">
          <h2 className="w-full indent-2.5 text-5xl">HardSkill</h2>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={
                "https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              fill
              alt="Anvith Shenoy B"
              className="-z-10 object-cover"
            />
          </div>
        </div>
        <div className="space-y-1.5 py-2.5">
          <h2 className="mb-3.5 indent-2.5 text-5xl">SoftSkill</h2>
          <div className="inline-flex max-w-prose flex-wrap gap-1.5">
            {[
              "Creativity",
              "Time_Management",
              "Flexibility",
              "Communication",
              "Adaptability",
            ].map((el) => (
              <span
                key={el}
                className="rounded-full border px-3.5 py-1 lowercase"
              >
                #{el}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="indent-2.5 text-5xl">Education</h2>
        {edDetails.map((ed) => (
          <div
            key={ed.year.startYear}
            className="bg-fg text-bg grid grid-cols-2 items-center gap-1 rounded-2xl p-3.5"
          >
            <div className="font-head text-3xl">
              {[ed.year.startYear, ed.year.endYear].filter(Boolean).join(" - ")}
            </div>
            <div className="bg-bg text-fg ms-auto rounded-full px-3.5 py-1 font-bold">
              {ed?.type}
            </div>
            <p className="col-span-2 mt-3.5 max-w-prose text-lg">
              {ed.institution}
            </p>
            <p className="col-span-2 max-w-prose text-2xl">{ed.expertise}</p>
            <p className="col-span-2 max-w-prose text-lg">
              CGPA: {ed.grade}/10
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Resume;
