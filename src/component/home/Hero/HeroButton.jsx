import React from "react";

function HeroButton() {
  const sendEmail = () => {
    const email = "aldidharmawan700@gmail.com";
    const subject = "";
    const body = "Halo, Aldi Dharmawan";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="hero-button">
      <button
        onClick={sendEmail}
        type="button"
        className="bg-blue-dark text-white w-36 p-3 rounded-lg font-medium shadow-lg shadow-blue-dark/50 hover:bg-blue-dark/75 flex items-center justify-center space-x-2"
      >
        <i className="fa-solid fa-paper-plane"></i>
        <span>Email</span>
      </button>
    </div>
  );
}

export default HeroButton;
