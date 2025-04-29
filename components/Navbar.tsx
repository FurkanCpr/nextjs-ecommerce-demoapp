"use client";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import ProductAndPackages from "./ProductAndPackages";
import { useState } from "react";
// Removed incorrect import


interface NavbarProps {
    addbasket: number; // or the appropriate type
}

const Navbar = ({ addbasket }: NavbarProps) => {

    const router = useRouter();
    const pathname = usePathname();

    return (
        <Paper
            square
            elevation={0} // Gölgeyi sıfırladık
            sx={{
                width: "100%",
                backgroundColor: "#F7F6F5",
                position: "fixed",
                // En tepede sabit kalması için
                height: "80px",
                zIndex: 1200,
                display: "flex",
                justifyContent: "center",
                boxShadow: "none",
            }}
        >
            {/* Üç elementi kapsayan grup */}
            <Box
                sx={{
                    maxWidth: "1152px",
                    margin: "0 auto",
                    padding: { xs: "24px", sm: "24px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                {/* Sol Logo */}
                <Image src="/Logo.svg" alt="Logo" width={56} height={24} />

                {/* Ortadaki Menü */}
                <Box
                    sx={{
                        display: "flex",
                        gap: "24px",
                        flexGrow: 1,
                        justifyContent: "center",
                        overflowX: "hidden", // Yatay taşmayı gizle
                    }}
                >
                    <ProductAndPackages />

                    <Typography variant="h5">Biz Kimiz?</Typography>
                    <Typography variant="h5">Bağış Kültürü</Typography>
                    <Typography variant="h5">Regl Testi!</Typography>
                    <Typography
                        variant="h5"
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                            // next/link componentini kullan
                            router.push("/custom-packet");
                        }}
                    >
                        Kendi Paketini Oluştur
                    </Typography>
                </Box>

                {/* Sağdaki İkonlar */}
                <Box
                    sx={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "flex-end",
                        overflowX: "hidden", // Yatay taşmayı gizle
                    }}
                >
                    {/* Basket Icon Checker */}
                    <Box visibility={pathname !== "/custom-packet" ? "hidden" : "visible"}>
                        <Typography sx={{ position: "absolute", marginTop: "-0.6rem", marginLeft: "2.25rem", backgroundColor: "#2E7D32", width: "1.25rem", height: "1.25rem", borderRadius: "1000px", fontSize: "14px", textAlign: "center" }}>{addbasket}</Typography>
                    </Box>

                    <Image src="/shopping-cart-01.svg" alt="Cart" width={24} height={24} />


                    {/* router.push için yeni box açtık image içine */}
                    <Box
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                            router.push("/");
                        }}
                    >
                        <Image
                            src="/user-01.svg"
                            alt="User"
                            width={24}
                            height={24}
                        />
                    </Box>
                </Box>
            </Box>
        </Paper >
    );
};

export default Navbar;

