import Image from "next/image";
import ProfilAdiwerna from "../../../../../public/images/adiwerna1.webp";

const About = () => {
  return (
    <section className="pt-13 relative xl:mr-0 lg:mr-5 min-h-screen mr-0 bg-white dark:bg-gray-900">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Bagian Teks */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 dark:text-gray-500 text-base font-normal leading-relaxed">
                  Tentang Kami
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-indigo-700 dark:text-indigo-400 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Kisah Perjalanan & Dedikasi Kami
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                    Kami terus berinovasi, berkembang, dan berkontribusi dalam
                    membangun ekosistem digital yang lebih maju. Setiap langkah
                    yang kami tempuh adalah cerminan dari kerja keras,
                    kolaborasi, dan komitmen kami untuk menciptakan perubahan
                    nyata.
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                {/* Baris Pertama */}
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 dark:text-gray-100 text-2xl font-bold font-manrope leading-9">
                      33+ Tahun
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                      Berkontribusi dalam Transformasi Digital
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 dark:text-gray-100 text-2xl font-bold font-manrope leading-9">
                      125+ Proyek
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                      Inovasi & Keunggulan dalam Setiap Karya
                    </p>
                  </div>
                </div>

                {/* Baris Kedua */}
                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 dark:text-gray-100 text-2xl font-bold font-manrope leading-9">
                      26+ Penghargaan
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                      Apresiasi atas Dedikasi & Inovasi Kami
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 dark:text-gray-100 text-2xl font-bold font-manrope leading-9">
                      99% Klien Puas
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                      Kepercayaan Adalah Prioritas Utama Kami
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tombol Selengkapnya */}
            <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 dark:bg-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-1.5 text-indigo-600 dark:text-indigo-300 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Selengkapnya
              </span>
              <svg
                className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Bagian Gambar */}
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 dark:sm:bg-gray-800 rounded-3xl sm:border border-gray-200 dark:sm:border-gray-700 relative">
              <Image
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src={ProfilAdiwerna}
                alt="Tentang Kami"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;