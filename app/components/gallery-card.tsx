import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Carousel from "./carousel";

const GalleryCard = ({
  imgUrls,
  title,
  descriptions,
  projectUrl,
  sourceUrl,
  className,
}: {
  imgUrls: string[];
  title: string;
  descriptions: string[];
  projectUrl?: string;
  sourceUrl?: string;
  className: string;
}) => {
  const openUrl = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      className={`text-white bg-black rounded place-self-center ${className} w-full shadow-md shadow-grey-500/50`}
    >
      <Carousel images={imgUrls} descriptions={descriptions} />
      <CardContent style={{ padding: "8px 12px 0 12px" }}>
        <h4 className="font-bold">{title}</h4>
      </CardContent>
      <CardActions>
        {projectUrl && (
          <Button size="small" onClick={() => openUrl(projectUrl)}>
            WEBSITE
          </Button>
        )}
        {sourceUrl && (
          <Button size="small" onClick={() => openUrl(sourceUrl)}>
            Code
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default GalleryCard;
