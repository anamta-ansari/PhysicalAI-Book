import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import FloatingAskAI from "@site/src/components/FloatingAskAI";



// Hero Section
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          A complete textbook on embodied intelligence, humanoid robot systems, locomotion,
          perception, control, and real-world robotics engineering.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Read the Book
          </Link>
          <Link className="button button--primary button--lg" to="/resources">
            Download Resources
          </Link>
        </div>
      </div>
    </header>
  );
}

// About Section
function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.text}>
            <h2>About the Book</h2>
            <p>
              This textbook covers: Embodied AI foundations, Humanoid robot kinematics,
              Locomotion & balance, Manipulation & sensing, Robot intelligence & learning,
              Human–robot interaction, Safety, ethics, and applications.
            </p>
          </div>
          {/* <div className={styles.image}>
            <img src="/robot-blueprint.png" alt="Robotics Blueprint" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

// Chapter Grid Section
// Chapter Grid Section
function ChapterGrid() {
  const chapters = [
    {
      title: 'Foundations of Physical AI & Humanoid Robotics',
      description:
        'Introduces the core concepts of physical AI, embodied intelligence, and the evolution of humanoid robotics systems.',
    },
    {
      title: 'Robotic Nervous System (ROS 2)',
      description:
        'Covers ROS 2 architecture, communication, real-time control, and middleware for humanoid robots.',
    },
    {
      title: 'Digital Twin & Simulation',
      description:
        'Explains simulation environments, physics engines, and digital twins for safe robot development.',
    },
    {
      title: 'AI-Robot Brain (NVIDIA ISAAC)',
      description:
        'Focuses on NVIDIA Isaac, reinforcement learning, synthetic data, and robot intelligence pipelines.',
    },
    {
      title: 'Humanoid Robot Engineering',
      description:
        'Details mechanical design, actuators, sensors, power systems, and full humanoid integration.',
    },
    {
      title: 'Vision-Language-Action Robotics',
      description:
        'Explores perception, multimodal models, language grounding, and decision-making in robots.',
    },
    {
      title: 'Hardware Requirements & Lab Setup',
      description:
        'Describes lab safety, hardware components, compute requirements, and experimental setup.',
    },
    {
      title: 'Implementation, Assessments & Projects',
      description:
        'Provides real-world projects, evaluations, case studies, and deployment strategies.',
    },
  ];

  return (
    <section className={styles.chapterGrid}>
      <div className="container">
        <h2>Chapters Overview</h2>

        <div className={styles.grid}>
          {chapters.map((chapter) => (
            <div key={chapter.title} className={styles.card}>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// Labs & Tutorials Section
// function LabsSection() {
//   const labs = ['Build a Legged Robot', 'Design a Balance Controller', 'Robot Vision Lab'];
//   return (
//     <section className={styles.labsSection}>
//       <div className="container">
//         <h2>Tutorials & Labs</h2>
//         <div className={styles.horizontalCards}>
//           {labs.map((lab) => (
//             <div key={lab} className={styles.labCard}>
//               <img src="/img/lab-icon.png" alt="Lab Icon" />
//               <p>{lab}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Featured Images Section
// function FeaturedImages() {
//   const images = [
//     '/img/robot1.png',
//     '/img/robot2.png',
//     '/img/robot3.png',
//     '/img/robot4.png',
//   ];
//   return (
//     <section className={styles.featuredImages}>
//       <div className="container">
//         <h2>Featured Images</h2>
//         <div className={styles.imageStrip}>
//           {images.map((src, idx) => (
//             <img key={idx} src={src} alt={`Featured ${idx + 1}`} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Footer Section (custom)
function CustomFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.links}>
          <Link to="/docs">Docs</Link>
          <Link to="/tutorials">Tutorials</Link>
          <Link to="/chapters">Chapters</Link>
          <Link to="/license">License</Link>
          <Link to="/github">GitHub</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p>Made with Docusaurus</p>
      </div>
    </footer>
  );
}

// Main Page
export default function Home(): ReactNode {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="A complete textbook on embodied intelligence, humanoid robotics, and AI systems"
    >
      <HomepageHeader />
      <main>
        <AboutSection />
        <ChapterGrid />


        <FloatingAskAI/>
      </main>
      <CustomFooter />
    </Layout>
  );
}
