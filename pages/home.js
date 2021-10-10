import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/featuredMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'

export default function HomeView() {
  return (
      <MainLayout>
          <FeaturedMedia />
          <ForYouList />
          <JustAdded />
          <PosterView />

      </MainLayout>
  )
}
