import React from "react"


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard(item) {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );


    return (
        <Card className="card" sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Publication
                </Typography>
                <Typography variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Journal: {item.journal}
                </Typography>
                <Typography variant="body2">
                <span>Veröffentlichungsjahr: {item.year}</span> <br/>
                <span>Autoren: {item.author}</span> <br/>
                <span>Publication type: {item.type}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}


