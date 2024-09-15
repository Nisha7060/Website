import { Box, styled, Typography } from '@mui/material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    text-align: center;
`;

const Text = styled(Typography)`
    color: #555;
`;

const Highlight = styled(Typography)`
    color: #1976d2;
    font-weight: bold;
`;

const About = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                    Welcome to our Blogging Hub
                </Typography>
                <Text variant="h5">
                    Your ultimate destination for a diverse range of content. Whether you're passionate about tech, fashion, music, movies, reading, or any other interest, you'll find it all here under one roof.
                </Text>
                <Text variant="h5">
                    Our platform is designed to cater to the curious minds of students and enthusiasts alike. Founded with a vision to create a space where ideas flourish and passions ignite, our team at [Your Blogging Hub's Name] strives to deliver engaging and informative articles that resonate with our readers.
                </Text>
                <Text variant="h5">
                    As students ourselves, we understand the importance of learning through sharing experiences. That's why we've curated a collection of blogs that not only entertain but also educate and inspire. From tutorials and reviews to personal insights and trends, there's something for everyone.
                </Text>
                <Text variant="h5">
                    Join us on this journey of exploration and discovery. Dive into our diverse categories, connect with like-minded individuals, and enrich your knowledge in the topics that matter to you most.
                </Text>
                <Text variant="h5" sx={{ marginBottom: '20px' }}>
                    Thank you for being a part of our community. We look forward to growing together and continuing to provide content that sparks your curiosity.
                    <br /><br />
                    Sincerely,
                    <br />
                    The Team at [Nisha Yadav]
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;
