import ApplicationForm from "@/components/ApplicationForm";
import React from "react";

// export async function generateStaticParams() {
//   const response = await fetch("http://localhost:3000/api/vaccant/");
//   const vaccant = await response.json();
//   return vaccant.vaccant.map((vac) => ({
//     id: vac._id.toString(),
//   }));
// }

// async function getVaccants(id) {
//   const res = await fetch(`http://localhost:3000/api/vaccant/${id}`);
//   const vaccant = await res.json();
//   return vaccant;
// }
const getApplicationById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/vaccant/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Unable to continue");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Application({ params }) {
  const { id } = params;
  const { vaccant } = await getApplicationById(id);
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
    <>
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
    </>
  );
}
