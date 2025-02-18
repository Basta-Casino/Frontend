import React from "react";
import { Card, CardMedia, Button, Typography, Box } from "@mui/material";
import gameImg from "../../assets/game-1.png"; // Import your image here

interface GameCardProps {
  title: string;
  image: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, image }) => {
  return (
    <Card
      sx={{
        background: "linear-gradient(to bottom, #0A0F24, #16243D)",
        borderRadius: "12px",
        minWidth: 250,
        maxWidth: 300,
        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: "100%",
          height: "auto",
          transition: "opacity 0.3s",
          "&:hover": {
            opacity: 0.7,
          },
        }}
      />
      {/* Overlay Box */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "#FFF",
          opacity: 0,
          transition: "opacity 0.3s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#D7263D",
            color: "#FFF",
            textTransform: "uppercase",
            fontWeight: "bold",
            mt: 2,
            "&:hover": { backgroundColor: "#B71C30" },
          }}
        >
          Play
        </Button>
      </Box>
    </Card>
  );
};

const games = [
  {
    title: "Game 1",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Game 2",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Game 3",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Game 4",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Game 5",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Game 6",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Game 7",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Game 8",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Game 9",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Game 10",
    image: "https://via.placeholder.com/300x200",
  },
];

const GameCardList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        marginTop: 2,
      }}
    >
      {games.map((game, index) => (
        <GameCard key={index} title={game.title} image={gameImg} />
      ))}
    </Box>
  );
};

export default GameCardList;
