import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  return (
    <Container
      component="main"
      maxWidth="md"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <Box className="text-center p-8 bg-white shadow-lg rounded-lg">
        <Typography variant="h2" color="textPrimary" className="mb-4">
          About Avocado App
        </Typography>
        <Typography variant="h5" color="textSecondary" className="mb-6">
          Your Personal Note-Taking Assistant
        </Typography>
        <Typography variant="body1" color="textSecondary" className="mb-6">
          Avocado App is designed to help you keep track of your thoughts,
          ideas, and tasks. With a user-friendly interface and intuitive
          features, you can easily create, organize, and manage your notes.
        </Typography>
        <Typography variant="body1" color="textSecondary" className="mb-6">
          Whether you’re jotting down quick reminders or detailed notes, Avocado
          App is here to streamline your note-taking process and keep you
          organized.
        </Typography>
        <Typography variant="body1" color="textSecondary" className="mb-6">
          If you have any feedback or need support, feel free to reach out to
          us. We’re always here to help!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};
