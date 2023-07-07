import gitHubLogo from "/github-mark-white.svg";

type ProjectProps = {
  name: string;
  description: string;
  photoRef: string;
  readMeUrl: string;
  hostedUrl: string;
  techUsed: string[];
};

const Project = (props: ProjectProps) => {
  const compileTechUsed = () => {
    return props.techUsed.map((tech, index) => {
      return (
        <div
          key={index}
          className="mx-2 flex max-h-10 items-center justify-center rounded-full bg-secondary px-3 text-center align-middle font-bold text-info-content"
        >
          {tech}
        </div>
      );
    });
  };

  const projectInfo = () => {
    return (
      <div className="pl-3 lg:pl-0  ">
        <h1 className="text-content mb-5  text-2xl font-bold group-hover:text-primary">
          {props.name}
        </h1>
        <div>{props.description}</div>
        <div className="my-5 flex justify-start align-middle">
          <img src={gitHubLogo} className="mr-3 h-[1rem]" alt="" /> Read me
          {compileTechUsed()}
        </div>
      </div>
    );
  };

  const image = () => {
    return (
      <a
        className="items-left flex h-full justify-center "
        href={props.hostedUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="mx-auto mt-5 h-auto max-h-[8rem] sm:max-h-[10rem] md:max-h-[10rem] md:min-h-[7rem] lg:max-h-[10rem] w-full object-cover rounded-md transition-all duration-300"
          src={props.photoRef}
          alt="Album"
        />
      </a>
    );
  };

  return (
    <div className="group relative w-full transition-all lg:w-full mb-4">
      <a
        href={props.hostedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full block"
      >
        <div className="grid grid-cols-1 items-center rounded-md transition group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg motion-reduce:transition-none md:grid-cols-[3fr_7fr] ">
          <div
            id="left"
            className="mb-10 mr-10 flex items-center justify-center align-middle sm:mb-10"
          >
            {image()}
          </div>
          <div id="right">{projectInfo()}</div>
        </div>
      </a>
    </div>
  );
};

export default Project;
