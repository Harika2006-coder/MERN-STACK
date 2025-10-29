import React, { useState, useEffect } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Edit Your Profile</h2>

        <div className="profile-photo">
          <img
            src={
              userData.profilePic ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
          />
          <label htmlFor="upload" className="upload-btn">
            Upload Photo
          </label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </div>

        <div className="profile-form">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={userData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={userData.password}
            onChange={handleChange}
          />
          <button onClick={handleSave} className="save-btn">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
