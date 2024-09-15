import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, PhoneAndroid } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const ContactInfo = styled(Box)`
    margin-top: 20px;
    & > * {
        display: flex;
        align-items: center;
        margin: 10px 0;
    }
`;

const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>
                <Text variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <span style={{ color: '#3f51b5' }}>Reach out to me on</span>
                    <Link href="https://www.instagram.com/ashish_kumar02_/
                  " color="inherit" target="_blank">
                        <Instagram sx={{ color: '#E1306C', verticalAlign: 'middle' }} />
                    </Link>
                    <span style={{ color: '#3f51b5' }}>or send me an Email</span>
                    <Link href="mailto:nish971943@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email sx={{ color: '#D44638', verticalAlign: 'middle' }} />
                    </Link>.
                </Text>
                <ContactInfo>
                    <Typography variant="h6">
                        <PhoneAndroid style={{ marginRight: 10 }} /> +91 7060478187
                    </Typography>
                    <Typography variant="h6">
                        <Email style={{ marginRight: 10 }} /> nish971943@gmail.com
                    </Typography>
                </ContactInfo>
            </Wrapper>
        </Box>
    );
}

export default Contact;