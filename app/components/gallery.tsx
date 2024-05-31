import GalleryCard from "./gallery-card";

interface Props {
  showGallery: boolean;
}
const Gallery = ({ showGallery }: Props) => {
  const projects = [
    {
      imgUrl: "img/project.jpeg",
      title: "Project1",
      description: "adsfadfasdfadfasdf",
      projectUrl: "fadfadf",
      sourceUrl: "adsfadf",
    },
    {
      imgUrl: "img/project.jpeg",
      title: "Project2",
      description: "adsfasdfasdfasdf",
      projectUrl: "",
      sourceUrl: "",
    },
    {
      imgUrl: "img/project.jpeg",
      title: "Project3",
      description: "adsfadsfasdf",
      projectUrl: "",
      sourceUrl: "",
    },
  ];

  return (
    <section className="py-8 px-7 sm:px-16">
      <h3 className="text-2xl sm:text-3xl font-semibold py-12 text-center">
        Projects Gallery
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <GalleryCard
            key={project.title}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            projectUrl={project.projectUrl}
            sourceUrl={project.sourceUrl}
            className={`opacity-0  ${showGallery ? "fade-in" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
