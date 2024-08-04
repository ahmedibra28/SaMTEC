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
                Competent, Self-directing and Self-reliant Community
              </p>
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                Our Mission
              </h2>
              <p className='text-muted-foreground'>
                Provision of market-driven vocational, technical, industrial
                training and business support services
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
                <h3 className='text-xl font-bold'>Sense of Ownership</h3>
              </div>
              <p className='text-muted-foreground'>
                We’re proactive, driven, accountable, reliable, and resilient.
                We take full responsibility for our actions and goes the extra
                mile to ensure the work we’re doing is meaningful and helpful to
                all stakeholders.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <InfoIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Accountability</h3>
              </div>
              <p className='text-muted-foreground'>
                We endeavor to act in a transparent, unambiguous, predictable
                and understandable manner in our undertakings.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <CombineIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Modest</h3>
              </div>
              <p className='text-muted-foreground'>
                We uphold integrity, are honest and impartial at all times as we
                relate with our colleagues, customers and all stakeholders. We
                deliver our services in a manner which is fair and free of
                discrimination or preferential treatment.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <AwardIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Trustworthy</h3>
              </div>
              <p className='text-muted-foreground'>
                We uphold integrity, are honest and impartial at all times as we
                relate with our colleagues, customers and all stakeholders. We
                deliver our services in a manner which is fair and free of
                discrimination or preferential treatment.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <RecycleIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Equity</h3>
              </div>
              <p className='text-muted-foreground'>
                We value creating an atmosphere where everyone feels
                appreciated, accepted, and supported so they can lead to the
                best of their potentials and abilities.
              </p>
            </div>
            <div className='bg-background p-6 rounded-lg shadow-md'>
              <div className='flex items-center mb-4'>
                <DiffIcon className='h-8 w-8 text-primary mr-4' />
                <h3 className='text-xl font-bold'>Creativity</h3>
              </div>
              <p className='text-muted-foreground'>
                We promote accessibility and affordability, seek new and more
                effective approaches to education, while exercising creativity
                as we chart inventive paths into the future.
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
