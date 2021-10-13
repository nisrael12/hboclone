import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../components/HBOProvider";
import Login from "../components/UI/Login/Login";
import { useRouter } from "next/dist/client/router";
import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/featuredMedia";
import AuthCheck from "../components/AuthCheck";
import MediaRow from "../components/UI/MediaRow/MediaRow";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow
        title="Movies"
        type="large-v"
        endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
      />
      <MediaRow
        title="Series"
        type="small-h"
        endpoint="discover/tv?&primary_release_year=2021"
      />
      <MediaRow
        title="Action"
        type="small-v"
        endpoint="discover/movie?with_genres=28&primary_release_year=2021"
      />
      <MediaRow
        title="Horror"
        type="large-h"
        endpoint="discover/movie?with_genres=27&primary_release_year=2021"
      />
      <MediaRow
        title="Animations"
        type="large-v"
        endpoint="discover/movie?with_genres=16&primary_release_year=2021"
      />
      <MediaRow
        title="Sci-fi"
        type="small-h"
        endpoint="discover/movie?with_genres=878&primary_release_year=2021"
      />
    </MainLayout>
  );
}
