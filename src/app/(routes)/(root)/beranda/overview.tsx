const Overview = () => {
    return (
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        {/* Judul */}
        <h2 className="mb-1 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white text-center">
          Services
        </h2>
        <p className="mb-12 text-xl text-gray-500 dark:text-gray-400 text-center">
          Here are a few of the awesome services we provide.
        </p>
  
        {/* Konten */}
        <div className="w-full">
          {/* Baris Pertama */}
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            {/* Cloud Computing */}
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white dark:bg-gray-800 border-2 border-indigo-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">
                      Cloud Computing
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    Cloud computing provides on-demand computing services, including servers, storage, databases, networking, and software over the internet.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Web Development */}
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white dark:bg-gray-800 border-2 border-purple-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">
                      Web Development
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    Web development involves building, creating, and maintaining websites and web applications for businesses and individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Baris Kedua */}
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            {/* ITNSA */}
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg" />
                <div className="relative h-full p-5 bg-white dark:bg-gray-800 border-2 border-blue-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">
                      ITNSA
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    IT Network and System Administration (ITNSA) focuses on managing, configuring, and maintaining IT infrastructures efficiently.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Cyber Security */}
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg" />
                <div className="relative h-full p-5 bg-white dark:bg-gray-800 border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">
                      Cyber Security
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    Cyber security involves protecting computer systems, networks, and data from cyber threats and unauthorized access.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Baris Ketiga */}
          <div className="flex flex-col w-full sm:flex-row">
            {/* IoT */}
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg" />
                <div className="relative h-full p-5 bg-white dark:bg-gray-800 border-2 border-green-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">
                      IoT
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                    ------------
                  </p>
                  <p className="mb-2 text-gray-600 dark:text-gray-300">
                    Internet of Things (IoT) is the interconnection of physical devices that collect and share data using the internet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Overview;