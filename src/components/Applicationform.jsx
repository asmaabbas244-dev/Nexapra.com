import { useState } from "react";
import styles from "./Applicationform.module.css";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    experience: "",
    skills: "",
    position: "",
    cv: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";

    if (!formData.contact.trim())
      newErrors.contact = "Contact Number is required";

    

    if (!formData.cv)
      newErrors.cv = "Please upload your CV";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

 
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!validate()) return;

  const confirmed = window.confirm(
    "Are you sure you want to submit your application?"
  );

  if (!confirmed) return;

  alert("Application Submitted Successfully!");
  console.log(formData);
};

  return (
    <div className={styles.applicationPage}>
      <div className={styles.applicationCard}>

        <h2>Apply Now</h2>
        <p>Join the NexAppra Team</p>

        <form onSubmit={handleSubmit}>

          <div className={styles.inputGroup}>
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
            />
            <span className={styles.error}>{errors.fullName}</span>
          </div>

          <div className={styles.inputGroup}>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
            />
            <span className={styles.error}>{errors.email}</span>
          </div>

          <div className={styles.inputGroup}>
            <label>Contact Number *</label>
            <input
              type="tel"
              name="contact"
              onChange={handleChange}
            />
            <span className={styles.error}>{errors.contact}</span>
          </div>

          <div className={styles.inputGroup}>
            <label>Experience </label>
            <input
              type="text"
              name="experience"
              onChange={handleChange}
              placeholder="e.g. 2 Years"
            />
            
          </div>

          <div className={styles.inputGroup}>
            <label>Skills </label>
            <textarea
              rows="4"
              name="skills"
              onChange={handleChange}
              placeholder="e.g. React, JavaScript, CSS3"
            />
            
          </div>

          <div className={styles.inputGroup}>
            <label>Position </label>

           
            <input type="text" 
            id="position" 
            name="position" 
            onChange={handleChange}
            placeholder="Enter the position you are applying for"/>
            
             
            
          </div>

          <div className={styles.inputGroup}>
            <label>Upload CV *</label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              name="cv"
              onChange={handleChange}
            />

            <span className={styles.error}>{errors.cv}</span>
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
          >
            Submit Application
          </button>

        </form>

      </div>
    </div>
  );
}