import "../styles/skills.css";

const skills = [
  "Python",
  "SQL",
  "Java",
  "JavaScript",
  "React",
  "Node.js",
  "Machine Learning",
  "TensorFlow",
  "PyTorch",
  "Git",
  "GitHub",
  "Linux",
  "Azure",
  "GCP",
  "System Design",
  "Data Structures",
  "Algorithms",
];

function Skills() {
  return (
    <div>
      <h1 className="section-title">Skills</h1>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;