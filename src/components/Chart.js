"use client";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
Chartjs.register(ArcElement, Tooltip, Legend);

function Chart() {
  const APPLICATIONS_URL = "http://localhost:3000/api/events";
  const [events, setEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [applications, setApplications] = useState([]);
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/applications");
      const applications = await response.json();
      setApplications(applications.applications);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/project");
      const project = await response.json();
      setProject(project.project);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(APPLICATIONS_URL);
      const events = await response.json();
      setEvents(events.events);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/gallery-upload");
      const gallery = await response.json();
      setGallery(gallery.gallery);
    }
    fetchData();
  }, []);

  const data = {
    labels: ["Events", "Gallery", "Applicants", "Projects"],
    datasets: [
      {
        label: "data",
        data: [
          events.length,
          gallery.length,
          applications.length,
          project.length,
        ],
        backgroundColor: ["black", "blue", "red", "gray"],
        borderColor: ["black", "blue", "red", "gray"],
      },
    ],
  };

  const options = {};
  return (
    <div className="w-[40vh] h-[40vh]">
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
}

export default Chart;
