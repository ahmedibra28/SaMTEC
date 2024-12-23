import {
  BriefcaseIcon,
  BuildingIcon,
  ComputerIcon,
  ConstructionIcon,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'
import { courses } from './data'

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
            <h1 className='text-4xl md:text-6xl font-bold'>Courses</h1>
            <p className='text-lg md:text-xl'></p>
          </div>
        </div>
      </section>

      <div className='flex flex-col min-h-dvh'>
        <main className='flex-1'>
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6'>
              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Electric and Electronic
                  </AccordionTrigger>
                  <AccordionContent>
                    Focus: This program aims to equip students with the
                    knowledge, skills, and practical abilities to excel in the
                    rapidly evolving field of Electrical and Electronic
                    Engineering. <br />
                    Local Relevance: Recognizing the critical role of
                    electricity in modern society and the growing demand for
                    skilled technicians, this program emphasizes practical
                    application and problem-solving relevant to the local
                    context.
                    <br />
                    CBC Alignment: The curriculum will be structured around
                    competencies, ensuring that students develop the practical
                    skills and real-world knowledge necessary for success in the
                    industry. Learning will be hands-on, project-based, and
                    assessed through practical demonstrations and real-world
                    applications
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    Renewable Energy Systems: Focusing on the design,
                    installation, and maintenance of solar power systems, wind
                    turbines, and other renewable energy technologies. This
                    specialization will address the increasing demand for
                    sustainable energy solutions in the local context. <br />
                    Telecommunications and Networking: Equipping students with
                    the skills to design, install, and maintain
                    telecommunication networks, including fiber optics, wireless
                    networks, and data communication systems. This
                    specialization will cater to the growing need for reliable
                    and efficient communication infrastructure.
                    <br />
                    Embedded Systems and Automation: Focusing on the design,
                    development, and implementation of embedded systems,
                    including microcontrollers, sensors, and actuators, for
                    applications in various sectors such as agriculture,
                    industry, and healthcare. This specialization will address
                    the increasing demand for automation and intelligent
                    systems.
                    <br />
                    Power Electronics and Electrical Machines: Focusing on the
                    design, analysis, and control of power electronic
                    converters, electric motors, and generators, with
                    applications in power systems, renewable energy systems, and
                    electric vehicles. This specialization will cater to the
                    growing demand for efficient and sustainable power systems.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Renewable Energy Technician: Installing, maintaining, and
                    troubleshooting solar panels, wind turbines, and other
                    renewable energy systems. <br />
                    Telecommunications Technician: Installing, maintaining, and
                    repairing telecommunication equipment, including fiber optic
                    cables, wireless networks, and data communication systems.
                    <br />
                    Automation Engineer: Designing, implementing, and
                    maintaining automated systems in various industries,
                    including manufacturing, agriculture, and healthcare.
                    <br />
                    Power Electronics Engineer: Designing and developing power
                    electronic converters for applications in renewable energy
                    systems, electric vehicles, and industrial automation.
                    <br />
                    Electrical Engineer: Working on the design, installation,
                    and maintenance of electrical power systems, including
                    transmission and distribution networks.
                    <br />
                    Electronics Technician: Repairing and maintaining electronic
                    equipment, including computers, mobile phones, and other
                    consumer electronics.
                    <br />
                    Entrepreneurship: Starting their own businesses in areas
                    such as renewable energy installation, telecommunications
                    services, and electronics repair.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Makeup Artistry
                  </AccordionTrigger>
                  <AccordionContent>
                    High demand for professional makeup artistry: The growing
                    demand for professional makeup artists in the local market.
                    occasions like weddings, festivals, photoshoots, film
                    productions, and the increasing interest in personal
                    grooming and self-expression. <br />
                    Cultural relevance: Acknowledge the unique beauty standards
                    and cultural preferences within the local community. This
                    could include specific styles for traditional events,
                    preferences for natural looks or bold colors, and the use of
                    local products. <br />
                    Focus on economic opportunities: Emphasize the potential for
                    income generation and self-employment through makeup
                    artistry. Highlight the opportunity to build a clientele,
                    offer freelance services, or even establish a small
                    business.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    Bridal Makeup: Focus on creating flawless and long-lasting
                    looks for brides, considering diverse cultural preferences
                    and veiling techniques. <br />
                    Traditional Makeup: Specialize in recreating authentic looks
                    for local cultural events and festivals, incorporating
                    traditional techniques and color palettes. <br />
                    Everyday/Natural Makeup: Emphasize enhancing natural beauty
                    with subtle techniques, focusing on skincare and
                    highlighting individual features. <br />
                    Special Effects Makeup: Explore creative makeup techniques
                    for film, theater, and special events, including character
                    transformations and wound effects. <br />
                    Airbrush Makeup: Introduce advanced techniques using
                    airbrush equipment for flawless, even coverage and a more
                    hygienic application.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Freelance Makeup Artist: Offer services for weddings,
                    events, photoshoots, and personal clients. <br />
                    Salon/Spa Makeup Artist: Work in a professional setting,
                    providing makeup services to clients. <br />
                    Film/Television Makeup Artist: Work in the entertainment
                    industry, creating character looks for actors and
                    performers. <br />
                    Special Effects Makeup Artist: Work on film sets, theater
                    productions, or for special events. <br />
                    Makeup Educator/Trainer: Share your expertise by teaching
                    makeup classes and workshops. <br />
                    Makeup Stylist: Provide personalized makeup services to
                    clients, including facial treatments, manicures, and
                    pedicures. <br />
                    Makeup Artist Manager: Develop and manage a team of makeup
                    artists, ensuring that all aspects of the job are completed
                    successfully.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Catering and Hospitality
                  </AccordionTrigger>
                  <AccordionContent>
                    This Catering and Hospitality course is designed to equip
                    learners with the practical skills and theoretical knowledge
                    necessary to excel in the vibrant and dynamic hospitality
                    industry. <br />
                    The program focuses on developing a strong foundation in
                    culinary arts, food and beverage service, customer service,
                    and hospitality management principles.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    Recognizing the diverse needs and interests of the local
                    population, the course offers the following specializations:{' '}
                    <br />
                    Culinary Arts: This specialization focuses on advanced
                    cooking techniques, menu planning, food preparation, and
                    culinary artistry. Learners will gain expertise in various
                    cuisines, including local delicacies, international flavors,
                    and specialized dietary needs.
                    <br />
                    Food and Beverage Service: This specialization emphasizes
                    professional service techniques for restaurants, cafes,
                    bars, and other food service establishments. Learners will
                    acquire skills in table service, beverage preparation, wine
                    service, and customer service protocols.
                    <br />
                    Hospitality Management: This specialization provides a
                    comprehensive understanding of hospitality operations,
                    including front office management, housekeeping, guest
                    relations, and event planning. Learners will develop
                    leadership, communication, and problem-solving skills
                    essential for managing successful hospitality businesses.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Upon successful completion of the Catering and Hospitality
                    course, graduates will be well-prepared for a wide range of
                    rewarding careers, including:
                    <br />
                    Chef/Cook: In restaurants, hotels, resorts, cafes, and
                    catering companies.
                    <br />
                    Food and Beverage Server: In restaurants, bars, cafes, and
                    other food service establishments.
                    <br />
                    Bartender: In bars, pubs, and nightclubs.
                    <br />
                    Restaurant Manager: In restaurants, cafes, and other food
                    service establishments.
                    <br />
                    Hotel Front Desk Clerk/Receptionist: In hotels, resorts, and
                    guest houses.
                    <br />
                    Housekeeper: In hotels, resorts, and other hospitality
                    establishments.
                    <br />
                    Event Planner: For weddings, conferences, and other special
                    events.
                    <br />
                    Food and Beverage Supervisor: In restaurants, hotels, and
                    other food service establishments.
                    <br />
                    Entrepreneurs: Starting their own catering businesses,
                    restaurants, or cafes.
                    <br />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Mobile Repairing
                  </AccordionTrigger>
                  <AccordionContent>
                    This Mobile Repairing course is designed to equip learners
                    with the practical skills and theoretical knowledge
                    necessary to diagnose, troubleshoot, and repair a wide range
                    of mobile devices, including smartphones, tablets, and other
                    handheld devices. <br />
                    The program focuses on developing strong technical skills,
                    problem-solving abilities, and a deep understanding of
                    mobile device hardware and software.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    Recognizing the diverse needs and interests of the local
                    population, the course offers the following specializations:{' '}
                    <br />
                    Smartphone Repair: This specialization focuses on the repair
                    and maintenance of smartphones, including screen
                    replacements, battery replacements, camera repairs, and
                    software troubleshooting.
                    <br />
                    Tablet Repair: This specialization focuses on the repair and
                    maintenance of tablets, including screen replacements,
                    battery replacements, charging port repairs, and software
                    updates.
                    <br />
                    Mobile Software Troubleshooting: This specialization focuses
                    on diagnosing and resolving software issues, such as
                    operating system errors, app malfunctions, data recovery,
                    and virus removal.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Upon successful completion of the Mobile Repairing course,
                    graduates will be well-prepared for a wide range of
                    rewarding careers, including: <br />
                    Mobile Phone Technician: In mobile phone repair shops,
                    electronics stores, and service centers.
                    <br />
                    Independent Mobile Phone Repairer: Starting their own mobile
                    phone repair business.
                    <br />
                    Technical Support Specialist: Providing technical support to
                    customers over the phone or in person.
                    <br />
                    Data Recovery Technician: Recovering lost data from damaged
                    or malfunctioning mobile devices.
                    <br />
                    Mobile Device Salesperson: Selling and providing technical
                    support for mobile devices in retail stores.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Automotive Electrical Wiring
                  </AccordionTrigger>
                  <AccordionContent>
                    This course is designed to equip learners with the knowledge
                    and practical skills necessary to diagnose, repair, and
                    maintain the electrical systems of modern automobiles. The
                    curriculum focuses on developing a strong foundation in
                    automotive electrical principles, including: <br />
                    Basic Electrical Concepts: Understanding of voltage,
                    current, resistance, Ohm&apos;s Law, and basic circuit
                    analysis.
                    <br />
                    Automotive Electrical Components: Identification and
                    function of batteries, starters, alternators, fuses, relays,
                    sensors, and actuators.
                    <br />
                    Wiring Diagrams: Reading and interpreting wiring diagrams to
                    troubleshoot electrical faults.
                    <br />
                    Diagnostic Tools: Proper use of multimeters, scan tools, and
                    other diagnostic equipment.
                    <br />
                    Safety Procedures: Safe handling of electrical systems,
                    including battery disconnection, short circuit prevention,
                    and personal protective equipment (PPE) usage.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    To cater to the diverse needs of the local population and
                    the evolving automotive industry, the course may offer the
                    following specializations: <br />
                    Heavy-Duty Vehicle Specialization: Focus on the electrical
                    systems of trucks, buses, and other heavy-duty vehicles,
                    covering specialized components and diagnostic procedures.
                    <br />
                    Hybrid/Electric Vehicle Specialization: Training on the
                    unique electrical systems of hybrid and electric vehicles,
                    including battery management systems, electric motors, and
                    charging technologies.
                    <br />
                    Motorcycle Specialization: Specialization in the electrical
                    systems of motorcycles, including charging systems, ignition
                    systems, and starting systems.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Upon successful completion of the course, graduates will be
                    qualified for a range of entry-level and skilled positions
                    in the automotive industry, such as: <br />
                    Automotive Electrician: Diagnose and repair electrical
                    faults in various vehicles.
                    <br />
                    Automotive Technician: Perform general vehicle maintenance
                    and repairs, including electrical systems.
                    <br />
                    Battery Technician: Test, replace, and maintain batteries in
                    various vehicles.
                    <br />
                    Starter and Alternator Technician: Diagnose, rebuild, and
                    replace starters and alternators.
                    <br />
                    Workshop Assistant: Assist experienced technicians with
                    various tasks, including electrical repairs.
                    <br />
                    Self-Employment: Start their own auto repair or electrical
                    services business.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Mechanics
                  </AccordionTrigger>
                  <AccordionContent>
                    Automobile mechanics is idea for persons who want to work in
                    a motor garage either as a proprietor or as a owner.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    <p className=''>
                      The topics and areas of specialization covered include:
                      <ol className='list-decimal list-inside'>
                        <li>Automobile mechanics and electrical work</li>
                        <li>Body re-sprays, bodywork and tyre fitting</li>
                      </ol>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who complete the certificate or diploma course in
                    Automobile, Mechanic & Maintenance work in automotive repair
                    shops or start their own business in automotive repair.{' '}
                    <br /> <br />
                    To succeed as a mechanic, you’ll need to be a focused
                    problem solver who works well independently. Many of the
                    diagnostic tests run by mechanics are computerized, so being
                    comfortable with technology and adapting to change easily
                    will be important. Generally you’ll be working indoors in a
                    well ventilated area but you’ll be on your feet, stooping,
                    crouching, and lifting heavy objects all day so be sure
                    you’re up to the task.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Information Technology
                  </AccordionTrigger>
                  <AccordionContent>
                    This course equips students with necessary skills and
                    knowledge to use computers in a personal or business
                    environment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    This course is available from certificate to diploma level
                    and students do not specialize. However, they cover ICT
                    issues including networking, software engineering, computer
                    packages and business systems. <br />
                    <br />
                    The course is ideal for anyone wishing to develop their ICT
                    competency; from those just starting out in the industry to
                    those in senior management roles. Topics covered include
                    computer packages, introduction to programming and Computer
                    hardware.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who complete this course can work almost in any
                    industry where computers are used as IT operators,
                    programmers or networking experts. This is one of the most
                    marketable course in Somalia right now
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Business Administration
                  </AccordionTrigger>
                  <AccordionContent>
                    The course gives students a general foundation of business
                    knowledge and practices, such as accounting, organizational
                    behaviour, marketing, market analysis and operations
                    management.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    This is a foundation course for those who desire to pursue
                    further studies in Economics or management.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    This course is highly marketable and desired by all
                    industries especially for those who will specialice in
                    accountancy and economics.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Electrical Engineering
                  </AccordionTrigger>
                  <AccordionContent>
                    Automobile mechanics is idea for persons who want to work in
                    a motor garage either as a propitiator or as a owner.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    <p className=''>
                      The topics and areas of specialization covered include:
                      <ol className='list-decimal list-inside'>
                        <li>Automotive mechanics and electrical work</li>
                        <li>Body re-sprays, bodywork and tyre fitting</li>
                      </ol>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who complete the certificate or diploma course in
                    Automobile, Mechanic & Maintenance work in automotive repair
                    shops or start their own business in automotive repair.{' '}
                    <br />
                    <br />
                    To succeed as a mechanic, you’ll need to be a focused
                    problem solver who works well independently. Many of the
                    diagnostic tests run by mechanics are computerized, so being
                    comfortable with technology and adapting to change easily
                    will be important. Generally you’ll be working indoors in a
                    well ventilated area but you’ll be on your feet, stooping,
                    crouching, and lifting heavy objects all day so be sure
                    you’re up to the task.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Garment Making
                  </AccordionTrigger>
                  <AccordionContent>
                    The Certificate course garment making enables successful
                    students to select suitable techniques for stitching
                    garments according to the latest trends
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    <p className=''>
                      The course enables students to illustrate and understand
                      various types of garment and know the techniques used in
                      making them. Other elements include:
                      <ol className='list-decimal list-inside'>
                        <li>
                          Stitch various types of garments for children and
                          adults.
                        </li>
                        <li>Prepare patterns of garments as per requirement</li>
                        <li>
                          Manage the production of different types of garments
                          on the shop floor
                        </li>
                        <li>Set up an entrepreneurial unit.</li>
                      </ol>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who complete the certificate or diploma course in
                    Automobile, Mechanic & Maintenance work in automotive repair
                    shops or start their own business in automotive repair.{' '}
                    <br />
                    <br />
                    To succeed as a mechanic, you’ll need to be a focused
                    problem solver who works well independently. Many of the
                    diagnostic tests run by mechanics are computerized, so being
                    comfortable with technology and adapting to change easily
                    will be important. Generally you’ll be working indoors in a
                    well ventilated area but you’ll be on your feet, stooping,
                    crouching, and lifting heavy objects all day so be sure
                    you’re up to the task.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Languages
                  </AccordionTrigger>
                  <AccordionContent>
                    Learning English or Arabic gives you an edge. Both are
                    languages are official for the United Nations
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    There is no specialization in these subjects. What you need
                    to do is to master the languages.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who complete these course have an edge and can be
                    employed as interpretors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    CARPENTRY & JOINERY
                  </AccordionTrigger>
                  <AccordionContent>
                    Carpentry, Woodwork & Joinery course is for those who enjoy
                    working with timber.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    The course offers learners both basic woodworking techniques
                    and complex joinery skills. <br /> <br />
                    On completion of the course, learners can pursue a career in
                    carpentry. Carpenters work with timber on building sites or
                    in customers’ homes and construct, fit or repair doors,
                    window frames, staircases, floorboards, cupboards,
                    traditional cut roofs, roof trusses and partitions. Bench
                    joiners are based in a workshop and manufacture timber
                    products such as doors, window frames, staircases and
                    cabinets.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who take this course love working with timber and
                    are often entrepreneurs who believe ion self employment.
                    Others work in building and construction industry
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    METAL WORK
                  </AccordionTrigger>
                  <AccordionContent>
                    This course aims to provide basic practical training and
                    knowledge of fabrication and welding.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    The aim of the course is to introduce students to basic
                    welding and fabrication applications and techniques in a
                    number of different processes. This is a practical course,
                    with the emphasis on ‘learning by doing’ covers the
                    following areas: Health and Safety Metal fabrication
                    Oxy-acetylene welding Oxy-acetylene cutting Electric arc
                    welding Testing and defects of welded joints Basic business
                    management skills
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students completing this course are mostly self employed but
                    a good percentage also works in the building and
                    construction industry as metal fabricators
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
            <div className='container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-6 items-baseline'>
              {courses.map((course, i) => (
                <div key={i} className='flex flex-col justify-center space-y-4'>
                  {course.title === 'Building & Construction' && (
                    <BuildingIcon className='w-12 h-12 text-primary' />
                  )}
                  {course.title === 'Engineering' && (
                    <ConstructionIcon className='w-12 h-12 text-primary' />
                  )}
                  {course.title === 'Business' && (
                    <BriefcaseIcon className='w-12 h-12 text-primary' />
                  )}
                  {course.title === 'ICT' && (
                    <ComputerIcon className='w-12 h-12 text-primary' />
                  )}
                  <h3 className='text-xl font-bold'>{course.title}</h3>
                  <p className=''>{course.content}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
