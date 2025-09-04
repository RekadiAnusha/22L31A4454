import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function ShortenerForm({ onAddUrl }) {
  const [longUrl, setLongUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!longUrl) return;

    const newUrl = {
      shortUrl: "https://short.ly/" + Math.random().toString(36).substring(2, 8),
      longUrl,
      createdAt: new Date().toLocaleString(),
      expiresAt: "7 days",
      clickCount: 0,
      clicks: []
    };

    onAddUrl(newUrl);
    setLongUrl("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mb: 4,
        display: "flex",
        alignItems: "center",
        gap: 2
      }}
    >
      <TextField
        type="url"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={e => setLongUrl(e.target.value)}
        variant="outlined"
        fullWidth
        InputProps={{
          sx: { background: "#222", color: "#fff" }
        }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#2fe91eff",
          color: "#090909ff",
          fontWeight: "bold",
          '&:hover': { background: "#27e00bff" }
        }}
      >
        Shorten URL
      </Button>
    </Box>
  );
}
