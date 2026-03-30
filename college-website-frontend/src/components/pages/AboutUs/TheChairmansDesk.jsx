import React from "react";


const TheChairmansDesk = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 bg-white min-h-[calc(100vh-200px)]">
      <div className="mb-10 border-b-[3px] border-[#ffdc52] pb-4 flex justify-between items-center">
        <h2 className="text-4xl font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent inline-block">The Chairman's Desk</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        <main className="flex-1 w-full min-w-0 space-y-6">
          <div>
            <div className="flex flex-col md:flex-row gap-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-full md:w-1/3 py-2">
                <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src="/chairman.jpg" 
                    alt="Dr. S. Thangavelu - Chairman"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="relative">
                  <span className="absolute -top-4 -left-4 text-6xl text-[#ffdc52] opacity-50">"</span>
                  <p className="text-gray-700 leading-relaxed text-justify italic font-medium relative z-10">
                    I have always been inspired by Dr. Martin Luther King's statement, 'I have a dream' - a dream I believe will come true - a dream that my children will one day live in a world where they will not be judged by the colour of their skin, but by the content of their character'. This need for tolerance - to create an equal society with no discrimination in Caste, Creed or Colour was best exemplified in the words of Mahatma gandhi.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#00854a] italic">
                  <p className="text-gray-700 leading-relaxed text-sm text-justify">
                    "I do not want my institution to be walled off on all sides, I want the culture of all lands to be blown about my institution as freely as possible . But I refuse to be blown off my any one of them. Mine is not a religion of the prison house . It has room for the least among God's creations but it is proof against insolent pride of race, religion or colour."
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed font-bold">
                  And this I believe will be the watchword of each and every Shakthian.
                </p>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-[#00854a] font-bold leading-relaxed text-justify mb-8">
                    The vision for Sri Shakthi is to make the institution one of our nation's great engineering schools, recognized nationally and internationally for excellence in teaching, research and public service. We seek to be the preferred destination for students, practitioners seeking an engineering education, employers hiring engineering graduates and organizations seeking engineering knowledge.
                  </p>
                  <p className="font-black text-[#00854a] text-lg uppercase tracking-wider">Dr. S. Thangavelu</p>
                  <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">Chairman, SIET</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TheChairmansDesk;
