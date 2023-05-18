"use client";
import axios from "axios";
import React, { useEffect } from "react";

const Page = () => {

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/api/users");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();
  }, []);

  return <div>Page</div>;
};

export default Page;
