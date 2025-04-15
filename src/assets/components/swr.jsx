import React from "react";
import useSWR from "swr";
import axios from "axios";

// 💡 What is the use of SWR?
// SWR is a React hook library used for data fetching — especially useful when building frontend apps that connect to APIs (like REST or GraphQL). Instead of using useEffect, useState, and axios every time to fetch data, SWR handles it for you automatically.

// ✅ Why do we use it?
// Because it makes fetching data super easy and powerful. Here’s why developers love using SWR:


// Feature	Why it's Useful
// ⚡ Auto Caching	Stores the data, so your app doesn't refetch again and again unnecessarily.
// 🔁 Auto Revalidation	Keeps the data fresh by refetching in the background.
// 🧠 No Manual useEffect	You don’t need to write loading states, error handling, or lifecycle logic.
// 🔌 Works with Any API	Can be used with REST, GraphQL, Firebase, etc.
// 🧪 Optimistic UI	Update the UI before server confirms, great for fast experience (advanced).
// 🔄 Re-fetch on focus	If you switch tabs and come back, it fetches the latest data.
const fetcher = (url) => axios.get(url).then((res) => res.data.user);

function SwrComponent() {
  const { data, error, isLoading } = useSWR(
    "https://paytm-1-n93v.onrender.com/app/v1/alluser",
    fetcher
  );

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error...</>;

  return <Display data={data} />;
}

function Display({ data }) {
  return (
    <div>
      {data.map((user, index) => (
        <p key={index}>{user.firstname}</p>
      ))}
    </div>
  );
}

export default SwrComponent;
