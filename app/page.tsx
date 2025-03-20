import { Box, Grid, Container } from "@mui/material";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          maxwidth: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingTop: "64px", // Navbar'ı hesaba kat

        }}
      >
        <Grid container sx={{ flexGrow: 1, flex: 1 }}>
          {/* Sol Taraf - Resim */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
              justifyContent: "center",
              alignItems: "center",


            }}
          >
            <Image
              src="/Image.png"
              alt="Görsel"
              layout="fill"
              objectFit="cover"
              objectPosition="center"

            />
          </Grid>

          {/* Sağ Taraf - Login Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F9F3F0",
              minHeight: "100vh",
            }}
          >
            <Container
              maxWidth={false}
              sx={{
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "2.5rem",
                padding: { xs: "0px 24px", md: "0px" },
                maxWidth: { xs: "100%", sm: "552px", lg: "1152px" },
              }}
            >
              <LoginForm />
            </Container>
          </Grid>
        </Grid>
      </Box >
      <Footer />
    </>
  );
}