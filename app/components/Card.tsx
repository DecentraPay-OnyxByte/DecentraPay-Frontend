
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Typography from "@mui/material/Typography";
// import { PiArrowSquareOut } from "react-icons/pi";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import AlignItemsList from "./List";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BasicLineChart from "./Chart";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { green } from "@mui/material/colors";

export default function MediaCard() {
  return (
    <>
      <div>
        <div className="flex flex-row mx-2 px-2 ">
          <Card
            sx={{
              maxWidth: 345,
              marginTop: 10,
              height: 200,
              bgcolor: "background.paper",
              borderRadius: 4,
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Payments
              </Typography>
              <Typography
                variant="body2"
                color="black"
                width={300}
                sx={{ fontSize: 52 }}
              >
                <div className="flex flex-row items-center">
                  15%{" "}
                  <span>
                    <ArrowOutwardIcon className="w-8 h-10 ml-2 mb-2 text-green-500" />
                  </span>
                </div>
              </Typography>
            </CardContent>
            <CardActions>
              <Typography>
                <div className="ml-1">Increased compared to last week</div>
              </Typography>
              {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 345,
              marginTop: 10,
              height: 200,
              bgcolor: "background.paper",
              borderRadius: 4,
              marginLeft: 2,
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Daily Transactions
              </Typography>
              <Typography
                variant="body2"
                color="black"
                width={300}
                sx={{ fontSize: 52 }}
              >
                <div className="flex flex-row items-center">
                  4%{" "}
                  <span>
                    <ArrowOutwardIcon className="w-8 h-10 ml-2 mb-2 text-green-500" />
                  </span>
                </div>
              </Typography>
            </CardContent>
            <CardActions>
              <Typography>
                <div className="ml-1">All completed </div>
              </Typography>
              {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 250,
              marginTop: 10,
              height: 200,
              bgcolor: "background.paper",
              borderRadius: 4,
              marginLeft: 2,
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Users
              </Typography>
              <Typography
                variant="body2"
                color="black"
                width={300}
                sx={{ fontSize: 52 }}
              >
                <div>
                  <SemiCircleProgress
                    percentage={84}
                    size={{
                      width: 150,
                      height: 100,
                    }}
                    strokeWidth={10}
                    strokeColor="green"
                  />
                </div>
              </Typography>
            </CardContent>
            
            <CardActions>
              <Typography>
                <div className="ml-20 mt-[-20px]">All Users <span><ArrowRightAltIcon/></span> </div>
              </Typography>
              {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
            </CardActions>
          </Card>
        </div>
        <div className=" flex flex-row mx-4 mt-[-50px]">
          <Card
            sx={{
              maxWidth: 450,
              marginTop: 10,
              bgcolor: "background.paper",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography>
                <div className="flex flex-row justify-between">
                  <h1>Consumers</h1>
                  <h5>
                    Sort By <span className="font-bold">Newest</span>{" "}
                    <KeyboardArrowDownIcon />{" "}
                  </h5>
                </div>
              </Typography>
              <Typography>
                <AlignItemsList />
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 600,
              marginTop: 10,
              height: 400,
              bgcolor: "background.paper",
              borderRadius: 2,
              marginLeft: 2,
            }}
          >
            <CardContent>
              <Typography>Growth</Typography>
              <CardMedia >
                <BasicLineChart />
              </CardMedia>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
