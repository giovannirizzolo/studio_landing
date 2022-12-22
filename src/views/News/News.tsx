import { Divider, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NewsImageList from "../../components/Cards/NewsImageList";


import "./News.scss";



const News = () => {
    return (
        <Box className="news">
            <Box className="news__title">
                <Typography variant="h3">Novità 2022</Typography>
                <Link className="news__title-link" sx={{ cursor: "pointer" }}>
                    Guarda tutte le novità
                </Link>
            </Box>
            <Box className="news__cards">
                <NewsImageList />
            </Box>
            <Divider />
        </Box>
    );
};

export default News;
