import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { PatternFormat } from 'react-number-format';

const Auth = () => {
  const [isDark, setIsDark] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isTestMode] = useState(true); // Toggle this for test/production mode

  useEffect(() => {
    loginToEskiz();
  }, []);

  const loginToEskiz = async () => {
    try {
      const response = await fetch('/eskiz-api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: "yoldoshovumrzoq8@gmail.com",
          password: "g0d3PHLscPS5NWCi0lb8zk2zX7IKbZkNucPz6AsL"
        })
      });

      const data = await response.json();
      if (data.data?.token) {
        setToken(data.data.token);
        console.log('Login successful');
      } else {
        console.error('Token not received:', data);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const generateRandomCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendVerificationCode = async (phone) => {
    if (!token) {
      console.error('No token available');
      alert('Tizim xatosi, iltimos qaytadan urinib ko\'ring');
      return;
    }

    try {
      setLoading(true);
      const cleanPhone = phone.replace(/\D/g, '');
      if (cleanPhone.length !== 9) {
        console.error('Phone number must be 9 digits');
        return;
      }

      const code = generateRandomCode();
      setVerificationCode(code);
      
      let message;
      if (isTestMode) {
        // Test mode - using allowed test message format
        message = "Bu Eskiz dan test";
      } else {
        // Production mode - can use custom message
        message = `Edu.uz: Sizning tasdiqlash kodingiz: ${code}`;
      }

      const requestData = {
        mobile_phone: '998' + cleanPhone,
        message: message,
        from: '4546',
        callback_url: 'http://0000.uz/test.php' // Optional callback URL
      };

      const response = await fetch('/eskiz-api/message/sms/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      const data = await response.json();
      console.log('SMS response:', data);
      
      if (response.ok || data.status === 'waiting') {
        console.log('SMS sent successfully');
        if (isTestMode) {
          alert(`Test rejimi: Sizning tasdiqlash kodingiz ${code}`);
        }
      } else {
        throw new Error(data.message || 'SMS sending failed');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      alert('SMS yuborishda xatolik yuz berdi');
      
      if (error.message.includes('token') || error.message.includes('unauthorized')) {
        await loginToEskiz();
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.replace(/\D/g, '').length === 9) {
      sendVerificationCode(phoneNumber);
    } else {
      alert('Iltimos, to\'liq telefon raqamini kiriting');
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
        
        <form onSubmit={handlePhoneSubmit}>
          <div className="space-y-4">
            <label className={`block text-base -mb-2 font-semibold ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Telefon raqam
            </label>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button type="button" className={`flex items-center space-x-1 pl-4 pr-2 border-r h-full ${
                  isDark ? 'border-gray-600' : 'border-gray-300'
                }`}>
                  <img 
                    src="https://flagcdn.com/w20/uz.png" 
                    alt="UZ flag"
                    className="w-5 h-4 object-contain"
                  />
                  <FaChevronDown className={`text-xs ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                </button>
              </div>
              <div className="absolute text-lg inset-y-0 left-16 flex items-center pointer-events-none">
                <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>+998</span>
              </div>
              <PatternFormat
                format="## ### ## ##"
                allowEmptyFormatting
                mask=""
                value={phoneNumber}
                onValueChange={(values) => {
                  setPhoneNumber(values.value);
                }}
                className={`text-lg w-full pl-[107px] pr-4 py-3 rounded-lg outline-none transition-colors duration-200 ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400'
                } border focus:ring-2 focus:border-transparent`}
                placeholder="XX XXX XX XX"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading || !token}
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg mt-6 transition duration-200 ${
              (loading || !token) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Yuborilmoqda...' : 'Davom etish'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;