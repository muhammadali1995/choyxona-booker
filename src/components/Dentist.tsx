import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Dentist } from "../models/Dentist";
import StyledLink from "./Link";

interface DentisCardTypes {
  dentist: Dentist;
}

export default function DentistCard({ dentist }: DentisCardTypes) {
  return (
    <Card sx={{ width: "240px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={dentist.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dentist.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dentist.about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{ flexGrow: 1 }}>
          <StyledLink sx={{ width: "100%" }} href={"/book/" + dentist._id}>
            Book
          </StyledLink>
        </Button>
      </CardActions>
    </Card>
  );
}
