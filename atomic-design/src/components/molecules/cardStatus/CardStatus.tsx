import React,{ReactNode} from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

interface CardStatusProps{
    variant : "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"subtitle1"|"subtitle2"| "button" | "caption" | "inherit" | "body1" | "body2" | "overline" ;
    children: ReactNode;
    icon:typeof AccessTimeIcon | typeof PersonOutlineIcon;
}
const useStyle = makeStyles({
    center:{
        display:"flex"
    },
    icon:{
        left: "8.33%",
        right: "8.33%",
        top: "8.33%",
        bottom: "8.33%",
        width: "16.67px",
        height: "16.67px",
        marginRight:"5.67px"
    },
    text:{
        left: "14.08%",
        right: "52.11%",
        top: "82.83%",
        bottom: "13.3%",
        
        fontStyle: "normal",
        fontWeight: "normal",
        fonSize: "14px",
        lineHeight: "18px",
        verticalAlign:"top",
        color: "#6D787E",
    }

});
function CardStatus(props:CardStatusProps){
    const {icon,variant,children, ...rest} = props;
    const classes = useStyle();
    return(
        <div className={classes.center}>
            {React.createElement(icon,{className:classes.icon})}
            <Typography className={classes.text} variant={`${variant}`}>
                    {children}
            </Typography>
        </div>
     
    );
}
export default CardStatus;