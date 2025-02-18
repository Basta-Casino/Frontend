import React from "react";
import { Card, CardContent, CardMedia, Button, Typography, Box } from "@mui/material";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  borderColor: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, image, borderColor }) => {
  return (
    <Card
      sx={{
        background: "linear-gradient(to bottom, #0A0F24, #16243D)",
        borderRadius: "12px",
        padding: "12px",
        minWidth: 250,
        maxWidth: 300,
        border: `2px solid ${borderColor}`,
        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ color: "#FFF", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "#CCC", textAlign: "center", mb: 2 }}>
        {description}
      </Typography>

      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ width: "100px", height: "auto", mb: 2 }}
      />

      <Box display="flex" alignItems="center" gap={1}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#D7263D",
            color: "#FFF",
            textTransform: "uppercase",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#B71C30" },
          }}
        >
          Play
        </Button>
        <Typography variant="body2" sx={{ color: "#FFF" }}>
          4654
        </Typography>
        <img src="/chip-icon.png" alt="Chips" width="20" />
      </Box>
    </Card>
  );
};

const GameCardList = () => {
  const games = [
    {
      title: "BASTA ROULETTE",
      description: "Roulette: A thrilling blend of luck and excitement.",
      image: "/roulette.png",
      borderColor: "#E74C3C",
    },
    {
      title: "BASTA SLOT 7",
      description: "Slot 7 offers exciting spins and endless fun.",
      image: "/slot7.png",
      borderColor: "#007BFF",
    },
    {
      title: "BASTA DICE",
      description: "Dice game: Roll for luck, strategy & excitement.",
      image: "/dice.png",
      borderColor: "#F39C12",
    },
  ];

  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
      {games.map((game, index) => (
        <GameCard key={index} {...game} />
      ))}
    </Box>
  );
};

export default GameCardList;
