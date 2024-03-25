import ApplicationForm from "@/components/ApplicationForm";
import React from "react";

export async function generateStaticParams() {
  const response = await fetch("http://localhost:3000/api/vaccant/");
  const vaccant = await response.json();
  return vaccant.vaccant.map((vac) => ({
    id: vac._id.toString(),
  }));
}

async function getVaccants(id) {
  const res = await fetch(`http://localhost:3000/api/vaccant/${id}`);
  const vaccant = await res.json();
  return vaccant;
}
// const getApplicationById = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/vaccant/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Unable to continue");
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

export default async function Application({ params }) {
  const { id } = params;
  try {
    const { vaccant } = await getVaccants(id);
    if (!vaccant) {
      return <div>No data available for this vacancy.</div>;
    }

    const {
      jobTitle,
      branch,
      duties,
      qualifications,
      contract,
      salary,
      department,
    } = vaccant;

    return (
      <ApplicationForm
        id={id}
        jobTitle={jobTitle}
        branch={branch}
        duties={duties}
        qualifications={qualifications}
        contract={contract}
        salary={salary}
        department={department}
      />
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error (e.g., show an error message)
    return <div>Error fetching data. Please try again later.</div>;
  }
}
