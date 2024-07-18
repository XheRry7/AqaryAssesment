import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

interface postData {
    postData: IPostData
}

interface IPostData {
    body: string;
    id: string;
    title: String;
    userId: Number
}


export default function BasicCard({ postData }: postData) {
  return (
    <Card sx={{ maxWidth: 900, margin:'auto', marginTop:'10px' } }>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Post # {postData?.id}
        </Typography>
        <Typography variant="h5" component="div">
          {postData?.title}
        </Typography>
        <Typography variant="body2">
         {postData?.body}
        </Typography>
      </CardContent>
      <CardActions>
         <Link href={`/posts/${postData?.id}`}><Button size="small" className='text-primary'>See Description</Button></Link>
      </CardActions>
    </Card>
  );
}