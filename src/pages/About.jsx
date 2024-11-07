import Button from "../components/Button";

export default function About() {
  return (
    <div className="min-h-screen px-20 mb-10">
      <div className="flex gap-4 border rounded-md p-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-6 max-w-2xl">
            Hi! My name is Daniel Li, I am an aspiring web developer with a passion for crafting engaging and user-focused web exeriences.
            I bring together a strong foundation of Business Administration from Seneca and expertise in Technology Management
            from TMU, with the goal of building user-friendly applications that reflect real-world challenges.
          </p>
          <Button>Download Resume</Button>
        </div>
        <img 
          src="https://img.freepik.com/premium-psd/minimalist-programmer-with-characters-coding-debugging-s-png-people-daily-work-illustration_1142283-410898.jpg" 
          alt="Profile Picture"
          className="w-72 h-64 rounded-full mx-auto mt-4"
        />
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white flex gap-4 border rounded-md p-4 my-6">
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank" rel="noopener noreferrer"
          className="text-2xl hover:text-gray-200"
        >
          LinkedIn
          <i className="fa-brands fa-linkedin px-1"></i>
        </a>
      
        <a
          href="https://github.com/yourprofile"
          target="_blank" rel="noopener noreferrer"
          className="text-2xl hover:text-gray-200"
        >
          GitHub
          <i className="fa-brands fa-github px-1"></i>
        </a>
      </div>
      <div className="mb-6 border rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4">My Skills</h1>
        <p><span className="font-semibold">Frontend Development: </span>JavaScript, React, HTML, CSS</p>
        <p><span className="font-semibold">Backend Basics: </span>Node.js, Express</p>
        <p><span className="font-semibold">UI/UX: </span>Tailwind CSS</p>
        <p><span className="font-semibold">Tools: </span>Git, Github</p>
        <p><span className="font-semibold">Other: </span>Python, Webpack</p>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="108" height="108" viewBox="0 0 48 48" >
          <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
          </svg>
          <img
            src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
            alt="react logo"
            className="w-20 h-20"
          />
          <img 
            src="https://www.svgrepo.com/show/303360/nodejs-logo.svg" 
            alt="nodejs logo"
            className="w-20 h-20 mx-2"
          />
          <img 
            src="https://www.svgrepo.com/show/452091/python.svg" 
            alt="python logo" 
            className="w-20 h-20"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 border rounded-md p-6 mb-6">
        <h1 className="text-white text-2xl font-bold mb-4">My Education</h1>
        <div className="flex justify-between gap-4">
          <div className="flex-1 p-4 bg-blue-200 rounded-md">
            <h2 className="text-xl font-semibold">Toronto Metropolitan University</h2>
            <p>Bachelor of Information Technology</p>
            <p>Graduation Date: Expected 2025</p>
          </div>
          <div className="flex-1 p-4 bg-red-200 rounded-md">
            <h2 className="text-xl font-semibold">Seneca Polytechnic</h2>
            <p>Diploma in Business Administration</p>
            <p>Graduation Date: 2023</p>
          </div>
        </div>
      </div>

      <div className="border rounded-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">Goals</h1>
        <p className="pb-2">
            <span className="font-semibold">Continuous Learning: </span>
            I strive to keep my skills sharp and stay current with the latest developments in web development and technology. My goal is to constantly learn and adapt to new tools, techniques, and frameworks.
        </p>
        <p className="pb-2">
            <span className="font-semibold">Building Meaningful Projects: </span>
            I aim to create projects that have real-world applications, focusing on building tools and applications that solve genuine problems and make an impact.
        </p>
        <p className="pb-2">
            <span className="font-semibold">Professional Growth: </span>
            I’m committed to advancing my career, aspiring to take on roles with greater responsibility and to lead projects that challenge me to grow and refine my abilities.
        </p>
        <p className="pb-2">
            <span className="font-semibold">Networking and Collaboration: </span>
            Building connections and collaborating with other developers is a key goal. I hope to work with and learn from talented individuals who share a passion for technology.
        </p>
      </div>

      <div className="text-white bg-gradient-to-r from-blue-500 to-blue-700 border rounded-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">Values</h1>
        <p className="pb-2">
            <span className="font-semibold">Integrity: </span>
            I believe in being honest, transparent, and ethical in all aspects of my work and interactions. Integrity is the foundation of my professional and personal life.
        </p>
        <p className="pb-2">
            <span className="font-semibold">Innovation: </span>
            I value creativity and innovation, always looking for ways to improve processes, solve problems, and bring new ideas to life through my work.
        </p>
        <p className="pb-2">
            <span className="font-semibold">Empathy: </span>
            Understanding and considering others’ perspectives is important to me. I strive to build user-centric applications that are accessible and beneficial for everyone.
        </p>
        <p className="pb-2">
            <span className="font-semibold">Dedication: </span>
            I am committed to excellence in my work, always giving my best effort and taking pride in delivering high-quality, polished projects.
        </p>
      </div>

      <h1 className="text-4xl font-bold my-6">Personal Interests</h1>
      <div className="border rounded-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">Hobbies</h1>
        <p className="pb-2"><span className="font-semibold">Fitness and Gym Enthusiast: </span>Committed to regular workouts, I enjoy pushing my physical limits and challenging myself with strength and endurance training. </p>
        <p className="pb-2"><span className="font-semibold">Cars & Motorsports: </span> Passionate about high-performance vehicles, especially BMW and Mercedes-Benz models. I appreciate their engineering, design, and innovation, and love staying up-to-date with the latest in automotive tech.</p>
        <p className="pb-2"><span className="font-semibold">Gaming: </span>Gaming has been a long-time hobby, whether it's strategizing in competitive games or exploring immersive, story-driven worlds. It’s a way to unwind and stay connected with friends.</p>
        <p className="pb-2"><span className="font-semibold">Shows & Series: </span>I love getting into a good series, especially those that keep you on the edge of your seat. Whether it’s a binge-worthy thriller or a classic series, I enjoy escaping into different worlds.</p>
        <p className="pb-2"><span className="font-semibold">Hands-On Projects: </span>From DIY tasks to building tech projects, I love creating and fixing things. Working on personal projects gives me a sense of accomplishment and fuels my curiosity.</p>
        <p><span className="font-semibold">Work & Self-Improvement: </span>I’m passionate about my work and dedicated to continuously improving my skills. I enjoy taking on new challenges and learning new technologies to expand my knowledge.</p>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white border rounded-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">My Favourite Movies</h1>
        <p className="pb-2"><span className="font-semibold">The Matrix (1999): </span>
        <br/>A groundbreaking sci-fi action film directed by the Wachowskis. This iconic movie follows Neo, a computer hacker, who discovers that reality is an elaborate simulation controlled by intelligent machines. As he joins a rebellion to free humanity, the film explores themes of perception, identity, and freedom in a thrilling, visually inventive way. </p>
        <p className="pb-2"><span className="font-semibold">Inception (2010): </span> 
        <br/>Directed by Christopher Nolan, this mind-bending thriller dives into the world of dreams within dreams. The story follows a team of skilled "extractors" who enter people’s subconscious to steal secrets. Its layers of dream worlds, intricate plot, and innovative visuals make it a standout in sci-fi cinema.</p>
        <p className="pb-2"><span className="font-semibold">Forrest Gump (1994): </span>
        <br/>This heartwarming drama, directed by Robert Zemeckis, tells the story of Forrest Gump, a man with unwavering kindness and innocence who unwittingly shapes American history. From inspiring people to run cross-country to meeting presidents, Forrest's journey is as inspirational as it is touching.</p>
        <p className="pb-2"><span className="font-semibold">The Dark Knight (2008): </span>
        <br/>Christopher Nolan's critically acclaimed superhero film transformed the genre, blending crime thriller and action elements. Heath Ledger’s unforgettable portrayal of the Joker brought a complex, chilling villain to life, making this movie a standout for its realism, intense performances, and moral questions.</p>
      </div>
    </div>
  )
}
