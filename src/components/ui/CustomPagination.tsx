import { Box, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CustomPaginationProps {
  count: number;
  page: number;
  setPage: (value: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  count,
  page,
  setPage,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Pagination
        count={count}
        page={page}
        onChange={(e, value) => setPage(value)}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{
              previous: ArrowBackIcon,
              next: ArrowForwardIcon,
            }}
            sx={{
              "&.Mui-selected": {
                background: "linear-gradient(135deg,#FF1A44, #871628)",
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
          />
        )}
      />
    </Box>
  );
};

export default CustomPagination;
