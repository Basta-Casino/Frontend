import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import CustomPagination from "../../components/ui/CustomPagination";

// API base URL
const API_BASE_URL = "http://localhost:5000";

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
        width: { xs: 100, sm: 120, md: 200 },
        height: { xs: 100, sm: 120, md: 200 },
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
        "&:hover .overlay": {
          opacity: 1, // Show on hover
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: "100%",
          height: "100%", // Fill the card properly
          transition: "opacity 0.3s",
        }}
      />
      {/* Overlay Box */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#FFF",
          opacity: 0,
          transition: "opacity 0.3s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFA500",
            color: "#FFF",
            textTransform: "uppercase",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#FF8C00" },
          }}
        >
          Play
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#333333",
            color: "#FFF",
            textTransform: "uppercase",
            fontWeight: "bold",
            mt: 2,
            "&:hover": { backgroundColor: "#444444" },
          }}
        >
          Demo
        </Button>
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%",
            fontWeight: "bold",
            textAlign: "center",
            padding: "6px",
            background: "#162744",
            color: "#FFF",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Card>
  );
};

const GameCardList = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/games?page=${page}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch games: ${response.status}`);
        }
        const data = await response.json();
        if (data.success && data.data.games) {
          setGames(data.data.games);
          setTotalPages(data.data.pagination.totalPages);
        } else {
          throw new Error(data.message || "Failed to load games data");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        console.error("Error fetching games:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [page]);
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", color: "error.main", my: 4 }}>
        <Typography variant="h6">Error: {error}</Typography>
        <Typography variant="body2">
          Please check your API connection and try again.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(auto-fill, minmax(100px, 1fr))",
            md: "repeat(auto-fill, minmax(200px, 1fr))",
          },
          gap: 2,
          justifyContent: "center",
          padding: 2,
          minHeight: "400px",
        }}
      >
        {games.map((game) => (
          <GameCard key={game._id} title={game.name} image={game.image_url} />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
        <CustomPagination count={totalPages} page={page} setPage={setPage} />
      </Box>
    </Box>
  );
};

export default GameCardList;
