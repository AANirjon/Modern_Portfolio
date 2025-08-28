import ".//Tools.css"
import { FaBootstrap, FaCss3, FaDatabase, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const Tools = () => {
    return (

        <div className="mt-5" id="tools">
            <h1 className="des">Tools I Use</h1><br />
            <div className="tool-container">
                <div className="tool-pad text-size">
                    <div > <FaHtml5 /> HTML:  <progress className="progress progress-success w-56" value={95} max="100"></progress> </div>
                    <div> <FaCss3 /> Vanila CSS:  <progress className="progress progress-success w-56" value={90} max="100"></progress> </div>
                    <div ><FaReact /> React.JS:  <progress className="progress progress-success w-56" value={90} max="100"></progress> </div>
                    <div ><FaNodeJs /> Node.js:  <progress className="progress progress-success w-56" value={70} max="100"></progress> </div>
                    <div ><FaDatabase /> MongoDB:  <progress className="progress progress-success w-56" value={80} max="100"></progress></div>
                    <div ><IoLogoFirebase /> Firebase:  <progress className="progress progress-success w-56" value={80} max="100"></progress> </div>
                    <div ><RiTailwindCssFill /> Tailwind CSS:  <progress className="progress progress-success w-56" value={90} max="100"></progress> </div>
                    <div ><FaBootstrap /> Bootstrap:  <progress className="progress progress-success w-56" value={90} max="100"></progress></div>
                    <div ><RiNextjsFill /> Next.JS: <progress className="progress progress-success w-56" value={90} max="100"></progress></div>
                </div>
            </div>


        </div>
    );
};

export default Tools;