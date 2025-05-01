import React, { useRef, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { IoPlay, IoPause, IoVolumeHigh } from "react-icons/io5";
import { MdForward10, MdReplay10 } from "react-icons/md";
import { AiOutlineFullscreen, AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Lesson = () => {
  const { id } = useParams();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [lessons, setLessons ] = useState([]);
  const [course, setCourse ] = useState({});
  const [media, setMedia ] = useState(null);
  const [mediaId, setMediaId ] = useState(1);


  const fetchCourseById = async () => {
    fetch("http://127.0.0.1:8000/api/v1/lessons/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error" + res.status);
        }
        return res.json();
      })
      .then((data) => {
        setCourse(data[0]?.lessons_name)
        setMedia(data[0].lesson)
        setLessons(data);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      });
  }

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadedmetadata', () => {
        setDuration(video.duration);
      });
      video.addEventListener('timeupdate', () => {
        setCurrentTime(video.currentTime);
      });
    }
    fetchCourseById();
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 10, duration);
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 10, 0);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    const timeout = setTimeout(() => {
      setShowControls(false);
    }, 3000);
    return () => clearTimeout(timeout);
  };
  const handleMedia = (id) => {
    setMediaId(id)
    lessons.forEach(item => {
      if(item.id === id){
        setMedia(item.lesson)
      }
      
    });
  }

  const reviews = [
    {
      id: 1,
      name: "Jaxhongir Kodirzberganov",
      avatar: null,
      rating: 5,
      comment: "Deyarli Html kursini 2,3 soatda bemalol zariqmasdan organib bo'lyabman",
      time: "19 soat oldin"
    },
    {
      id: 2,
      name: "Mahmudbek Bobojanov",
      avatar: "M",
      rating: 5,
      comment: "juda zor va oson tushuntirilgan",
      time: "23 soat oldin"
    },
    {
      id: 3,
      name: "Otajon Baxtiyorov",
      avatar: null,
      rating: 5,
      comment: "kurs zor ap yoq",
      time: "1 kun oldin"
    },
    {
      id: 4,
      name: "Sanjarbek Sabirjanov",
      avatar: "S",
      rating: 5,
      comment: "ushu kurs juda zor ishlangan gap yok men bundan kop narsani organdim raxmat",
      time: "2 kun oldin"
    },
    {
      id: 5,
      name: "Diyorbek Karimboev",
      avatar: null,
      rating: 5,
      comment: "zor",
      time: "3 kun oldin"
    },
    {
      id: 6,
      name: "Sarvarbek Xidirboyev",
      avatar: null,
      rating: 5,
      comment: "Yaxshi 🔥 endi ko'rib chiqamiz",
      time: "4 kun oldin"
    },
    {
      id: 7,
      name: "shahzod shamsiddinov",
      avatar: "S",
      rating: 5,
      comment: "juda zor",
      time: "4 kun oldin"
    },
    {
      id: 8,
      name: "Alisher Aslonov",
      avatar: null,
      rating: 5,
      comment: "🔥",
      time: "6 kun oldin"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="dark:text-white text-gray-800">
          <div 
            className="relative group"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setShowControls(false)}
          >
            <video 
              ref={videoRef}
              src={media} 
              className="w-full h-full object-cover rounded-lg"
              onClick={togglePlay}
            />
            
            {/* Center Play/Pause Button */}
            <div 
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
            >
              <button 
                onClick={togglePlay}
                className="bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors"
              >
                {isPlaying ? (
                  <IoPause size={40} className="text-white" />
                ) : (
                  <IoPlay size={40} className="text-white" />
                )}
              </button>
            </div>

            {/* Video Controls */}
            <div 
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4
                transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
            >
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleProgressChange}
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              />
              
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-4">
                  <button onClick={skipBackward} className="text-white hover:text-gray-300">
                    <MdReplay10 size={24} />
                  </button>
                  <button onClick={togglePlay} className="text-white hover:text-gray-300">
                    {isPlaying ? <IoPause size={24} /> : <IoPlay size={24} />}
                  </button>
                  <button onClick={skipForward} className="text-white hover:text-gray-300">
                    <MdForward10 size={24} />
                  </button>
                  <span className="text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <IoVolumeHigh className="text-white" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <button onClick={toggleFullscreen} className="text-white hover:text-gray-300">
                    <AiOutlineFullscreen size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-4">#{mediaId} - dars</h1>
        </div>
        <div className="dark:bg-[#18181b] mt-7 bg-white dark:text-white text-black rounded-lg p-6 border-[3px] dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">
                <AiFillStar size={20} />
              </span>
              <span className="font-medium">5 Kurs baholari:</span>
              <span className="text-gray-500">• 39ta sharh</span>
            </div>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="flex gap-3">
                {review.avatar ? (
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
                    {review.avatar}
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                    {review.name[0]}
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium">{review.name}</h3>
                    <span className="text-gray-500 text-sm">• {review.time}</span>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <AiFillStar key={i} className="text-amber-400" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 text-center w-full py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
            Ko'proq ko'rish
          </button>
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="dark:bg-[#18181b] bg-white dark:text-white text-black rounded-lg p-6 border-[3px] dark:border-gray-700">
          {/* Course Title */}
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-3xl font-bold">{course?.lesson_name}</h1>
          </div>

          {/* Course Modules */}
          <div className="space-y-4">
            {/* Module 1 */}
            <div className="border border-gray-700 rounded-lg">
              <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-800">
                <div className="flex items-center gap-3">
                  <h2 className="font-medium">{course?.lesson_name}</h2>
                </div>
                <FaChevronDown className="text-gray-400" />
              </div>

              {/* Module Lessons */}
              <div className="border-t border-gray-700">
              {lessons.map((item,index) => (
                <div key={item.id} onClick={() => handleMedia(item.id)} className={`p-4 flex items-center gap-3 hover:bg-gray-600 cursor-pointer ${item.id === mediaId?"bg-gray-800":''}`}>
                <BsPlayCircle className="text-xl text-gray-400" />
                <span>#{index + 1}. dars</span>
              </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
