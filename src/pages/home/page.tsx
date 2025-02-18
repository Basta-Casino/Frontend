import { Container } from "@mui/material";
import CasinoBanner from "../../layouts/AppWrapper/CasinoBanner";
import GameCardList from "../../layouts/AppWrapper/GameCardList";
import SearchNavbar from "../../layouts/AppWrapper/SearchNavbar";
import GameCard from "../../layouts/AppWrapper/GameCard";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      {" "}
      <CasinoBanner />
      <GameCardList />
      <SearchNavbar />
      <GameCard />
    </Container>
  );
};

export default HomePage;
