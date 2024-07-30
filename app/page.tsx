import Admissions from '@/components/admissions-section'
import Agribusiness from '@/components/agribusiness-section'
import Blog from '@/components/blog-section'
import Courses from '@/components/courses-section'
import Curriculum from '@/components/curriculum-section'
import HeroSection from '@/components/hero-section'
import Impact from '@/components/impact-section'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Curriculum />
      <Agribusiness />
      <Admissions />
      <Courses />
      <Impact />
      <Blog />
    </div>
  )
}
