import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Project() {
  const [project, setProject] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/project/" + id);
        setProject(res.data);
      } catch {}
    };
    getProject();
    console.log(project);
  }, [id]);

  return (
    <div>
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div
          class=" bg-transparent bg-opacity-25 rounded-lg p-6 text-gray-100 relative z-10"
          style={{}}
        >
          <div class="flex flex-wrap items-center">
            <div class="flex w-full h-48 md:h-64 lg:h-72 relative">
              <div class="w-8/12 pr-4 relative">
                <img
                  src=""
                  class="w-full h-full object-fill object-top rounded-lg bg-white"
                />
              </div>

              <div class="w-4/12 h-full">
                <div class="flex flex-col w-full h-full">
                  <div class="flex-1 pb-2">
                    <div class="w-full h-full relative">
                      <img
                        src=""
                        class=" absolute w-full h-full object-fill object-center rounded-lg bg-white"
                      />
                    </div>
                  </div>

                  <div class="flex-1 pt-2">
                    <div class="w-full h-full relative">
                      <img
                        src=""
                        class=" absolute w-full h-full object-fill object-center rounded-lg bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full pt-8 flex flex-col justify-between">
              <div>
                <h2 class="font-bold text-xl">{project?.title}</h2>

                <div class="flex flex-wrap text-center pt-4 mb-2">
                  {project?.tag?.map((tag, index) => (
                    <div
                      key={index}
                      className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-cyan-950 text-cyan-200"
                    >
                      {`#${tag}`}
                    </div>
                  ))}
                </div>

                <p class="text-xs leading-relaxed text-gray-50">
                  {project?.desc}
                </p>

                <ul class="text-xs mt-4 list-disc list-inside text-gray-50 leading-relaxed">
                  {project?.explain?.map((explain, index) => (
                    <li key={index}>{explain}</li>
                  ))}
                </ul>
              </div>

              <div class="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
                <Link to={project?.previewLink}>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Preview{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
