"use client";

import { Box, Button, TextField, Typography, Tabs, Tab, Stack } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import { useState } from "react";
import Image from "next/image";
import { useLogin } from "../hooks/useLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
    const [tabValue, setTabValue] = useState(0);
    const { email, setEmail, password, setPassword, errors, handleSubmit } = useLogin();

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Box
            sx={{
                textAlign: "initial",
                width: "100%",
                maxWidth: "400px",
                alignSelf: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                mx: "auto",
                padding: "0 16px",
            }}
        >
            <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography variant="h1" sx={{ fontWeight: 500, fontSize: "2.5rem", lineHeight: "120%" }}>
                    Merhaba
                </Typography>

                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 400,
                        fontSize: "1rem",
                        lineHeight: "1.625rem",
                        letterSpacing: "-0.01em",
                    }}
                >
                    beije'e hoş geldin!
                </Typography>
            </Box>

            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                sx={{
                    display: "flex",
                    width: "100%",
                    "& .MuiTabs-indicator": {
                        backgroundColor: "#343131",
                    },
                    "& .MuiTabs-list": {
                        justifyContent: "space-around",
                    },
                }}
            >
                <Tab
                    disableRipple
                    disableFocusRipple
                    label={
                        <Box
                            sx={{
                                display: "flex",
                                height: "3rem",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                flex: "1 0 0",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    padding: "0.6875rem 0.5rem",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flex: "1 0 0",
                                    alignSelf: "stretch",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: tabValue === 0 ? "var(--Light-Primary-Main, #343131)" : "var(--Light-Text-Secondary, rgba(0, 0, 0, 0.60))",
                                        textAlign: "center",
                                        fontFamily: tabValue === 0 ? "Gorditas" : "Poppins",
                                        fontSize: "0.875rem",
                                        fontStyle: "normal",
                                        fontWeight: tabValue === 0 ? 400 : 500,
                                        lineHeight: "normal",
                                        flex: "1 0 0",
                                    }}
                                >
                                    Giriş Yap
                                </Typography>
                            </Box>
                        </Box>
                    }
                />
                <Tab
                    disableRipple
                    disableFocusRipple
                    label={
                        <Box
                            sx={{
                                display: "flex",
                                height: "3rem",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                flex: "1 0 0",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    padding: "0.6875rem 0.5rem",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flex: "1 0 0",
                                    alignSelf: "stretch",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: tabValue === 1 ? "var(--Light-Primary-Main, #343131)" : "var(--Light-Text-Secondary, rgba(0, 0, 0, 0.60))",
                                        textAlign: "center",
                                        fontFamily: tabValue === 1 ? "Gorditas" : "Poppins",
                                        fontSize: "0.875rem",
                                        fontStyle: "normal",
                                        fontWeight: tabValue === 1 ? 400 : 500,
                                        lineHeight: "normal",
                                        flex: "1 0 0",
                                    }}
                                >
                                    Üye Ol
                                </Typography>
                            </Box>
                        </Box>
                    }
                />
            </Tabs>

            <Stack sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<Image src="/google.svg" alt="google" width={24} height={24} />}
                    sx={{
                        textTransform: "none",
                        borderColor: "#343131",
                        color: "#343131",
                        borderRadius: "4rem",
                        "&:hover": {
                            borderColor: "#343131",
                            backgroundColor: "rgba(52, 49, 49, 0.1)",
                        },
                    }}
                >
                    Google ile Giriş Yap
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<AppleIcon />}
                    sx={{
                        textTransform: "none",
                        borderColor: "#343131",
                        color: "#343131",
                        borderRadius: "4rem",
                        "&:hover": {
                            borderColor: "#343131",
                            backgroundColor: "rgba(52, 49, 49, 0.1)",
                        },
                    }}
                >
                    Apple ile Giriş Yap
                </Button>

            </Stack>


            <TextField
                placeholder="E-mail adresin"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "1rem",
                    lineHeight: "1.4375em",
                    letterSpacing: "-0.03em",
                    fontStyle: "normal",
                    color: "rgba(0, 0, 0, 0.9)",
                    boxSizing: "border-box",
                    cursor: "text",
                    display: "inline-flex",
                    alignItems: "center",
                    position: "relative",
                    borderRadius: "0.5rem !important",
                    "& input": {
                        font: "inherit",
                        letterSpacing: "inherit",
                        color: "currentcolor",
                        border: 0,
                        boxSizing: "content-box",
                        background: "none",
                        height: "1.4375em",
                        margin: 0,
                        WebkitTapHighlightColor: "transparent",
                        display: "block",
                        minWidth: 0,
                        width: "100%",
                        animationName: "mui-auto-fill-cancel",
                        animationDuration: "10ms",
                        padding: "16.5px 14px",
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "rgba(0, 0, 0, 0.23)",
                        },
                        "&:hover fieldset": {
                            borderColor: "rgba(0, 0, 0, 0.87)",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#343131",
                        },
                    },
                }}
            />

            <TextField
                placeholder="Şifren"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                sx={{
                    borderRadius: "0.5rem !important",
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "rgba(0, 0, 0, 0.23)",
                        },
                        "&:hover fieldset": {
                            borderColor: "rgba(0, 0, 0, 0.87)",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#343131",
                        },
                    },
                }}
            />

            <Box sx={{ width: "100%", textAlign: "right" }}>
                <Typography sx={{ fontSize: "0.875rem", color: "#343131" }}>
                    Şifremi Unuttum?
                </Typography>
            </Box>

            <Button
                variant="contained"
                fullWidth
                onClick={handleSubmit}
                sx={{
                    borderRadius: "64px",
                    backgroundColor: "#343131",
                    color: "#FFF",
                    textTransform: "none",
                    fontSize: "1rem",
                    fontWeight: 500,
                    padding: "12px 22px 10px",
                    boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
                    transition:
                        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                        backgroundColor: "#2c2a2a",
                    },
                }}
            >
                Giriş Yap
            </Button>

            <ToastContainer />
        </Box>
    );
}
