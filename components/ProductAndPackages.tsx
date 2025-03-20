"use client";

import React, { useEffect } from 'react';
import { Box, ButtonBase, Container, MenuPaper, Paper, PopoverPaper, Typography } from '@mui/material';
import Image from 'next/image';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchProductsAndPackets } from "../redux/reducers/productsSlice";
import PopupState, { bindTrigger, bindPopover, bindHover } from 'material-ui-popup-state';
import HoverPopover from 'material-ui-popup-state/HoverPopover';

export default function MouseHoverPopover() {
    const dispatch: AppDispatch = useDispatch();
    const { products, packets, status, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProductsAndPackets());
    }, [dispatch]);

    return (
        <PopupState variant="popover" popupId="popup-popover">
            {(popupState) => (
                <>
                    <ButtonBase
                        {...bindHover(popupState)}
                    >
                        <Typography variant="h5" sx={{ cursor: "pointer" }}>
                            Tüm Ürünler
                        </Typography>
                    </ButtonBase>
                    <HoverPopover
                        sx={{
                            "& .MuiPaper-root": {
                                width: "110%",
                                backgroundColor: "var(--Light-Background-Secondary, #F7F6F5)",
                                height: "40.75rem",
                                marginTop: "1.5rem",
                                boxShadow: "none",
                            }
                        }
                        }

                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}

                    >
                        <Container
                            sx={{
                                padding: "24px 18.4px 72px 24px",
                                gap: "48px",
                                marginLeft: "0px",
                                marginRight: "0px",
                                display: "inline",
                                backgroundColor: "var(--Light-Background-Secondary, #F7F6F5)",
                            }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    background: '#F7F6F5',
                                }}>

                                <Box sx={{
                                    display: 'flex',
                                    width: '100%',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '3rem',
                                    flex: '1 0 0',
                                }}>
                                    {/* Row */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            paddingLeft: '9rem',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            gap: '1.5rem',
                                            alignSelf: 'stretch',
                                        }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem',
                                            alignSelf: 'stretch',
                                        }}>
                                            <Typography sx={{
                                                color: 'var(--Light-Text-Primary, rgba(0, 0, 0, 0.90))',
                                                fontFeatureSettings: "'liga' off, 'clig' off",
                                                fontSize: '1.25rem',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                lineHeight: '140%', /* 1.75rem */
                                                letterSpacing: '-0.01875rem'
                                            }}>Ürünler</Typography>
                                        </Box>

                                        {/* Columns */}
                                        <Box sx={{
                                            display: 'flex',
                                            width: '100%',
                                            alignItems: 'flex-start',
                                            gap: '1.5rem',
                                            flexDirection: 'row', // Ürünlerin yan yana gelmesini sağlar
                                            flexWrap: 'wrap', // Ürünlerin satır içinde sarılmasını sağlar
                                        }}>
                                            {/* Image and Title Map */}
                                            {products.map((product) => (
                                                <Box
                                                    key={product._id}
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        gap: '0.75rem',
                                                        width: '10.75rem',
                                                        alignSelf: 'stretch',
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: '10.75rem',
                                                            height: '8.4375rem',
                                                            backgroundColor: 'lightgray',
                                                            backgroundImage: `url(${product.image})`,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'cover',
                                                            backgroundRepeat: 'no-repeat',
                                                        }}
                                                    ></Box>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.75rem',
                                                            justifyContent: 'space-between',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <Typography sx={{
                                                            color: 'var(--Light-Primary-Main, #343131)',
                                                            fontFeatureSettings: "'liga' off, 'clig' off",
                                                            fontSize: '1rem',
                                                            fontStyle: 'normal',
                                                            fontWeight: 400,
                                                            lineHeight: '160%', /* 1.6rem */
                                                            letterSpacing: '-0.01rem',
                                                            flex: '1 0 0',
                                                        }}>{product.title}</Typography>
                                                        <Image src="/chevron-right.svg" alt="chevron-right" width={24} height={24} />
                                                    </Box>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>

                                    {/* Row */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            padding: "0rem 9rem",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            gap: "1.5rem",
                                            alignSelf: "stretch",
                                        }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.5rem',
                                            alignSelf: 'stretch',
                                        }}>
                                            <Typography sx={{
                                                color: 'var(--Light-Text-Primary, rgba(0, 0, 0, 0.90))',
                                                fontFeatureSettings: "'liga' off, 'clig' off",
                                                fontSize: '1.25rem',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                lineHeight: '140%', /* 1.75rem */
                                                letterSpacing: '-0.01875rem'
                                            }}>Paketler</Typography>
                                        </Box>

                                        {/* Columns */}
                                        <Box sx={{
                                            display: 'flex',
                                            width: '100%',
                                            alignItems: 'flex-start',
                                            gap: '1.5rem',
                                            flexDirection: 'row', // Paketlerin yan yana gelmesini sağlar
                                            flexWrap: 'wrap', // Paketlerin satır içinde sarılmasını sağlar
                                        }}>
                                            {/* Image and Title Map */}
                                            {packets.map((packet: { _id: string, image: string, title: string }) => (
                                                <Box
                                                    key={packet._id}
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        gap: '0.75rem',
                                                        width: '10.75rem',
                                                        alignSelf: 'stretch',
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: '10.75rem',
                                                            height: '8.4375rem',
                                                            backgroundColor: 'lightgray',
                                                            backgroundImage: `url(${packet.image})`,
                                                            backgroundPosition: 'center',
                                                            backgroundSize: 'cover',
                                                            backgroundRepeat: 'no-repeat',
                                                        }}
                                                    ></Box>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.75rem',
                                                            justifyContent: 'space-between',
                                                            width: '100%',
                                                        }}
                                                    >
                                                        <Typography sx={{
                                                            color: 'var(--Light-Primary-Main, #343131)',
                                                            fontFeatureSettings: "'liga' off, 'clig' off",
                                                            fontSize: '1rem',
                                                            fontStyle: 'normal',
                                                            fontWeight: 400,
                                                            lineHeight: '160%', /* 1.6rem */
                                                            letterSpacing: '-0.01rem',
                                                            flex: '1 0 0',
                                                        }}>{packet.title}</Typography>
                                                        <Image src="/chevron-right.svg" alt="chevron-right" width={24} height={24} />
                                                    </Box>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </HoverPopover>
                </>
            )
            }
        </PopupState >
    );
}

