'use client'
import axios from 'axios';
import { useEffect, useState } from "react";
import BasicCard from '../components/Post/PostCard';
import Navbar from "../components/Navbar";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <main >
      <div >
        <Navbar />
        {
          posts && posts.length && posts.map(data => {
            return (
              <BasicCard postData={data} />
            )
          })
        }
      </div>
    </main>
  );
}
