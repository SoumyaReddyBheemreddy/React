import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { bookCardTheme, cardStyle } from "./CardStyle";
import { ThemeProvider } from "@mui/material/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LinearProgress from '@mui/material/LinearProgress';
interface MediaCardProps {
  title: string;
  author: string;
  image: string;
  readingTime: string;
  progress:number;
}

export default function MediaCard(props: MediaCardProps) {
  const classes = cardStyle();
  return (
    <ThemeProvider theme={bookCardTheme}>
      <Card className={classes.bookcard}>
        <CardMedia
          className={classes.cardmedia}
          component="img"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography sx={{paddingTop:"7px"}} gutterBottom variant="subtitle1" component="div">
            {props.title}
          </Typography>
          <Typography sx={{paddingTop:"16px"}} variant="body2" color="text.secondary">
            {props.author}
          </Typography>
          <div className={classes.view}>
            <AccessTimeIcon className={classes.icon} />

            <Typography className={classes.text} variant="caption">
              {props.readingTime}
            </Typography>
          </div>
          <MoreHorizIcon className={classes.moreicon} />  
        </CardContent>
       
        <LinearProgress   variant="determinate" value={props.progress}  />
      </Card>
    </ThemeProvider>
  );
}
