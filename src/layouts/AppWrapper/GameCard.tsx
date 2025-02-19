import React, { useEffect, useState } from "react";
import { Card, CardMedia, Button, Typography, Box, CircularProgress } from "@mui/material";

// API base URL
const API_BASE_URL = 'http://localhost:5000';

interface Game {
  _id: string;
  name: string;
  provider: string;
  image_url: string;
  status: number;
}

interface GameResponse {
  success: boolean;
  message: string;
  data: {
    games: Game[];
    pagination: {
      total: number;
      page: number;
      totalPages: number;
    };
  };
}

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

const GameCardList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/games`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch games: ${response.status}`);
        }
        
        const data: GameResponse = await response.json();
        
        if (data.success && data.data.games) {
          setGames(data.data.games);
        } else {
          throw new Error(data.message || 'Failed to load games data');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching games:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', color: 'error.main', my: 4 }}>
        <Typography variant="h6">Error: {error}</Typography>
        <Typography variant="body2">Please check your API connection and try again.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        marginTop: 2,
      }}
    >
      {games.map((game) => (
        <GameCard 
          key={game._id} 
          title={game.name} 
          image={game.image_url} 
        />
      ))}
    </Box>
  );
};

export default GameCardList;