import workone from '../assets/Works1.jpg';
import worktwo from '../assets/Works2.jpg';

function Works() {
  return (
    <div className='w-full h-screen bg-zinc-950 pt-1 relative overflow-hidden'>
      <div className='heading mt-8 text-8xl text-orange-400 tracking-wide text-center'>Works</div>
      
      {/* Full-height grid container */}
      <div className="h-[80vh] flex flex-col md:flex-row gap-8 p-8 mt-8">
        <ProjectCard 
          image={workone}
          tags={["Travel", "Collaboration"]}
          title="Project 1"
          link="./albums/streets-of-india"
        />
        
        <ProjectCard 
          image={worktwo}
          tags={["Photography", "Art"]}
          title="Project 2"
          link="./albums/another-project"
        />
      </div>
    </div>
  );
}

const ProjectCard = ({ image, tags, title, link }) => {
  return (
    <div className="relative h-full w-full group" style={{ perspective: '1200px' }}>
      <a href={link} className="block h-full w-full relative overflow-hidden rounded-2xl">
        {/* Image container */}
        <div className="absolute inset-0 h-full w-full transition-all duration-500 group-hover:scale-105">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm backdrop-blur-sm bg-white/10 rounded-full text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-medium text-[#FAF5EA]">{title}</h3>
            <ArrowIcon />
          </div>
        </div>

        {/* Hover elements */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {[0, 90, 180, 270].map((rotation) => (
            <div 
              key={rotation}
              className="absolute inset-0"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="absolute top-1/2 left-1/2 w-3/4 h-px bg-[#FAF5EA]/20 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};

const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 256 256" 
    className="w-6 h-6 text-[#FAF5EA]"
  >
    <path 
      d="M196,64V168a4,4,0,0,1-8,0V73.66L66.83,194.83a4,4,0,0,1-5.66-5.66L182.34,68H88a4,4,0,0,1,0-8H192A4,4,0,0,1,196,64Z" 
      fill="currentColor"
    />
  </svg>
);

export default Works;