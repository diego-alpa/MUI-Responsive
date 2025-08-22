import * as React from "react";
import { Container, Card, CardContent, Typography, TextField, Button, Stack, Snackbar, Alert} from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export default function App() {
  const [nombre, setNombre] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;
    setOpen(true);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#F9F9F9",
      }}
    >
      <Card
        sx={{
          width: { xs: "90%", sm: "400px" },
          boxShadow: 6,
          borderRadius: 3
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Demo MUI - Mobile First
          </Typography>

          <Typography
            variant="body2"
            align="center"
            sx={{ mb: 3, color: "text.secondary" }}
          >
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Escribe tu nombre"
                variant="outlined"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<SendRoundedIcon />}
                fullWidth
                sx={{ py: 1.2 }}
              >
                Enviar
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          ¡Hola {nombre}! Ten un bonito día 😊
        </Alert>
      </Snackbar>
    </Container>
  );
}
