import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container
      component="main"
      maxWidth="xs"
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <Box className="text-center p-6 bg-white shadow-lg rounded-lg">
        <Typography variant="h2" color="textPrimary" className="mb-4">
          404
        </Typography>
        <Typography variant="h5" color="textSecondary" className="mb-4">
          Oops! Page not found.
        </Typography>
        <Typography variant="body1" color="textSecondary" className="mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
};
