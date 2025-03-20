"use client";
import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'; // RootState'i doğru yoldan import edin

import { Container, Tabs, Tab, TextField, Avatar, Chip, Button } from '@mui/material';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


const productToPacketMap: { [key: string]: string } = {
    "beije Ped": "Ped Paketleri",
    "beije Günlük Pad": "Popüler Paketler",
    "beije Tampon": "Tampon Paketleri"
};

const getPacketTitle = (productTitle: string) => {
    return productToPacketMap[productTitle] || "Kap Paketleri";
};

const Packets = () => {

    // Sepete eklenecek ürün sayısını tutmak için kullanılan state
    const [addbasket, setAddBasket] = useState(0);

    // Ürün sayısını tutmak için kullanılan state
    const [counts, setCounts] = useState<{ [key: string]: number }>({});

    // Menstrual ve Destekleyici Ürünleri ayırt etmek için kullanılan tab state
    const [value, setValue] = useState(0);

    // Tab değiştiğinde çalışacak fonksiyon
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    // Çöp ikonu için kullanılan fonksiyon
    const handleClear = (packetTitle: string) => {
        setCounts(prevCounts => {
            const newCounts = { ...prevCounts };
            Object.keys(newCounts).forEach(subProductId => {
                const product = products.find(p => p.subProducts.some(sp => sp._id === subProductId));
                if (product && getPacketTitle(product.title) === packetTitle) {
                    delete newCounts[subProductId];
                }
            });
            return newCounts;
        });
    };
    const handleIncrement = (subProductId: string) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [subProductId]: (prevCounts[subProductId] || 0) + 1
        }));
    };

    const handleDecrement = (subProductId: string) => {
        setCounts(prevCounts => {
            const newCounts = { ...prevCounts };
            if (newCounts[subProductId] > 1) {
                newCounts[subProductId] -= 1;
            } else {
                delete newCounts[subProductId];
            }
            return newCounts;
        });
    };

    // Redux durumundan ürünleri çek
    const { products, packets } = useSelector((state: RootState) => state.products);
    const menstrualProducts = products.filter(product => product.type === "Menstrual");
    const supportiveProducts = products.filter(product => product.type === "Other");

    return (
        <>
            <Navbar addbasket={addbasket} />
            {/* Body */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '2.5rem 0rem 6rem 0rem',
                    backgroundColor: "#F9F3F0",
                }}
            >
                {/* Grid */}
                <Container
                    sx={{
                        display: 'flex',
                        gap: '7.625rem',
                        width: '100%', // Ensure the grid has a fixed width
                        padding: "100px 48px 96px !important",
                    }}
                >
                    {/* Column */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '2rem',
                            width: '35.25rem', // Ensure the column has a fixed width
                        }}
                    >
                        {/* Content */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '1.5rem',
                                width: '100%', // Ensure the content takes full width
                            }}
                        >
                            {/* Title */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    gap: '1.5rem',
                                    width: '100%', // Ensure the title takes full width
                                }}
                            >
                                {/* Section Title*/}
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '1.5rem',
                                        flex: '1 0 0',
                                        alignSelf: 'stretch',
                                    }}>

                                    {/* Column*/}
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        flex: '1 0 0',
                                    }}>
                                        <Typography
                                            sx={{
                                                color: 'var(--Light-Text-Primary, rgba(0, 0, 0, 0.90))',
                                                fontFeatureSettings: "'liga' off, 'clig' off",
                                                fontSize: '1.75rem',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                lineHeight: '130%', /* 2.275rem */
                                                letterSpacing: '-0.0525rem',
                                                alignSelf: 'stretch',
                                            }}
                                        >
                                            Kendi Paketini Oluştur
                                        </Typography>
                                    </Box>
                                    {/* Column*/}
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'row-reverse',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                    }}>

                                        <Typography
                                            sx={{
                                                color: 'var(--Light-Primary-Main, #343131)',
                                                fontFeatureSettings: "'liga' off, 'clig' off",
                                                fontSize: '1rem',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                lineHeight: '1.625rem', /* 162.5% */
                                                letterSpacing: '-0.015rem',
                                            }}
                                        >
                                            Nasıl Çalışır?
                                        </Typography>


                                    </Box>
                                </Box>
                            </Box>

                            <Typography
                                sx={{
                                    color: 'rgba(0, 0, 0, 0.60)',
                                    fontFeatureSettings: "'liga' off, 'clig' off",
                                    fontSize: '1rem',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: '160%', /* 1.6rem */
                                    letterSpacing: '-0.01rem',
                                    width: '100%', // Ensure the text takes full width
                                }}
                            >
                                Döngünün uzunluğuna, kanamanın yoğunluğuna ve kullanmak istediğin ürünlere göre tamamen kendine özel bir paket oluştur!
                            </Typography>
                        </Box>
                        {/* Container */}


                        <Box
                            sx={{
                                display: 'flex',
                                width: '35.25rem',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '1.5rem',
                            }}
                        >
                            <Tabs
                                value={value}
                                onChange={handleChange}
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
                                                        color: value === 0 ? "var(--Light-Primary-Main, #343131)" : "var(--Light-Text-Secondary, rgba(0, 0, 0, 0.60))",
                                                        textAlign: "center",
                                                        fontFamily: value === 0 ? "Gorditas" : "Poppins",
                                                        fontSize: "0.875rem",
                                                        fontStyle: "normal",
                                                        fontWeight: value === 0 ? 400 : 500,
                                                        lineHeight: "normal",
                                                        flex: "1 0 0",
                                                    }}
                                                >
                                                    Menstrual Ürünler
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
                                                        color: value === 1 ? "var(--Light-Primary-Main, #343131)" : "var(--Light-Text-Secondary, rgba(0, 0, 0, 0.60))",
                                                        textAlign: "center",
                                                        fontFamily: value === 1 ? "Gorditas" : "Poppins",
                                                        fontSize: "0.875rem",
                                                        fontStyle: "normal",
                                                        fontWeight: value === 1 ? 400 : 500,
                                                        lineHeight: "normal",
                                                        flex: "1 0 0",
                                                    }}
                                                >
                                                    Destekleyici Ürünler
                                                </Typography>
                                            </Box>
                                        </Box>
                                    }
                                />
                            </Tabs>
                            <Box
                                sx={{
                                    display: 'block',
                                    width: '35.25rem',
                                    padding: '1rem 0rem',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '1.25rem',
                                    borderRadius: '1rem',
                                    background: '#FFF',
                                }}
                            >
                                {/* !! */}
                                {value === 0 && menstrualProducts.map((product, index) => (
                                    <Accordion key={index} sx={{ border: 'none', boxShadow: 'none', marginBottom: '1rem' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ borderBottom: 'none', display: 'flex', alignItems: 'center' }}>
                                            <Image src="./Frame.svg" alt="Frame" width={24} height={24} />
                                            <span style={{ color: "#343131", textAlign: "center", fontSize: "1.25rem", fontStyle: "normal", lineHeight: "1.5rem", letterSpacing: "-0.0125rem", marginLeft: "1rem" }}>
                                                {product.title}
                                            </span>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ borderTop: 'none' }}>
                                            {product.subProducts.map((subProduct, subIndex) => (
                                                <Box key={subIndex} sx={{ display: 'flex', paddingRight: '1rem', flexDirection: 'column', alignItems: 'flex-start', gap: '1.25rem', alignSelf: 'stretch', backgroundColor: '#FFF', marginBottom: '1rem' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
                                                        <Box sx={{ display: 'flex', width: '16.71875rem', alignItems: 'center', gap: '1rem' }}>
                                                            <Box sx={{ width: '3rem', height: '1.1875rem', flexShrink: 0 }}>
                                                                <Box sx={{ width: '3rem', height: '1.1875rem', flexShrink: 0, borderRadius: '0rem 0.25rem 0.25rem 0rem', background: '#EF4E25' }}>
                                                                    <Box sx={{ display: 'flex', width: '1.25rem', height: '1.25rem', padding: '0.26044rem 0.10419rem 0.3065rem 0.10419rem', justifyContent: 'center', alignItems: 'center', flexShrink: 0, marginLeft: '1.34rem', marginRight: '0.41rem' }}>
                                                                        <Image src="/Frame.svg" alt="Frame" width={16.67} height={10.93} />
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                            <Typography sx={{ color: 'var(--Light-Primary-Main, #343131)', fontFeatureSettings: "'liga' off, 'clig' off", fontSize: '1rem', fontStyle: 'normal', fontWeight: 500, lineHeight: '160%', letterSpacing: '-0.01rem' }}>
                                                                {subProduct.name}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '4rem', border: '1px solid var(--light-other-outlined-border-15-p, rgba(0, 0, 0, 0.15))' }}>
                                                            <Box sx={{ display: 'block', flexDirection: 'column', alignItems: 'center', borderRadius: '4rem', width: '3rem', height: '3rem', minWidth: '65px' }}>
                                                                <Box
                                                                    sx={{
                                                                        display: 'flex',
                                                                        borderRadius: '3rem',
                                                                        width: '3rem',
                                                                        height: '3rem',
                                                                        padding: '0.75rem',
                                                                        transition: 'background-color 0.3s ease',
                                                                        '&:hover': {
                                                                            backgroundColor: counts[subProduct._id] > 0 ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                                                                        },
                                                                        cursor: counts[subProduct._id] > 0 ? 'pointer' : 'default',
                                                                    }}
                                                                    onClick={() => counts[subProduct._id] > 0 && handleDecrement(subProduct._id)}
                                                                >
                                                                    <Image src="/minus.svg" alt="minus" width={24} height={24} />
                                                                </Box>
                                                            </Box>
                                                            <Typography sx={{ color: 'var(--Light-Text-Primary, rgba(0, 0, 0, 0.90))', textAlign: 'center', fontFeatureSettings: "'liga' off, 'clig' off", fontSize: '1rem', fontStyle: 'normal', fontWeight: 400, lineHeight: '1.5rem', paddingRight: '1rem' }}>
                                                                {counts[subProduct._id] || 0}
                                                            </Typography>
                                                            <Box sx={{
                                                                display: 'flex', borderRadius: '3rem', width: '3rem', height: '3rem', padding: '0.75rem', '&:hover': {
                                                                    backgroundColor: 'rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s ease', cursor: 'pointer'
                                                                }
                                                            }
                                                            } onClick={() => handleIncrement(subProduct._id)}>
                                                                <Image src="/plus.svg" alt="plus" width={24} height={24} />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            ))}
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                                {value === 1 && supportiveProducts.map((product, index) => (
                                    <Accordion key={index} sx={{ border: 'none', boxShadow: 'none', marginBottom: '1rem' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ borderBottom: 'none', display: 'flex', alignItems: 'center' }}>
                                            <Image src="./Frame.svg" alt="Frame" width={24} height={24} />
                                            <span style={{ color: "#343131", textAlign: "center", fontSize: "1.25rem", fontStyle: "normal", lineHeight: "1.5rem", letterSpacing: "-0.0125rem", marginLeft: "1rem" }}>
                                                {product.title}
                                            </span>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ borderTop: 'none' }}>
                                            {product.subProducts.map((subProduct, subIndex) => (
                                                <Box key={subIndex} sx={{ display: 'flex', paddingRight: '1rem', flexDirection: 'column', alignItems: 'flex-start', gap: '1.25rem', alignSelf: 'stretch', backgroundColor: '#FFF', marginBottom: '1rem' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch' }}>
                                                        <Box sx={{ display: 'flex', width: '16.71875rem', alignItems: 'center', gap: '1rem' }}>
                                                            <Box sx={{ width: '3rem', height: '1.1875rem', flexShrink: 0 }}>
                                                                <Box sx={{ width: '3rem', height: '1.1875rem', flexShrink: 0, borderRadius: '0rem 0.25rem 0.25rem 0rem', background: '#EF4E25' }}>
                                                                    <Box sx={{ display: 'flex', width: '1.25rem', height: '1.25rem', padding: '0.26044rem 0.10419rem 0.3065rem 0.10419rem', justifyContent: 'center', alignItems: 'center', flexShrink: 0, marginLeft: '1.34rem', marginRight: '0.41rem' }}>
                                                                        <Image src="/Frame.svg" alt="Frame" width={16.67} height={10.93} />
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                            <Typography sx={{ color: 'var(--Light-Primary-Main, #343131)', fontFeatureSettings: "'liga' off, 'clig' off", fontSize: '1rem', fontStyle: 'normal', fontWeight: 500, lineHeight: '160%', letterSpacing: '-0.01rem' }}>
                                                                {subProduct.name}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', padding: '0rem 0.125rem', alignItems: 'center', borderRadius: '4rem', border: '1px solid var(--light-other-outlined-border-15-p, rgba(0, 0, 0, 0.15))' }}>
                                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '4rem', width: '3rem', height: '3rem' }}>
                                                                <Box sx={{ display: 'flex', borderRadius: '3rem', width: '3rem', height: '3rem', padding: '0.75rem' }} onClick={() => handleDecrement(subProduct._id)}>
                                                                    <Image src="/minus.svg" alt="minus" width={24} height={24} />
                                                                </Box>
                                                            </Box>
                                                            <Typography sx={{ color: 'var(--Light-Text-Primary, rgba(0, 0, 0, 0.90))', textAlign: 'center', fontFeatureSettings: "'liga' off, 'clig' off", fontSize: '1rem', fontStyle: 'normal', fontWeight: 400, lineHeight: '1.5rem' }}>
                                                                {counts[subProduct._id] || 0}
                                                            </Typography>
                                                            <Box sx={{ display: 'flex', borderRadius: '3rem', width: '3rem', height: '3rem', padding: '0.75rem' }} onClick={() => handleIncrement(subProduct._id)}>
                                                                <Image src="/plus.svg" alt="plus" width={24} height={24} />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            ))}
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Box>
                        </Box>
                    </Box >
                    {/* Column */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4.5rem',
                        flex: '1 0 0',
                    }}>
                        {/* Section */}
                        <Box sx={{
                            display: 'flex',
                            padding: '2rem',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '2.5rem',
                            alignSelf: 'stretch',
                            borderRadius: '1rem',
                            background: 'var(--Light-Background-White, #FFF)',

                        }}>
                            {/* Container */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '1.5rem',
                                alignSelf: 'stretch',
                            }}>
                                {/* Content */}
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    gap: '1rem',
                                    alignSelf: 'stretch'
                                }}>
                                    {/* Title */}
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '1.5rem',
                                        alignSelf: 'stretch',
                                    }}>
                                        {/* Column */}
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            flex: '1 0 0',
                                        }}>
                                            <Typography
                                                sx={{
                                                    color: 'var(--Light-Text-Primary, rgba(0, 0, 0, 0.90))',
                                                    fontFeatureSettings: "'liga' off, 'clig' off",
                                                    fontSize: '1.75rem',
                                                    fontStyle: 'normal',
                                                    fontWeight: 500,
                                                    lineHeight: '130%', /* 2.275rem */
                                                    letterSpacing: '-0.0525rem',
                                                }}
                                                style={{ flex: '1 0 0' }}
                                            >Paketin</Typography>
                                        </Box>
                                        {/* Frame 13 */}
                                        <Box sx={{
                                            display: 'flex',
                                            padding: '0.25rem 0.75rem',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                        }}>
                                            <Chip
                                                sx={{ backgroundColor: "#D2E7E0" }}
                                                label={
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', borderRadius: "0.5rem" }}>
                                                        <Avatar src="/Badge.svg" alt='Badge' sx={{ width: "0.5rem", height: "0.5rem" }} />
                                                        2 ayda bir gönderim
                                                    </Box>
                                                }
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                {/* Image */}
                                <Typography sx={{
                                    alignSelf: 'stretch',
                                    color: 'var(--Light-Text-Secondary, rgba(0, 0, 0, 0.60))',
                                    fontFeatureSettings: "'liga' off, 'clig' off",
                                    fontSize: '1rem',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: '160%', /* 1.6rem */
                                    letterSpacing: '-0.01rem'
                                }}>
                                    Kişisel ihtiyacına yönelik istediğin miktarda ped, günlük ped, tampon veya destekleyici ürünler ekleyerek kendine özel paket oluşturabilirsin.
                                </Typography>

                            </Box>
                            {/* Frame Card 26080282 */}
                            {Object.keys(counts).length > 0 && (
                                <Box
                                    sx={{
                                        display: 'block',
                                        width: '25.125rem',
                                        padding: '1rem',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        gap: '1.25rem',
                                        borderRadius: '0.5rem',
                                    }}
                                >
                                    {Object.values(productToPacketMap).concat("Kap Paketleri").map(packetTitle => {
                                        const packetItems = Object.keys(counts).filter(subProductId => {
                                            const product = products.find(p => p.subProducts.some(sp => sp._id === subProductId));
                                            return product && getPacketTitle(product.title) === packetTitle;
                                        });

                                        if (packetItems.length === 0) return null;

                                        return (
                                            <Box key={packetTitle} sx={{ border: '1px solid var(--Light-Primary-Shades-12p, rgba(52, 41, 41, 0.12))', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1.25rem' }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        alignSelf: 'stretch',
                                                        marginBottom: '1.25rem',
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            color: 'var(--Light-Text-Primary, rgba(0, 0, 0, 0.90))',
                                                            fontFeatureSettings: "'liga' off, 'clig' off",
                                                            fontSize: '1.125rem',
                                                            fontStyle: 'normal',
                                                            fontWeight: 500,
                                                            lineHeight: '140%', /* 1.575rem */
                                                            letterSpacing: '-0.01688rem'
                                                        }}
                                                    >
                                                        {packetTitle}
                                                    </Typography>
                                                    <Image src="/trash-03.svg" alt="trash" width={24} height={24} onClick={() => handleClear(packetTitle)} style={{ cursor: 'pointer' }} />
                                                </Box>

                                                {packetItems.map(subProductId => {
                                                    const product = products.find(p => p.subProducts.some(sp => sp._id === subProductId));
                                                    const subProduct = product?.subProducts.find(sp => sp._id === subProductId);
                                                    if (!product || !subProduct) return null;
                                                    return (
                                                        <Box key={subProductId}>
                                                            <Box
                                                                sx={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'flex-start',
                                                                    gap: '1rem',
                                                                    alignSelf: 'stretch'
                                                                }}
                                                            >
                                                                <Box
                                                                    sx={{
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        alignItems: 'center',
                                                                        alignSelf: 'stretch',
                                                                        marginBottom: '1rem',
                                                                    }}
                                                                >
                                                                    <Typography
                                                                        sx={{
                                                                            color: 'var(--Light-Primary-Main, #343131)',
                                                                            fontFeatureSettings: "'liga' off, 'clig' off",
                                                                            fontSize: '0.875rem',
                                                                            fontStyle: 'normal',
                                                                            fontWeight: 400,
                                                                            lineHeight: '160%', /* 1.4rem */
                                                                            letterSpacing: '-0.00875rem'
                                                                        }}
                                                                    >
                                                                        {`${counts[subProductId] || 0} ${subProduct.name}`}
                                                                    </Typography>
                                                                    <Typography
                                                                        sx={{
                                                                            color: 'var(--Light-Primary-Main, #343131)',
                                                                            fontFeatureSettings: "'liga' off, 'clig' off",
                                                                            fontSize: '0.875rem',
                                                                            fontStyle: 'normal',
                                                                            fontWeight: 500,
                                                                            lineHeight: '160%', /* 1.4rem */
                                                                            letterSpacing: '-0.00875rem'
                                                                        }}
                                                                    >
                                                                        {Number(subProduct.price) * (counts[subProductId] || 0)}₺
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    );
                                                })}
                                            </Box>
                                        );
                                    })}
                                </Box>
                            )}

                            {/* Actions */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: '1rem', alignSelf: 'stretch' }}>
                                <Button
                                    onClick={() => {
                                        setAddBasket(addbasket + 1);
                                        Object.values(productToPacketMap).forEach(packetTitle => handleClear(packetTitle));
                                    }}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'stretch',
                                        borderRadius: '4rem',
                                        background: Object.keys(counts).length > 0 ? '#343131' : 'rgba(0, 0, 0, 0.12)',
                                        fontFeatureSettings: "'liga' off, 'clig' off",
                                        fontSize: '1rem',
                                        fontStyle: 'normal',
                                        fontWeight: 500,

                                        lineHeight: '1.625rem',
                                        letterSpacing: '-0.015rem',
                                        color: Object.keys(counts).length > 0 ? '#FFF' : 'rgba(0, 0, 0, 0.38)',
                                        '&:hover': {
                                            background: Object.keys(counts).length > 0 ? 'rgb(38, 38, 38)' : 'rgba(0, 0, 0, 0.12)',
                                        }
                                    }}
                                    disabled={Object.keys(counts).length === 0}
                                >
                                    Sepete Ekle ({Object.keys(counts).reduce((total, subProductId) => total + (products.find(p => p.subProducts.some(sp => sp._id === subProductId))?.subProducts.find(sp => sp._id === subProductId)?.price || 0) * (counts[subProductId] || 0), 0)}₺)
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                </Container >
            </Box >
            <Footer />
        </>
    );
};

export default Packets;