import React from 'react'

const ResourcesFooter = () => {
    const youtubeChannels = [
        {
            name: "Chai aur Code",
            url:"https://www.youtube.com/@chaiaurcode",
            bestFor:"Web Development, Python",
        },
        {
            name: "Code With Harry",
            url:"https://www.youtube.com/@CodeWithHarry",
            bestFor:"Web Development",
        },
        {
            name: "JavaScript Mastery",
            url:"https://www.youtube.com/@javascriptmastery",
            bestFor:"Web Development, Next.Js, React,",
        },
        {
            name: "Kevin Powell",
            url:"https://www.youtube.com/@KevinPowell",
            bestFor:"Web Development, CSS, HTML, JavaScript",
        },
        {
            name: "Apna College",
            url:"https://www.youtube.com/@ApnaCollegeOfficial",
            bestFor:"Web Development, DSA, C++",
        },
        {
            name: "Saptarshi Prakash",
            url:"https://www.youtube.com/@saptarshipr",
            bestFor:"UI / UX Design",
        },
        {
            name: "Cutting Edge School",
            url:"https://www.youtube.com/@CuttingEdgeSchool",
            bestFor:"UI / UX Design, AI Updates",
        },
        {
            name: "Ishan Sharma",
            url:"https://www.youtube.com/@IshanSharma7390",
            bestFor:"AI Updates",
        },
        {
            name: "FreeCodeCamp",
            url:"https://www.youtube.com/@freecodecamp",
            bestFor:"Web Development",
        },
        {
            name: "Hitesh Choudhary (2nd Channel of Chai aur Code)",
            url:"https://www.youtube.com/@HiteshCodeLab",
            bestFor:"Web Development",
        },
        {
            name: "Traversy Media",
            url:"https://www.youtube.com/@TraversyMedia",
            bestFor:"Web Development, Javascript Frameworks",
        },
        {
            name:"Juxtopposed",
            url:"https://www.youtube.com/@juxtopposed",
            bestFor:"UI / UX Inspiration",
        },
        {
            name:"Coding with Sagar",
            url:"https://www.youtube.com/@codingwithsagarcw",
            bestFor:"Python, Web Development, AI, ML",
        },
        {
            name:"Josh tried Coding",
            url:"https://www.youtube.com/@joshtriedcoding",
            bestFor:"Next.Js"
        },
        {
            name:"Code with Antonio",
            url:"https://www.youtube.com/@codewithantonio",
            bestFor:"Web Development Projects"
        },
        {
            name:"Robot Bobby",
            url:"https://www.youtube.com/@robotbobby9",
            bestFor:"Three.Js, WebGl, Js, Js Frameworks"
        },
        {
            name:"TubeGuruji",
            url:"https://www.youtube.com/@tubeguruji",
            bestFor:"Web Development Projects integrate with AI"
        },
        {
            name:"GreatStack",
            url:"https://www.youtube.com/@GreatStackDev",
            bestFor:"Web Development, MERN Stack"
        },
        {
            name:"ByteByteGo",
            url:"https://www.youtube.com/@ByteByteGo",
            bestFor:"Visualisning Things so that you can understand them better"
        },
        {
            name:"The Metaverse Guy",
            url:"https://www.youtube.com/@TheMetaverseGuy",
            bestFor:"AI, AI Updates"
        },
        {
            name:"Sheryians Coding School",
            url:"https://www.youtube.com/@sheryians",
            bestFor:"Web Development, Js, DSA, Frontend Development"
        }
        
    ]
  return (
    <div className="mt-[-10px] bg-white mb-12 text-center p-6">
      <div className="mt-12 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-inner">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
          Best YouTube Channels for Web Development
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Curated channels to help you master web development and related skills.
        </p>
        <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeChannels.map((channel) => (
            <div key={channel.name} className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group bg-white">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#A435F0] mb-2">{channel.name}</h3>
              <p className="text-gray-600 text-base mb-4 flex-grow">{channel.bestFor}</p>
              <a href={channel.url} className="inline-flex items-center justify-center text-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-md transition-all duration-300 font-semibold mt-auto mx-auto" target="_blank" rel="noopener noreferrer">
                Watch Channel
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 17V7H7"></path></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResourcesFooter