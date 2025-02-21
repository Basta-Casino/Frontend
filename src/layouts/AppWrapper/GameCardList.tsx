import React from "react";
import {
  Card,
  CardMedia,
  Button,
  Typography,
  Box,
  AvatarGroup,
  Avatar,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from "../../assets/home-slider-img1.png";
import sliderimg2 from "../../assets/home-slider-img2.png";
import sliderimg3 from "../../assets/home-slider-img3.png";
import profileImg from "../../assets/profile-img.png";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  borderColor: string;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  image,
  borderColor,
}) => {
  return (
    <Card
      sx={{
        background: "linear-gradient(to bottom, #0A0F24, #16243D)",
        borderRadius: "12px",
        padding: "12px",
        minWidth: { xs: 250, sm: 280, md: 300 }, // Responsive min-width
        maxWidth: { xs: 280, sm: 320, md: 350 }, // Responsive max-width
        border: `2px solid ${borderColor}`,
        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box display="flex">
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ color: "#FFF", fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#CCC", mb: 2 }}>
            {description}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Button variant="contained" color="error">
              Play
            </Button>
            <Typography variant="body2" sx={{ color: "#FFF" }}>
              4654
            </Typography>
            <AvatarGroup spacing={24}>
              <Avatar
                alt="Remy Sharp"
                src={profileImg}
                sx={{ width: 30, height: 30 }} // Reduces the size of the avatar
              />
              <Avatar
                alt="Remy Sharp"
                src={profileImg}
                sx={{ width: 30, height: 30 }} // Reduces the size of the avatar
              />
              <Avatar
                alt="Remy Sharp"
                src={profileImg}
                sx={{ width: 30, height: 30 }} // Reduces the size of the avatar
              />
            </AvatarGroup>
          </Box>
        </Box>

        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: "100px", height: "auto", mb: 2 }}
        />
      </Box>
    </Card>
  );
};

const GameCardList = () => {
  const games = [
    {
      title: "BASTA ROULETTE",
      description: "Roulette: A thrilling blend of luck and excitement.",
      image: sliderimg1,
      borderColor: "#E74C3C",
    },
    {
      title: "BASTA SLOT 7",
      description: "Slot 7 offers exciting spins and endless fun.",
      image: sliderimg2,
      borderColor: "#007BFF",
    },
    {
      title: "BASTA DICE",
      description: "Dice game: Roll for luck, strategy & excitement.",
      image: sliderimg3,
      borderColor: "#F39C12",
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 3, // Default

    responsive: [
      {
        breakpoint: 1200, // Below 1200px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // Below 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        mx: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Slider {...sliderSettings}>
        {games.map((game, index) => (
          <Box
            key={index}
            sx={{ display: "flex", justifyContent: "center", p: 1 }}
          >
            <GameCard {...game} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default GameCardList;
