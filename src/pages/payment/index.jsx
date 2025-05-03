import React, { useEffect, useState } from "react";
import { PatternFormat } from "react-number-format";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const fetchAllCourses = async () => {
    fetch("http://127.0.0.1:8000/api/v1/lesson-names")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error" + res.status);
        }
        return res.json();
      })
      .then((data) => {
        setAllCourses(data);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
      <div>
        <h2 className="text-semibold text-3xl mb-6 dark:text-white">To'lov</h2>
        <div
          style={{ marginTop: "40px" }}
          className="flex flex-col justify-start dark:text-white text-gray-900"
        >
          <div>
            <label className="block">Karta raqami</label>
            <PatternFormat
              format="#### #### #### ####"
              mask="_"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onValueChange={(values) => setCardNumber(values.value)}
              className={`text-lg pl-2 w-[500px] pr-2 py-2 rounded-lg outline-none transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500
                  bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400 border focus:ring-2 focus:border-transparent`}
            />
          </div>

          <div>
            <label style={{ marginTop: "10px" }} className="block">
              Amal qilish mudati
            </label>
            <PatternFormat
              format="##/##"
              placeholder="MM/YY"
              mask={["M", "M", "Y", "Y"]}
              value={expiry}
              onValueChange={(values) => setExpiry(values.value)}
              className={`text-lg w-[500px] pl-2 pr-2 py-2 rounded-lg outline-none transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500
                bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400 border focus:ring-2 focus:border-transparent`}
            />
          </div>

          <label style={{ marginTop: "10px" }}>CVV</label>
          <PatternFormat
            format="###"
            placeholder="123"
            mask="_"
            value={cvv}
            onValueChange={(values) => setCvv(values.value)}
            className={`text-lg pl-2 pr-2 py-2 rounded-lg outline-none transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500
                bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400 border focus:ring-2 focus:border-transparent`}
          />
        </div>
      </div>

      {/* Order summary */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          width: "300px",
        }}
      >
        <h3 className="text-2xl mb-4 dark:text-white">
          Sotib olmoqchi bo'lgan kursingizni tanlang
        </h3>
        <select
          className={`text-lg w-full pl-2 pr-2 py-2 rounded-lg outline-none transition-colors duration-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500
    bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-400 border focus:ring-2 focus:border-transparent`}
        >
          <option value="" selected disabled>Kursni tanlang</option>
          {allCourses.map((course, index) => (
            <option key={index} value={course.lesson_name}>
              {course.lesson_name}
            </option>
          ))}
        </select>
        <h4 className="mt-6 dark:text-white">
          Kurs narxi: <strong>250 000 so'm</strong>
        </h4>

        <button
          className="w-full mt-6 text-lg bg-green-500 hover:bg-green-700"
          style={{
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Sotib olish
        </button>
        <button
          className="w-full hover:border hover:border-red-400 hover:bg-red-200"
          style={{
            background: "transparent",
            color: "red",
            padding: "10px 20px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          Bekor qilish
        </button>
      </div>
    </div>
  );
};

export default Payment;
