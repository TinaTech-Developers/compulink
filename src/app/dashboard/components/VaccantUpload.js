import React, { useState } from "react";
import FillButton from "@/components/FillButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VaccantUpload() {
  const [jobTitle, seJobTitle] = useState("");
  const [branch, setBranch] = useState("");
  const [duties, setDuties] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [contract, setContract] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!jobTitle || !branch || !duties || !qualifications || !salary) {
      alert("You are supposed to fill all the fields.");
      return;
    }
    try {
      const res = await fetch("/api/vaccant", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          jobTitle,
          branch,
          duties,
          qualifications,
          contract,
          salary,
          department,
        }),
      });
      if (res.ok) {
        toast.success("Job created");
        onClick();
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center -mt-28">
      <div className="  mx-auto flex flex-col items-center justify-center h-full w-2/3 md:w-2/4  rounded-lg border border-blue-500 mt-32">
        <form className="flex flex-col w-3/5 gap-4">
          <h1 className="text-center p-6 text-xl font-semibold">Post Vacant</h1>
          <div>
            <input
              value={jobTitle}
              onChange={(e) => seJobTitle(e.target.value)}
              type="text"
              placeholder="Job title.."
              className="w-full p-2 outline-none bg-gray-100"
            />
          </div>
          <div>
            <input
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              type="text"
              placeholder="Branch"
              className="w-full p-2 outline-none bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Contract</label>
            <select
              value={contract}
              onChange={(e) => setContract(e.target.value)}
              id="departments"
              className="w-full p-2 outline-none bg-gray-100"
            >
              <option value={"Fulltime"}>Fulltime</option>
              <option value={"Graduate Trainee"}>Graduate Trainee</option>
              <option value={"Attachee"}>Attachee</option>
              <option value={"Contract"}>Contract</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 ">
            <label>Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              id="cars"
              className="w-full p-2 outline-none bg-gray-100"
            >
              <option value={"Software"}>Software</option>
              <option value={"Networking"}>Networking</option>
              <option value={"Procurement"}>Procurement</option>
              <option value={"Finance"}>Finance</option>
              <option value={"Sales"}>Sales</option>
              <option value={"HR"}>HR</option>
            </select>
          </div>
          <div className="grid grid-cols-4 gap-4 ">
            <textarea
              value={duties}
              onChange={(e) => setDuties(e.target.value)}
              rows={5}
              placeholder="Job Description / Duties"
              className="bg-gray-100 py-2 px-4  w-full outline-none border-none col-span-4"
            ></textarea>
          </div>
          <div className="grid grid-cols-4 gap-4 ">
            <textarea
              value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
              rows={5}
              placeholder="Qualifications"
              className="bg-gray-100 py-2 px-4  w-full outline-none border-none col-span-4"
            ></textarea>
          </div>

          <div>
            <input
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              type="text"
              placeholder="Salary (Optional)"
              className="w-full p-2 outline-none bg-gray-100"
            />
          </div>
          <button className="w-[5rem]">
            <FillButton name={"Post"} link={""} onClick={handleSubmit} />
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default VaccantUpload;
