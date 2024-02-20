// pages/HomePage.tsx
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
     <header className="p-8 bg-sky-blue-300">
        <nav className="mb-4">
          <ul className="flex space-x-4 mt-4 justify-center">
            <li><a href="#about" className="text-blue-200 hover:text-blue-700">About</a></li>
            <li><a href="#testimonial" className="text-blue-200 hover:text-blue-700">Testimonial</a></li>
            <li><a href="#join-team" className="text-blue-200 hover:text-blue-700">Join the Team</a></li>
            <li><a href="#join-mailing-list" className="text-blue-200 hover:text-blue-700">Join Mailing List</a></li>
            <Link href="/dashboard"><span className="text-blue-200 hover:text-blue-700">Dashboard</span></Link>
          </ul>
        </nav>
        <h1 className="text-5xl font-bold text-center mb-4">Pipeline to Success</h1>
        <h3 className="text-lg text-center mb-4">To Strive. To Create. To Serve. By Gryphons, For Gryphons</h3>
      </header>

      <main className="flex-grow">
        <div className="py-8">
          <section id="mcat-guelph">
            <h2 className="text-2xl font-semibold text-center">MCAT@Guelph</h2>
            {/* Content for MCAT@Guelph */}

            <p className="font-semibold text-center">Start your MCAT prep early with MCAT@Guelph! Our session leads are either content experts or 
              have already taken the MCAT and done very well (90+ percentile range, including a 100th percentile 
              score).
              This is a great opportunity to practice with MCAT-style questions, use our weekly sessions to 
              increase accountability and maintain your study momentum, and get advice and insight from our 
              leads. Each session is only $2 to attend!</p>
          </section>
        </div>

        <div className="py-8">
          <section id="pipeline-to-clinical-experience">
            <h2 className="text-2xl font-semibold text-center">Pipeline to Clinical Experience</h2>
            {/* Content for Pipeline to Clinical Experience */}
            <p className="font-semibold text-center">We connect students to volunteer opportunities in local healthcare clinics in Guelph. 
              Volunteers get training and experience with entry-level clinical tasks, and learn about the 
              day-to-day operation of a healthcare clinic.
            </p>
          </section>
        </div>

        <div className="py-8">
          <section id="pipeline-to-research">
            <h2 className="text-2xl font-semibold text-center">Pipeline to Research</h2>
            {/* Content for Pipeline to Research */}
            <p className="font-semibold text-center">We connect first and second year students to research opportunities across a variety of
               departments. Our goal is to help students get experience and exposure to the research environment 
               early on in their university career.
            </p>
          </section>
        </div>

        <div className="py-8">
          <section id="pipeline-workshops">
            <h2 className="text-2xl font-semibold text-center">Pipeline Workshops</h2>
            {/* Content for Pipeline Workshops */}
            <p className="font-semibold text-center">Introductory Anki Workshop
            </p>
          </section>
        </div>

        <div className="py-8">
          <section id="more-in-the-pipeline">
            <h2 className="text-2xl font-semibold text-center">More In The Pipeline</h2>
            {/* Content for Upcoming Initiatives */}
            <p className="font-semibold text-center">
              (Add Calendar?)
            We plan to host academic contests, to encourage scholarship in the basic sciences and recognize
             academic excellence at the University of Guelph. COMING WINTER 2024
            </p>
          </section>
        </div>
      </main>

      <footer className="p-8 bg-gray-200">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default HomePage;
