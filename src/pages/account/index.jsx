import React, { useEffect, useState } from "react";
import profile from "../../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
const Account = () => {
    const [profileData, setProfileData] = useState({});
    const navigate = useNavigate()
    useEffect(() => {
        
      const token = localStorage.getItem("token");
      if (token) {
        fetchProfile(token);
      }else{
        navigate('/login')
      }
    }, []);
  
    const fetchProfile = async (token) => {
      try {
        console.log(token)
        const response = await fetch("http://127.0.0.1:8000/api/v1/profile/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error("Error " + response.status);
        }
        if(response.status == 401){
            navigate('/login')
        }
  
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        console.error("Xatolik:", err);
        navigate('/login')
      }
    };
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 dark:bg-gray-900 bg-gray-100 rounded-lg shadow-lg  mx-auto">
      <div className="bg-white dark:bg-gray-950 dark:text-white rounded-lg p-4 w-full md:w-1/3 flex flex-col items-center relative">
        <img
          src={profile}
          alt="Student"
          className="w-48 h-48 object-cover rounded-full shadow-md mb-4"
        />
        <div className="text-center">
          <p className="font-semibold">
            <span className="text-gray-600">Username: </span> {profileData.username}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-950 dark:text-white rounded-lg p-6 w-full md:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p>
            <span className="font-semibold">Username:</span> {profileData.username}
          </p>
          <p>
            <span className="font-semibold">ID:</span> {profileData.id}
          </p>
          <p>
            <span className="font-semibold">Ism:</span> {profileData.first_name || "Noma'lum"}
          </p>
          <p>
            <span className="font-semibold">Familiya:</span> {profileData.last_name || "Noma'lum"}
          </p>
          <p>
          <span className="font-semibold">Email:</span> {profileData.email || "Noma'lum"}
          </p>
          <p>
          <span className="font-semibold">Telefon:</span> {profileData.phone_number || "Noma'lum"}
          </p>
          <p>
            <span className="font-semibold">Admin:</span> Yo‘q
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
