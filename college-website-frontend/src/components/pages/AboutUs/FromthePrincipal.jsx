import React from "react";


const FromthePrincipal = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 bg-white min-h-[calc(100vh-200px)]">
      <div className="mb-10 border-b-[3px] border-[#ffdc52] pb-4 flex justify-between items-center">
        <h2 className="text-4xl font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent inline-block">From the Principal</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        <main className="flex-1 w-full min-w-0 space-y-6">
          <div>
            <div className="flex flex-col md:flex-row-reverse gap-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-full md:w-1/3 py-2">
                <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src="/PrincipalSakthivel.png" 
                    alt="Dr. N. K. Sakthivel - Principal"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="relative">
                  <span className="absolute -top-4 -left-4 text-6xl text-[#ffdc52] opacity-50">"</span>
                  <p className="text-gray-700 leading-relaxed text-justify italic font-medium relative z-10">
                    Sri Shakthi Institute of Engineering and Technology is committed to developing Learners' minds through a wide range of innovative learning opportunities that prepare them for their professional journeys.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#00854a] italic">
                  <p className="text-gray-700 leading-relaxed text-sm text-justify">
                    "The heights by great men reached and kept were not attained by sudden flight, but they while their companions slept, were toiling upward in the night."
                  </p>
                  <p className="text-right text-[#00854a] font-bold text-xs mt-2">- Henry Wadsworth</p>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                  <p>Striving with a futuristic outlook, SIET aims at fostering the unending pool of talent that every student possesses. We seek to mould the curious student community mind with Critical Thinking, Problem-Solving Abilities, Leadership Qualities along with ethical responsibility that will create change makers and future leaders.</p>
                  <p>We at SIET firmly believe in Outcome Oriented, Student-Centric Teaching Learning Processes that will inculcate the required Industry Demanding Skills and Abilities. We mainly aim at instilling advanced engineering skills and cutting-edge technologies for transforming engineering practices and contributing to more efficient, sustainable, and innovative solutions across various industries.</p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-[#00854a] font-bold leading-relaxed text-justify mb-8">
                    As Henry Wadsworth said, My Primary motto and Objective is to encourage all my Learners Community to put their tremendous efforts with Commitment and Dedication to succeed and attain great heights.
                  </p>
                  <p className="font-black text-[#00854a] text-lg uppercase tracking-wider">Dr. N. K. Sakthivel, M.Tech, Ph.D.</p>
                  <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">Principal, SIET</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FromthePrincipal;
