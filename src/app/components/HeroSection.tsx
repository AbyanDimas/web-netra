'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Daftar gambar
const images = [
  "/images/adiwerna1.webp",
  "/images/adiwerna2.webp",
  "/images/adiwerna3.webp",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fungsi untuk mengubah gambar secara otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, []);

  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Container untuk gambar dengan efek slide */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentImageIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <Image
              src={image}
              alt={`Background Image ${index + 1}`}
              className="object-cover object-center w-full h-full"
              fill // Mengisi seluruh container
              priority={index === 0} // Prioritaskan gambar pertama
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Konten Teks dan Tombol */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Selamat Datang di Netra ADB!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Mari berkembang bersama dalam komunitas yang penuh inspirasi dan
          kreativitas di SMK 1 Adiwerna.
        </p>
        <Link
          href="https://lmsnetra.vercel.app/"
          className="text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg bg-blue-600"
        >
          Bergabung Sekarang
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;