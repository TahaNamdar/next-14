import Link from "next/link";
import React from "react";

const news = [
  {
    id: 1,
    title: "Breaking News 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel suscipit velit, eu tempus magna.",
    date: "2024-03-22",
  },
  {
    id: 2,
    title: "Breaking News 2",
    content:
      "Praesent vehicula massa et urna bibendum, vitae malesuada arcu vestibulum.",
    date: "2024-03-21",
  },
  {
    id: 3,
    title: "Breaking News 3",
    content:
      "Vivamus dignissim eros eget arcu commodo, id rutrum lectus varius. ",
    date: "2024-03-20",
  },
];

export default function page() {
  return (
    <div>
      {news.map((news, _) => {
        return (
          <Link href={`/home/news/${news.id}`}>
            <p>{news.title}</p>
          </Link>
        );
      })}
    </div>
  );
}
