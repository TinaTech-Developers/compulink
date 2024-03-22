"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchData } from "next-auth/client/_utils";

chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const APPLICATIONS_URL = "/api/events";
  const [events, setEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/applications");
      const applications = await response.json();
      setApplications(applications.applications);
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

  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Events", "Gallery", "Applicants", "Projects", ""],
      datasets: [
        {
          label: "Total Updates",
          data: [events.length, gallery.length, applications.length, 1, 2],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
        },
      ],
    });
    setChartOptions({
      plugins: {
        Legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Total Updates",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, [events.length, gallery.length, applications.length]);

  return (
    <>
      <div className="w-full md:col-span-2 relative ld:h-[70vh] h-[50vh] m-auto p-4 border rounded bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
