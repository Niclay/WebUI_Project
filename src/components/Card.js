import React from "react"



import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard(item) {
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
                <span>Release year: {item.year}</span> <br/>
                <p></p>
                <span>Authors: {[...item.author].map(author => <> | {author} </>)}</span> <br/>
                <p></p>
                <span>Publication type: {item.type}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href="http://www.google.com">Learn More</Button>
            </CardActions>
        </Card>
    );
}


