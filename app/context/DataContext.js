"use client";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [socialLinks, setLinks] = useState([]);

  const fetchData = async () => {
    try {
      const projectsRes = await fetch("/api/projects");
      const projectsData = await projectsRes.json();
      setProjects(projectsData.projects || []);

      const skillsRes = await fetch("/api/skills");
      const skillsData = await skillsRes.json();
      setSkills(skillsData.skills || []);

      const experienceRes = await fetch("/api/experience");
      const experienceData = await experienceRes.json();
      setExperience(experienceData.experience || []);

      const educationRes = await fetch("/api/education");
      const educationData = await educationRes.json();
      setEducation(educationData.education || []);

      const linkRes = await fetch("/api/socialLinks");
      const linkData = await linkRes.json();
      setLinks(linkData.socialLinks || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ projects, skills, experience, education, socialLinks }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
