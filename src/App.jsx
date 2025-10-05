import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgm from "./assets/Nothing's Gonna Change My Love For YouGeorge Benson [Music Box].mp3";

// ✅ เพิ่มรูปเข้ามา (เปลี่ยนชื่อไฟล์ให้ตรงกับของคุณ)
import photo1 from "./assets/photos/1.jpg";
import photo2 from "./assets/photos/2.jpg";
import photo3 from "./assets/photos/3.jpg";
import photo4 from "./assets/photos/4.jpg";

function App() {
  const [stage, setStage] = useState("intro");
  const [viewMode, setViewMode] = useState("polaroid"); // โหมดดูรูป
  const [currentIndex, setCurrentIndex] = useState(0); // สำหรับสไลด์
  const [showSecret, setShowSecret] = useState(false);

  const photos = [photo1, photo2, photo3, photo4];

  const handleOpenLetter = () => {
    const audio = new Audio(bgm);
    audio.volume = 0.4;
    audio.play();
    setStage("letter");
  };

  // ฟังก์ชันเลื่อนภาพ
  const nextPhoto = () => setCurrentIndex((currentIndex + 1) % photos.length);
  const prevPhoto = () =>
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-lovePink via-softPurple to-pastelYellow overflow-hidden text-center">
      <AnimatePresence mode="wait">
        {/* 🩷 Stage 1: Intro */}
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.h1
              className="text-5xl font-bold mb-6 text-pink-600 drop-shadow-lg"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              🎂 Happy Birthday My Love 💖
            </motion.h1>

            <p className="text-xl text-gray-800 mb-10">
              มีจดหมายพิเศษจากใจเค้าถึงเธอ 💌
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-all"
              onClick={handleOpenLetter}
            >
              คลิกเพื่อเปิดจดหมาย 💌
            </motion.button>
          </motion.div>
        )}

        {/* 💌 Stage 2: Letter */}
        {stage === "letter" && (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              className="bg-white p-10 rounded-2xl shadow-2xl max-w-lg mx-auto text-gray-800 relative z-10"
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                💌 ถึงคนพิเศษของเค้านะ
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                ขอให้วันเกิดปีนี้เต็มไปด้วยรอยยิ้ม  
                ความสุข และทุกอย่างที่เธอปรารถนา 💖  
                ขอบคุณที่เข้ามาอยู่ในชีวิตเค้า  
                เธอคือของขวัญที่ดีที่สุดของเค้าเลยนะ 🎁  
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-400 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-500 transition-all"
                onClick={() => setStage("surprise")}
              >
                คลิกเพื่อดูของขวัญ 🎁
              </motion.button>
            </motion.div>

            {/* ลูกโป่งลอย */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 text-4xl"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: -800, opacity: 1 }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.6,
                }}
                style={{
                  left: `${10 + i * 12}%`,
                }}
              >
                🎈
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 🎁 Stage 3: Surprise */}
        {stage === "surprise" && (
        <motion.div
          key="surprise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center"
        >
          <motion.h2
            className="text-4xl font-bold text-pink-600 mb-6 drop-shadow-lg"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            💖 ขอบคุณที่อยู่กับเค้าเสมอนะ 💖
          </motion.h2>

          <p className="text-lg text-gray-700 max-w-md leading-relaxed mb-10">
            ไม่ว่ามีเรื่องดีหรือร้ายแค่ไหน  
            เค้าจะอยู่ข้างเธอเสมอ  
            ขอให้ทุกวันของเธอมีแต่ความสุขนะคนเก่งของเค้า 🌈
          </p>

          {/* 💞 หัวใจเต้น */}
          <motion.div
            className="text-6xl"
            initial={{ scale: 0 }}
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            💞
          </motion.div>

          {/* 🖼️ ส่วนดูรูป */}
          <div className="mt-10">
            {viewMode === "polaroid" ? (
              // 📷 โหมดโพลารอยด์
              <motion.div
                className="relative flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {photos.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`photo-${i}`}
                    className="w-40 h-48 object-cover rounded-lg shadow-xl cursor-pointer border-8 border-white"
                    style={{
                      transform: `rotate(${(i % 2 === 0 ? -10 : 8) + Math.random() * 4}deg)`,
                    }}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    onClick={() => setViewMode("carousel")}
                  />
                ))}
              </motion.div>
            ) : (
              // 🎞️ โหมด Carousel
              <motion.div
                className="relative flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="flex items-center gap-6">
                  <button
                    onClick={prevPhoto}
                    className="text-3xl text-pink-600 hover:scale-110 transition"
                  >
                    ⬅️
                  </button>

                  <motion.img
                    key={currentIndex}
                    src={photos[currentIndex]}
                    alt="carousel-photo"
                    className="w-72 h-80 object-cover rounded-2xl border-8 border-white shadow-2xl"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  <button
                    onClick={nextPhoto}
                    className="text-3xl text-pink-600 hover:scale-110 transition"
                  >
                    ➡️
                  </button>
                </div>

                <button
                  className="mt-6 text-pink-500 underline hover:text-pink-700"
                  onClick={() => setViewMode("polaroid")}
                >
                  🔙 กลับไปดูแบบอัลบั้ม
                </button>
              </motion.div>
            )}
          </div>

          {/* 💌 กล่องความลับ */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* ปุ่มเปิดกล่อง */}
            {!showSecret ? (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold tracking-wide hover:shadow-2xl transition-all"
                onClick={() => setShowSecret(true)}
              >
      💌 ความลับของเรา
    </motion.button>
    ) : (
      // กล่องเปิดแล้ว แสดงรูป + ข้อความ
      <motion.div
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        <motion.h3
          className="text-3xl font-semibold text-pink-500 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          💕 รูปของเราสองคน 💕
        </motion.h3>

        {/* แสดงรูปคู่ */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <motion.img
            src="/src/assets/photos/5.jpg"
            className="w-64 h-72 object-cover rounded-2xl shadow-2xl border-8 border-white hover:scale-105 transition-all"
            whileHover={{ rotate: 2, scale: 1.05 }}
          />
          <motion.img
            src="/src/assets/photos/6.jpg"
            className="w-64 h-72 object-cover rounded-2xl shadow-2xl border-8 border-white hover:scale-105 transition-all"
            whileHover={{ rotate: -2, scale: 1.05 }}
          />
        </div>

        {/* ✨ ข้อความอบอุ่น */}
        <motion.div
          className="bg-white/70 p-6 rounded-2xl shadow-lg backdrop-blur-md max-w-md mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            “เค้าไม่รู้ว่าชีวิตจะเป็นยังไงในวันข้างหน้า  
            แต่รู้แน่ ๆ ว่าฉันอยากมีเธออยู่ในนั้นเสมอ
            ขอบคุณที่ให้โอกาสเค้าได้รักเธอนะ 
            สุขสันต์วันเกิดนะครับที่รัก 💖”
          </p>
        </motion.div>

            {/* ปุ่มปิดความลับ */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 text-pink-500 underline hover:text-pink-700"
              onClick={() => setShowSecret(false)}
            >
              🔒 ปิดกล่องความลับ
            </motion.button>
          </motion.div>
        )}
      </motion.div>


          {/* 💖 หัวใจลอยขึ้น */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 text-pink-400 text-3xl"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: -900, opacity: [0, 1, 0] }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${10 + i * 8}%`,
              }}
            >
              💖
            </motion.div>
          ))}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}

export default App;
