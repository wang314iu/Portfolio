import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GalleryCard = ({
  imgUrl,
  title,
  description,
  projectUrl,
  sourceUrl,
  className,
}: {
  imgUrl: string;
  title: string;
  description: string;
  projectUrl: string;
  sourceUrl: string;
  className: string;
}) => {
  return (
    <Card sx={{ maxWidth: 345 }} className={`place-self-center ${className}`}>
      <CardMedia component="img" alt="projects" height="120" image={imgUrl} />
      <CardContent>
        <h4>{title}</h4>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">WEBSITE</Button>
        <Button size="small"> Code</Button>
      </CardActions>
    </Card>
  );
};

export default GalleryCard;
