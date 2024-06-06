import GalleryCard from "./galleryCard";
import { projects } from "../constants";

interface Props {
  showGallery: boolean;
}
const Gallery = ({ showGallery }: Props) => {
  return (
    <section className="h-full w-full py-[6%] px-[7%] md:px-[12%] lg:px-[20%] overflow-y-auto ">
      <h3 className="text-2xl sm:text-3xl font-semibold py-12 text-center">
        Projects
      </h3>
      <div className="grid grid-cols-1 gap-x-8 xl:gap-x-10 gap-y-20 md:gap-y-24 xl:gap-y-40">
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
