import React from "react";

const speakers = [
  {
    name: "Rudi Suryadi",
    title: "Head of Solution Architect at AWS",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
  },
  {
    name: "Donnie Prakoso",
    title: "Principal Developer Advocate at AWS",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
  },
  {
    name: "Shafraz Rahim",
    title: "Developer Community Lead - APAC & Japan, AWS",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
  },
  {
    name: "Adit Modi",
    title: "Solution Architect at Lauren",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
  },
  {
    name: "Aditya Kristianto",
    title: "Stay Hungry Stay Foolish",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
  },
  {
    name: "Afif A. Iskandar",
    title: "Content Creator - NgodingPython",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
  },
  {
    name: "Ananda Dwi Rahmawati",
    title: "AWS Container Hero",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
  },
  {
    name: "Anggra Sastriawan",
    title: "Cloud Architect at DoIT International",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
  },
];

const SpeakersSection: React.FC = () => {
  return (
    <div className="text-center py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-purple-700 mb-8">Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-6xl mx-auto">
        {speakers.map((speaker, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-28 h-28 rounded-full object-cover shadow-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">{speaker.name}</h3>
            <p className="text-gray-600 text-sm">{speaker.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersSection;
