import GalleryCard from "./gallery-card";

interface Props {
  showGallery: boolean;
}
const Gallery = ({ showGallery }: Props) => {
  const projects = [
    {
      imgUrls: [
        "img/gamehub.png",
        "img/gamehub2.jpg",
        "img/gamehub3.png",
        "img/gamehub4.png",
        "img/gamehub5.png",
        "img/gamehub6.png",
        "img/gamehub7.png",
        "img/gamehub8.png",
      ],
      title: "Game Hub",
      descriptions: [
        "Gamehub navigates you to your favorite games.",
        "Provides you a light and dark theme.",
        "Find game you might interest in by genre.",
        "Search for games by name.",
        "Filter games by platform.",
        "Sort games by criteria.",
        "Check game platforms and rating. Click on the card to see more details.",
        "Display game details and useful links.",
      ],
      projectUrl: "https://alice-game-hub.vercel.app/",
      sourceUrl: "https://github.com/wang314iu/GameHub",
    },
    {
      imgUrls: [
        "img/socialVideoPlatform.png",
        "img/socialVideoPlatform2.png",
        "img/socialVideoPlatform5.png",
        "img/socialVideoPlatform3.png",
        "img/socialVideoPlatform4.png",
      ],
      title: "Social Video Platform",
      descriptions: [
        "See videos shared by people across the world.",
        "Filter by keywords your are interested in.",
        "Put your mouse over the video to watch it.",
        "Find out the author of the video and how other people feel about it!",
        "See the comments of the video.",
      ],
      projectUrl: "https://social-video-platform-zeta.vercel.app/",
      sourceUrl: "https://github.com/wang314iu/SocialVideoPlatform",
    },
    {
      imgUrls: [
        "img/portFolio.png",
        "img/portFolio2.png",
        "img/portFolio3.png",
        "img/portFolio4.png",
        "img/portFolio5.png",
      ],
      title: "Personal Portfolio",
      descriptions: [
        "Check out who I am :D",
        "Find out how to reach out to me.",
        "My project to showcase my skills.",
        "Slide to see project snapshots and details.",
        "Checkout the live demo and source code!",
      ],
      sourceUrl: "https://github.com/wang314iu/Portfolio",
    },
    {
      imgUrls: ["img/workInProgress.jpeg"],
      title: "To be continued...",
      descriptions: [],
    },
  ];

  return (
    <section className="py-8 px-7 md:px-12">
      <h3 className="text-2xl sm:text-3xl font-semibold py-12 text-center">
        Projects Gallery
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <GalleryCard
            key={project.title}
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
