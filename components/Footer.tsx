import { Box, Button, Divider, FormControl, Typography, TextField } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                display: "flex",
                width: "100%",
                height: "36.1929rem",
                padding: "5rem 9rem",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "3rem",
                backgroundColor: "#262626"
            }}
        >
            {/* Content */}
            <Box
                component="section"
                sx={{
                    display: "flex",
                    transform: "rotate(-0.003deg)",
                    alignItems: "flex-start",
                    gap: "2rem",
                    alignSelf: "stretch",
                }}
            >
                {/* Newsletter */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "1.5rem",
                        flex: "1 0 0"
                    }}
                >
                    {/* Logo Wrapper */}
                    <Box
                        sx={{
                            display: "flex",
                            height: "1.5rem",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            alignSelf: "stretch",
                        }}
                    >
                        {/* Logo Box */}
                        <Box
                            sx={{
                                display: "flex",
                                width: "3.52463rem",
                                height: "1.5rem",
                                transform: "rotate(0.003deg)",
                                padding: "0rem 0.00019rem 0.00088rem 0.00338rem",
                                justifyContent: "center",
                                alignItems: "center",
                                flexShrink: 0
                            }}
                        >
                            <Image src="/Group.svg" alt="Group" width={56.35} height={23.99} />
                        </Box>
                    </Box>
                    {/* Text */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            alignSelf: "stretch",
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'rgba(255, 255, 255, 0.70)',
                                fontFeatureSettings: "'liga' off, 'clig' off",
                                fontFamily: 'Montserrat',
                                fontSize: '1rem',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '160%', /* 1.6rem */
                                letterSpacing: '-0.01rem',
                            }}
                        >
                            Arayı açmayalım!
                        </Typography>
                        <Typography variant='body2'>
                            beije’deki yeni ürün ve gelişmeleri sana haber verelim & aylık e-gazetemiz döngü’ye abone ol!
                        </Typography>
                    </Box>
                    {/* Actions */}
                    <Box
                        sx={{
                            display: "flex",
                            width: "29.125rem",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "1rem",
                        }}>

                        {/* Form */}
                        <Box
                            component="form"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                alignSelf: 'stretch',
                            }}
                        >
                            <FormControl
                                sx={{
                                    display: 'flex',
                                    transform: 'rotate(0.003deg)',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '0.375rem',
                                    flex: '1 0 0',
                                    width: '100%', // Full width
                                }}
                            >
                                <TextField
                                    variant="outlined"
                                    placeholder="E-mail Adresin"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "rgba(255, 255, 255, 0.23)",
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "rgba(255, 255, 255, 0.87)",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "rgba(255, 255, 255, 0.87)",
                                            },
                                        },
                                        input: {
                                            color: 'rgba(255, 255, 255, 0.70)', // Text color
                                            fontSize: '1rem',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '1.5rem', /* 150% */
                                        }
                                    }}
                                />
                            </FormControl>
                            <Button
                                sx={{
                                    display: 'flex',
                                    padding: '0.75rem 1rem 0.625rem 1rem',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: '0.5rem',
                                    transform: 'rotate(0.003deg)',
                                    borderRadius: '4rem',
                                    background: 'var(--Dark-Primary-Main, #FFF)',
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: 'var(--Dark-Primary-Contrast, rgba(0, 0, 0, 0.87))',
                                        fontFeatureSettings: "'liga' off, 'clig' off",
                                        fontSize: '1rem',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: '1.625rem', /* 162.5% */
                                        letterSpacing: '-0.015rem',
                                        textTransform: 'none'
                                    }}>Gönder</Typography>
                            </Button>

                        </Box>
                        <Typography variant='body2'>
                            Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor ve beije'den haber almayı onaylıyorum.
                        </Typography>

                    </Box>
                </Box>
                {/* Links */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1.5rem",
                        flex: "1 0 0"
                    }}
                >
                    {/* Column */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            flex: '1 0 0',
                        }}
                    >
                        <Typography variant='body1'>beije Ped</Typography>
                        <Typography variant='body1'>beije Günlük Ped</Typography>
                        <Typography variant='body1'>beije Tampon</Typography>
                        <Typography variant='body1'>beije Store</Typography>

                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            flex: '1 0 0',
                        }}
                    >
                        <Typography variant='body1'>Biz Kimiz?</Typography>
                        <Typography variant='body1'>Blog</Typography>
                        <Typography variant='body1'>Sıkça Sorulan Sorular</Typography>
                        <Typography variant='body1'>Ekibimize Katıl</Typography>

                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            flex: '1 0 0',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                                alignSelf: 'stretch',
                            }}
                        >
                            <Image src="/Facebook.svg" alt="Facebook" width={24} height={24} />
                            <Typography variant='body1'>Facebook</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                                alignSelf: 'stretch',
                            }}
                        >
                            <Image src="/Instagram.svg" alt="Instagram" width={24} height={24} />
                            <Typography variant='body1'>Instagram</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                                alignSelf: 'stretch',
                            }}
                        >
                            <Image src="/Twitter.svg" alt="Twitter" width={24} height={24} />
                            <Typography variant='body1'>Twitter</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                                alignSelf: 'stretch',
                            }}
                        >
                            <Image src="/Linkedin.svg" alt="Linkedin" width={24} height={24} />
                            <Typography variant='body1'>Linkedin</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                                alignSelf: 'stretch',
                            }}
                        >
                            <Image src="/Spotify.svg" alt="Spotify" width={24} height={24} />
                            <Typography variant='body1'>Spotify</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Credits */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "2rem",
                    alignSelf: "stretch",
                }}
            >
                {/* Divider */}
                <Divider
                    sx={{
                        height: "0.0625rem",
                        alignSelf: 'stretch',
                        border: '1px solid var(--Dark-Other-Divider, rgba(255, 255, 255, 0.12))',
                    }}
                ></Divider>

                {/* Row */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "4rem",
                        alignSelf: 'stretch'
                    }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1.5rem",
                            flex: "1 0 0"
                        }}
                    >
                        <Typography variant='h6'>2022 beije. Tüm hakları saklıdır.</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "1.5rem",
                            flex: "1 0 0"
                        }}
                    >
                        <Typography variant='h6'>KVKK</Typography>
                        <Typography variant='h6'>KVKK Başvuru Formu</Typography>
                        <Typography variant='h6'>Üyelik Sözleşmesi</Typography>
                        <Typography variant='h6'>Gizlilik Politikası</Typography>
                        <Typography variant='h6'>Çerez Politikası</Typography>
                        <Typography variant='h6'>Test Sonuçları</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "0.5rem",
                            flex: "1 0 0"
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                padding: "0.125rem 0.25rem",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}>
                            <Typography variant='h6'>EN</Typography>
                            <Typography variant='h6'>|</Typography>
                            <Typography
                                sx={{
                                    color: 'var(--Dark-Text-Primary, #FFF)',
                                    fontSize: "0.75rem",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "1.25rem"
                                }}
                            >TR</Typography>
                        </Box>

                    </Box>
                </Box>
                {/* Footer Links */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '0.5rem',
                        alignSelf: 'stretch',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            width: '3rem',
                            height: '1.5rem',
                            padding: '0.1875rem 0.5625rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '0.125rem',
                            background: '#F79E1B',
                        }}>
                        <Image src="/master.svg" alt="master" width={30} height={19} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '3rem',
                            height: '1.5rem',
                            padding: '0.4375rem 0.375rem 0.375rem 0.375rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '0.125rem',
                            background: '#1A1F71',
                        }}>
                        <Image src="/visa.svg" alt="visa" width={36} height={11} />
                    </Box>
                </Box>
            </Box >

        </Box >
    )
}

export default Footer;
