import React from "react"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard(props) {
    //Splitten von übergebener ID um sie unten in URL umzuwandeln
   const str = props.id + '';
   const words = str.split(':');

    //Card von MaterialUI importiert, nur die Werte ersetzt
    //Line 39 zusammenbasteln der URL für den Link zu den Websites
    return (
        <Card className="card" sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                    Publication
                </Typography>
                <Typography variant="h4" component="div">
                    {props.title}
                </Typography>
                <p></p>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Journal: {props.journal}
                </Typography>
                <Typography variant="body2">
                <span>Release year: {props.year}</span> <br/>
                <p></p>
                <span>Authors: {[...props.author].map(author => <> | {author} </>)}</span> <br/>
                <p></p>
                <span>Publication type: {props.type}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" href={`http://${words[1]}/handle/${words[2]}`} target="_blank">Learn More</Button>
            </CardActions>
        </Card>
    );
}


