'use client'
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { Box } from '@mui/material';
import PostDescription from '@/app/components/Post/PostDescription';
import Navbar from '../../components/Navbar'

export default function Home() {
  const [posts, setPosts] = useState<any>();
  const [comments, setPostComments] = useState<any>({});
  const { slug } = useParams();

  const fetchData = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    const postComments = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
    const filteredPostComments = postComments?.data.filter((e: any) => e.postId == slug)
    setPosts(res.data);
    setPostComments(filteredPostComments);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main >
      <Box sx={{ bgcolor: 'background.paper', height: '100vh', }}>
        <Navbar />
        <PostDescription postData={posts} commentsData={comments} />
      </Box>
    </main>
  );
}
