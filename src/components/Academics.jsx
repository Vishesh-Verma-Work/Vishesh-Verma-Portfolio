import React from "react";

// CDN Icons for academic types
const icons = {
  semester: "https://cdn-icons-png.flaticon.com/512/190/190411.png", // book icon
  school: "https://cdn-icons-png.flaticon.com/512/190/190411.png", // school icon
};

const academicData = [
  { type: "semester", semester: "6th Semester", marks: "664/800", SGPA: "8.71" },
  { type: "semester", semester: "5th Semester", marks: "717/900", SGPA: "7.91" },
  { type: "semester", semester: "4th Semester", marks: "850/1000", SGPA: "8.3" },
  { type: "semester", semester: "3rd Semester", marks: "870/1000", SGPA: "8.92" },
  { type: "semester", semester: "2nd Semester", marks: "769/900", SGPA: "8.64" },
  { type: "semester", semester: "1st Semester", marks: "758/900", SGPA: "8.45" },
  { type: "school", semester: "12th Standard", marks: "87.00%" },
  { type: "school", semester: "10th Standard", marks: "78.86%" },
];

export default function Academics() {
  return (
    <section className="academics-section" id="academic">
      <h2 className="section-heading">Academic Records</h2>
      <div className="academics-grid">
        {academicData.map((data, index) => (
          <div className="academic-card" key={index}>
            <div className="academic-icon">
              <img src={data.type === "semester" ? icons.semester : icons.school} alt={data.semester} />
            </div>
            <div className="academic-content">
              <h4>{data.semester}</h4>
              <p>{data.marks} {data.SGPA && `| SGPA: ${data.SGPA}`}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
