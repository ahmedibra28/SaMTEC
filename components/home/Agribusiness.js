import React from 'react'

const Agribusiness = () => {
  return (
    <div id='agribusiness' className='container py-5 my-5'>
      <h3 className='text-center display-6 text-primary'>
        Agribusiness Entrepreneurship Training
      </h3>
      <p className='text-center'>
        The College started offering 3 courses at its early days, and gradually
        increased to the current 19 different courses (Table below).
        <br />
        In addition to SaMTEC s main campus in Beld-Hawa, Agriculture Training
        Centre (ATC) campus in Luuq offers specializes agribusiness and
        agriculture extension vocational training courses.
      </p>
      <hr />
      <nav>
        <div className='nav nav-tabs' id='nav-tab' role='tablist'>
          <button
            className='nav-link active'
            id='nav-3-tab'
            data-bs-toggle='tab'
            data-bs-target='#nav-3'
            type='button'
            role='tab'
            aria-controls='nav-3'
            aria-selected='true'
          >
            Training and mentorship on agribusiness and entrepreneurship
          </button>
          <button
            className='nav-link'
            id='nav-4-tab'
            data-bs-toggle='tab'
            data-bs-target='#nav-4'
            type='button'
            role='tab'
            aria-controls='nav-4'
            aria-selected='false'
          >
            Food production to improve nutrition outcomes under permaculture
            courses
          </button>
        </div>
      </nav>
      <div className='tab-content' id='nav-tabContent'>
        <div
          className='tab-pane fade show active'
          id='nav-3'
          role='tabpanel'
          aria-labelledby='nav-3-tab'
        >
          <p>
            Targets school age youth, withan overall aim of enabling youth to
            access to formal and informal employments. Female and male youth are
            trained on Permaculture principles, agroecology, Business & Basic
            computer skills for six months.
          </p>
          <p>
            SaMTEC’s ATC has introduced demonstration plots for different
            practical sessions. Trained youth are able to produce horticulture
            crops to access income.
          </p>
        </div>
        <div
          className='tab-pane fade'
          id='nav-4'
          role='tabpanel'
          aria-labelledby='nav-4-tab'
        >
          <p>
            Aims to strengthen communities’ resilience to cope with recurring
            humanitarian hazards and shocks. Target audiences benefit from
            SaMTEC’s ATC and receive tailor-made agriculture training courses to
            improve the uptake of modern and environmentally friendly food
            production techniques. SaMTEC’s ATC facilities and demonstration
            field within the campus
          </p>
        </div>
      </div>
    </div>
  )
}

export default Agribusiness
