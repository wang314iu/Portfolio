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
      style={{
        backgroundColor: "black",
        color: "white",
        boxShadow: "4px 4px 10px green",
      }}
      className={`bg-black place-self-center ${className} w-full w-full`}
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
