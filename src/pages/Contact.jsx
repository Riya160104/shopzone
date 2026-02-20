function Contact() {
  return (
    <div className="container" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh"
    }}>
      <div style={{
        background: "#1e293b",
        padding: "40px",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "500px",
        boxShadow: "0 0 20px rgba(236,72,153,0.3)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#ec4899" }}>
          Contact Us
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            placeholder="Your Name"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              width: "100%"
            }}
          />

          <input
            placeholder="Your Email"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              width: "100%"
            }}
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              width: "100%"
            }}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
