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
      const res = await fetch("/api/data");
      const data = await res.json();

      setProjects(data.projects || []);
      setSkills(data.skills || []);
      setExperience(data.experience || []);
      setEducation(data.education || []);
      setLinks(data.socialLinks || []);
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
