import { Container } from "@mui/material";
import CasinoBanner from "../../layouts/AppWrapper/CasinoBanner";
import GameCardList from "../../layouts/AppWrapper/GameCardList";
import SearchNavbar from "../../layouts/AppWrapper/SearchNavbar";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      {" "}
      <CasinoBanner />
      <SearchNavbar />
      <GameCardList />
    </Container>
  );
};

export default HomePage;
