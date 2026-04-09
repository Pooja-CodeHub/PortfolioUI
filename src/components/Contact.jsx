// import { useState } from "react";
// import "./../styles/Contact.css";

// function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   // input handle
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8080/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         alert("Message Sent Successfully ✅");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         alert("Failed ❌");
//       }

//     } catch (error) {
//       console.error(error);
//       alert("Error ❌");
//     }
//   };

//   return (
//     <div className="contact" id="contact">
//       <h2>Contact Me</h2>

//       <form onSubmit={handleSubmit} className="contact-form">

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="message"
//           placeholder="Enter Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Send</button>

//       </form>
//     </div>
//   );
// }

// export default Contact;

import { useState } from "react";
import "./../styles/Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message Sent Successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed ❌");
      }

    } catch (error) {
      console.error(error);
      alert("Error ❌");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Me 📩</h2>

        <form onSubmit={handleSubmit} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message 🚀</button>

        </form>
      </div>
    </div>
  );
}

export default Contact;