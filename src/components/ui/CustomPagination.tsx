import { Box, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CustomPagination = ({ count, page, setPage }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Pagination
        count={count} // Fix: Use `count` instead of `totalPages`
        page={page}
        onChange={(e, value) => setPage(value)}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              "&.Mui-selected": {
                background: "linear-gradient(135deg,#FF1A44, #871628)", // Red gradient
                color: "white",
                fontWeight: "bold",
              },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              borderRadius: "50%",
              border:
                item.type === "previous" || item.type === "next"
                  ? "1px solid"
                  : "none",
              borderColor: item.type === "next" ? "yellow" : "white",
              color: "white",
            }}
            icon={
              item.type === "previous" ? (
                <ArrowBackIcon />
              ) : item.type === "next" ? (
                <ArrowForwardIcon />
              ) : null
            }
          />
        )}
      />
    </Box>
  );
};

export default CustomPagination;
