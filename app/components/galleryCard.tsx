import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Carousel from "./carousel";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const GalleryCard = ({
  imgUrls,
  title,
  descriptions,
  projectUrl,
  sourceUrl,
  className,
  tags,
}: {
  imgUrls: string[];
  title: string;
  descriptions: string[];
  projectUrl?: string;
  sourceUrl?: string;
  className: string;
  tags: string[];
}) => {
  const openUrl = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      className={`text-white bg-black rounded place-self-center ${className} w-full shadow-md shadow-grey-500`}
    >
      <Carousel images={imgUrls} descriptions={descriptions} />
      <CardContent style={{ padding: "8px 12px 0 12px" }}>
        <Stack direction="row" spacing={1} className="pb-3 ">
          {tags.map((tag) => (
            <Chip
              size="small"
              key={tag}
              label={tag}
              className="text-green-600/[.9] bg-green-600/[.3] text-xs"
            />
          ))}
        </Stack>
        <h4 className="font-bold text-xl">{title}</h4>
      </CardContent>
      <CardActions>
        {projectUrl && (
          <Button
            size="small"
            className="text-green-600 font-bold"
            onClick={() => openUrl(projectUrl)}
          >
            WEBSITE
          </Button>
        )}
        {sourceUrl && (
          <Button
            size="small"
            className="text-green-600 font-bold"
            onClick={() => openUrl(sourceUrl)}
          >
            Code
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default GalleryCard;
