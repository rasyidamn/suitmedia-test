import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import ListPost from "../components/ListPost";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router";

function IdeasPage() {
  const [postData, setPostData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = postData.slice(firstPostIndex, lastPostIndex);

  const sort = searchParams.get("sort") || "-published_at";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://suitmedia-backend.suitdev.com/api/ideas?page[size]=100",
          {
            params: {
              sort: sort,
            },
            headers: {
              Accept: "application/json",
            },
          }
        );
        setPostData(response.data.data);
      } catch (error) {
        console.log(`Gagal mengambil data: ${error}`);
      } finally {
        console.log("selesai");
      }
    };

    fetchData();
  }, [sort]);

  useEffect(() => {
    if (postData) {
      console.log(postData);
    }
  }, [postData]);

  return (
    <div>
      <Banner />
      <ListPost
        postData={postData}
        currentPost={currentPost}
        currentPage={currentPage}
        postPerPage={postPerPage}
        lastPostIndex={lastPostIndex}
        firstPostIndex={firstPostIndex}
        setPostPerPage={setPostPerPage}
        setSearchParams={setSearchParams}
      />
      <Pagination
        totalPost={postData.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default IdeasPage;
