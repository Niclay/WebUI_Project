import React from "react"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default (props) => {

    //splitting key(id) for "Learn more"-URL
   const str = props.id + '';
   const words = str.split(':');

    return (
        //Materiual UI Card; Includes title, journal, year, authors, type of publication
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
                <br/>
                <span>Authors: {[...props.author].map(author => <span key={author}> | {author} </span>)}</span> <br/>
                <br/>
                <span>Publication type: {props.type}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large" href={`http://${words[1]}/handle/${words[2]}`} target="_blank">Learn More</Button>
            </CardActions>
        </Card>
    );
}


