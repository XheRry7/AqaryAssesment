import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

interface postData {
    postData: IPostData,
    commentsData: IPostComments[]
}

interface IPostData {
    body: string;
    id: string;
    title: String;
    userId: Number
}

interface IPostComments {
    name: string;
    email: string;
    body: String;
}

export default function PostDescription({ postData, commentsData }: postData ) {
    return (
        <Card sx={{ maxWidth: 900, margin: 'auto', marginTop: '20px' }} key={postData?.id}>
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
                <Box sx={{ padding: '10px', marginTop: '5px' }} >
                    <Typography variant="h5" component="div">
                        Comments:
                    </Typography>

                    {
                        commentsData && commentsData.length ? commentsData.map((e: any) => (
                            <Box key={e.id}  >
                                <Typography sx={{ fontSize: 14, fontWeight: 700, display: 'flex' }} variant='h4' color="text.secondary" gutterBottom>
                                    <PersonIcon /> <Typography >{e.name}</Typography>
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {e.body}
                                </Typography>
                            </Box>
                        )
                        ) :
                            <Typography>
                                No Post Comments Found
                            </Typography>
                    }
                </Box>
            </CardContent>

        </Card>
    );
}