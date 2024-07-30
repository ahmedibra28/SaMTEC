import BlurImage from '@/components/blur-image'
import {
  AwardIcon,
  CombineIcon,
  ComputerIcon,
  DiffIcon,
  GroupIcon,
  InfinityIcon,
  InfoIcon,
  RecycleIcon,
  ScalingIcon,
  ServerIcon,
  StarIcon,
} from 'lucide-react'

export default function Page() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <section
        className='relative w-full h-[50dvh] bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
          <div className='text-center text-white space-y-4'>
            <h1 className='text-4xl md:text-6xl font-bold'>About Us</h1>
            <p className='text-lg md:text-xl'>
              Discover our vision, mission, and values.
            </p>
          </div>
        </div>
      </section>
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Our Vision
              </h2>
              <p className='text-muted-foreground'>
                Our vision is to be the leading provider of innovative solutions
                that empower our clients to achieve their goals and transform
                their businesses. We strive to be a trusted partner, delivering
                exceptional service and driving sustainable growth.
              </p>
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Our Mission
              </h2>
              <p className='text-muted-foreground'>
                Our mission is to create value for our clients, employees, and
                shareholders by leveraging our expertise, technology, and
                collaborative approach. We are committed to delivering tailored
                solutions that address our clients' unique challenges and unlock
                their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 md:py-24 bg-muted'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>
            Our Core Values
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <InfinityIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Integrity</h3>
              </div>
              <p className='text-muted-foreground'>
                We are committed to the highest ethical standards, acting with
                honesty and transparency in all our dealings.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <InfoIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Innovation</h3>
              </div>
              <p className='text-muted-foreground'>
                We embrace a culture of creativity and continuous improvement,
                constantly seeking new ways to deliver value to our clients.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <CombineIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Collaboration</h3>
              </div>
              <p className='text-muted-foreground'>
                We believe in the power of teamwork and collaboration, working
                closely with our clients and partners to achieve shared goals.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <AwardIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Excellence</h3>
              </div>
              <p className='text-muted-foreground'>
                We strive for excellence in everything we do, delivering
                high-quality solutions and exceptional customer service.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <RecycleIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Sustainability</h3>
              </div>
              <p className='text-muted-foreground'>
                We are committed to sustainable practices that minimize our
                environmental impact and contribute to the long-term well-being
                of our communities.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <DiffIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Diversity</h3>
              </div>
              <p className='text-muted-foreground'>
                We celebrate diversity and inclusion, fostering an environment
                where everyone can thrive and contribute their unique
                perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 md:py-24 bg-background'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>
            Our Strategic Focus Areas
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='bg-muted p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <ComputerIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Technology</h3>
              </div>
              <p className='text-muted-foreground'>
                We invest in cutting-edge technologies to deliver innovative
                solutions that drive digital transformation and operational
                efficiency for our clients.
              </p>
            </div>
            <div className='bg-muted p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <RecycleIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Sustainability</h3>
              </div>
              <p className='text-muted-foreground'>
                We are committed to sustainable business practices that minimize
                our environmental impact and contribute to a more sustainable
                future.
              </p>
            </div>
            <div className='bg-muted p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <ScalingIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Growth</h3>
              </div>
              <p className='text-muted-foreground'>
                We focus on strategic growth initiatives that expand our reach,
                diversify our service offerings, and create long-term value for
                our stakeholders.
              </p>
            </div>
            <div className='bg-muted p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <ServerIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Client Focus</h3>
              </div>
              <p className='text-muted-foreground'>
                Our clients are at the heart of everything we do. We are
                dedicated to understanding their unique needs and delivering
                tailored solutions that exceed their expectations.
              </p>
            </div>
            <div className='bg-muted p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <StarIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Talent Development</h3>
              </div>
              <p className='text-muted-foreground'>
                We invest in the growth and development of our talented team,
                fostering a culture of continuous learning and empowering our
                employees to reach their full potential.
              </p>
            </div>
            <div className='bg-muted p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <GroupIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Community Impact</h3>
              </div>
              <p className='text-muted-foreground'>
                We are committed to making a positive impact on the communities
                we serve, through philanthropic initiatives, volunteer work, and
                partnerships that drive social and economic progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
