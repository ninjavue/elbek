import React, { useState, useEffect } from 'react';
import { PatternFormat } from 'react-number-format';
import { Link, useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate()
  const [isDark, setIsDark] = useState(true);
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isTestMode] = useState(true);


  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/v1/registration/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          username,
          phone_number: phoneNumber,
          last_name,
          first_name
        })
      });
      const data = await response.json();
      if (data) {
        setLoading(false)
        navigate('/login')
      } else {
        console.error('Token not received');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-200 p-4`}>
      <div className={`w-full max-w-md rounded-xl shadow-lg p-8 transition-colors duration-200 ${
        isDark ? 'bg-[#18181b]' : 'bg-white'
      }`}>
        <h1 className={`text-2xl font-semibold mb-6 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>
          Edu.uzga xush kelibsiz
        </h1>
        
        <form onSubmit={handleAuth}>
          <div className="space-y-4">
            <label className={`block text-base -mb-2 font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Username
            </label>
            <div className="relative">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`text-lg w-full pl-2 pr-2 py-2 rounded-lg outline-none transition-colors duration-200 mb-2 ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400'
                } border focus:ring-2 focus:border-transparent`}
                placeholder="Username"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className={`block text-base -mb-2 font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
             Ism
            </label>
            <div className="relative">
              <input
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                className={`text-lg w-full pl-2 pr-2 py-2 rounded-lg outline-none transition-colors duration-200 mb-2 ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400'
                } border focus:ring-2 focus:border-transparent`}
                placeholder="Ism"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className={`block text-base -mb-2 font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Familiya
            </label>
            <div className="relative">
              <input
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                className={`text-lg w-full pl-2 pr-2 py-2 rounded-lg outline-none transition-colors duration-200 mb-2 ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400'
                } border focus:ring-2 focus:border-transparent`}
                placeholder="Familiya"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className={`block text-base -mb-2 font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`text-lg w-full pl-2 pr-2 py-2 rounded-lg outline-none transition-colors duration-200 mb-2 ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400'
                } border focus:ring-2 focus:border-transparent`}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className={`block text-base -mb-2 font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Telefon raqam
            </label>
            <div className="relative">
              <PatternFormat
                format="## ### ## ##"
                allowEmptyFormatting
                mask=""
                value={phoneNumber}
                onValueChange={(values) => {
                  setPhoneNumber(values.value);
                }}
                className={`text-lg w-full pl-2 pr-2 py-2 rounded-lg outline-none transition-colors duration-200 ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400'
                } border focus:ring-2 focus:border-transparent`}
                placeholder="XX XXX XX XX"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className={`block text-base -mb-2 font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`text-lg w-full pl-2 pr-2 py-2 rounded-lg outline-none transition-colors duration-200 mb-2 ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400'
                } border focus:ring-2 focus:border-transparent`}
                placeholder="Parol"
              />
            </div>
          </div>
            <div className="space-y-4">
              <Link to='/login' className='text-white hover:text-blue-700'>Sizda akount bormi? Login</Link>
            </div>
          <button 
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg mt-6 transition duration-200 `}
          >
            {loading ? 'Yuborilmoqda...' : 'Davom etish'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;