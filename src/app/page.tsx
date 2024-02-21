import Link from "next/link";
import { JSX } from "react";

/**
 * The home page
 *
 * @returns JSX.Element
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      <Components />
    </>
  );
}

/**
 * The components for the home page
 *
 * @returns JSX.Element
 */
function Components() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-10 bg-sky-300 p-24">
      {/** <Navbar/> */}

      {/**
       * Header section
       */}
      <header className="flex max-w-lg flex-col items-center justify-center gap-4">
        <h1 className="text-center text-5xl font-bold">Pipeline to Success</h1>
        <h3 className="text-center text-lg">
          To Strive. To Create. To Serve. By Gryphons, For Gryphons
        </h3>
      </header>

      {/**
       * Section for MCAT@Guelph
       */}
      <section className="max-w-2xl" id="mcat-guelph">
        <h2 className="text-center text-2xl font-semibold">MCAT@Guelph</h2>
        <p className="text-center font-semibold">
          MCAT@Guelph is a student-led initiative that provides resources and
          support to students preparing for the MCAT. We offer a variety of
          resources, including practice exams, study groups, and workshops.
        </p>
      </section>

      {/**
       * Section for Pipeline to Clinical Experience
       */}
      <section className="max-w-2xl" id="pipeline-to-clinical-experience">
        <h2 className="text-center text-2xl font-semibold">
          Pipeline to Clinical Experience
        </h2>
        <p className="text-center font-semibold">
          We connect students to volunteer opportunities in local healthcare
          clinics in Guelph. Volunteers get training and experience with
          entry-level clinical tasks, and learn about the day-to-day operation
          of a healthcare clinic.
        </p>
      </section>

      {/**
       * Section for Pipeline to Research
       */}
      <section className="max-w-2xl" id="pipeline-to-research">
        <h2 className="text-center text-2xl font-semibold">
          Pipeline to Research
        </h2>
        <p className="text-center font-semibold">
          We connect first and second year students to research opportunities
          across a variety of departments. Our goal is to help students get
          experience and exposure to the research environment early on in their
          university career.
        </p>
      </section>

      {/**
       * Section for Pipeline Workshops
       */}
      <section className="max-w-2xl" id="pipeline-workshops">
        <h2 className="text-center text-2xl font-semibold">
          Pipeline Workshops
        </h2>
        <p className="text-center font-semibold">Introductory Anki Workshop</p>
      </section>

      {/**
       * Section for More In The Pipeline
       */}
      <section className="max-w-2xl" id="more-in-the-pipeline">
        <h2 className="text-center text-2xl font-semibold">
          More In The Pipeline
        </h2>
        <p className="text-center font-semibold">
          (Add Calendar?) We plan to host academic contests, to encourage
          scholarship in the basic sciences and recognize academic excellence at
          the University of Guelph. COMING WINTER 2024
        </p>
      </section>
    </main>
  );
}
