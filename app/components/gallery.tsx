import GalleryCard from "./galleryCard";
import { projects } from "../constants";

interface Props {
  showGallery: boolean;
}
const Gallery = ({ showGallery }: Props) => {
  return (
    <section className="h-full w-full p-[7%] md:px-[12%] lg:px-[8%] overflow-y-auto">
      <h3 className="text-2xl sm:text-3xl font-semibold font-mono py-12 text-center tracking-wider">
        PROJECTS
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {projects.map((project) => (
          <GalleryCard
            key={project.title}
            tags={project.tags ?? []}
            imgUrls={project.imgUrls}
            title={project.title}
            descriptions={project.descriptions}
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
