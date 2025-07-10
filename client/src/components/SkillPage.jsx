import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SkillPage.module.css";
const SkillPage = () => {
  const { role } = useParams(); // Extracting the role parameter from the URL

  const skills = {
    healthcare: {
      "First Aid": {
        description:
          "First aid is the assistance given to any person suffering a sudden illness or injury, with care provided to preserve life, prevent the condition from worsening, or promote recovery.",
        courses: [
          {
            name: "Basic First Aid Training",
            link: "https://www.redcross.org/take-a-class/first-aid",
          },
        ],
      },
      Nursing: {
        description:
          "Nursing is a profession within the healthcare sector focused on the care of individuals, families, and communities so they may attain, maintain, or recover optimal health and quality of life.",
        courses: [
          {
            name: "Nursing Fundamentals",
            link: "https://www.nursingworld.org/education",
          },
        ],
      },
    },
    it: {
      Programming: {
        description:
          "Programming involves creating and designing software programs to solve problems or perform specific tasks. It involves writing code in programming languages such as Java, Python, or JavaScript.",
        courses: [
          {
            name: "Introduction to Programming",
            link: "https://www.udemy.com/course/philosophy-fundamentals-computer-programming/?couponCode=LETSLEARNNOWPP",
            
          },
        ],
      },
      "Database Management": {
        description:
          "Database management involves storing, organizing, and managing data efficiently using database management systems (DBMS). It includes tasks such as data modeling, database design, and querying.",
        courses: [
          {
            name: "Database Fundamentals",
            link: "https://www.classcentral.com/course/db-303",
          },
        ],
      },
    },
    teacher: {
      "Lesson Planning": {
        description:
          "Lesson planning involves the creation of a detailed outline of what students will be taught in a class. It includes setting objectives, determining instructional strategies, and evaluating student learning.",
        courses: [
          {
            name: "Effective Lesson Planning",
            link: "https://www.cambridge.org/elt/blog/2018/08/22/lesson-classroom-management-course/",
          },
        ],
      },
      "Classroom Management": {
        description:
          "Classroom management involves the organization and control of the learning environment to ensure a positive and productive classroom experience for students. It includes strategies for behavior management, classroom routines, and student engagement.",
        courses: [
          {
            name: "Classroom Management Techniques",
            link: "https://study.com/academy/course/education-103-classroom-management.html",
            
          },
        ],
      },
    },
    finance: {
      "Financial Analysis": {
        description:
          "Financial analysis involves assessing the financial performance of a company or investment to make informed decisions. It includes analyzing financial statements, evaluating market trends, and forecasting future performance.",
        courses: [
          {
            name: "Financial Statement Analysis",
            link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-financial-management",
            
          },
        ],
      },
      Accounting: {
        description:
          "Accounting involves the recording, reporting, and analysis of financial transactions for businesses, organizations, or individuals. It includes tasks such as bookkeeping, financial reporting, and tax preparation.",
        courses: [
          {
            name: "Accounting Fundamentals",
            link: "https://coursera.org/learn/wharton-accounting",
            
          },
        ],
      },
    },
    engineering: {
      "Mechanical Engineering": {
        description:
          "Mechanical engineering involves the design, analysis, and manufacturing of mechanical systems and components. It includes areas such as thermodynamics, fluid mechanics, and machine design.",
        courses: [
          {
            name: "Mechanical Engineering Fundamentals",
            link: "https://www.coursera.org/learn/mechanical-engineering",
          },
        ],
      },
      "Electrical Engineering": {
        description:
          "Electrical engineering involves the study and application of electricity, electronics, and electromagnetism. It includes areas such as circuit theory, digital systems, and power generation.",
        courses: [
          {
            name: "Electrical Engineering Basics",
            link: "https://www.edx.org/course/electrical-engineering-basics",
          },
        ],
      },
    "web development": {
        description:
          "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.",
        courses: [
          {
            name: "Web Development",
            link: "https://www.codecademy.com/learn/paths/learn-how-to-build-websites",
          },
        ],
      },
      "machine learning": {
        description:
          "machine learning enables computers to learn from data and make decisions or predictions without being explicitly programmed to do so.",
          
        courses: [
          {
            name: "Machine Learning",
            link: "https://developers.google.com/machine-learning/crash-course/ml-intro",
            
          },
        ],
      },
      "critical thinking": {
        description:
          "Critical thinking is not something you do once with an issue and then drop it. It requires that we update our knowledge as new information comes in",
          
        courses: [
          {
            name: "Critical Thinking",
            link: "https://www.udemy.com/course/critical-thinker-academy/?audience=Keyword&campaigntype=Search&gad_source=1&gbraid=0AAAAADROdO1f_XH_v1WWzWsimqYnbWLuT&gclid=Cj0KCQjw6PGxBhCVARIsAIumnWZmp1tdClPJXIhytuSVguVtV22A1NeXH_n3oCyPheVsAaiszaxqPPQaAuhaEALw_wcB&language=EN&matchtype=b&portfolio=India&priority=&product=Course&test=&topic=&utm_campaign=LongTail_la.EN_cc.INDIA&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_84769218208_._ad_670113553407_._kw_critical+thinking+course_._de_m_._dm__._pl__._ti_kwd-421318231323_._li_9149193_._pd__._&couponCode=IND21PM",
            
          },
        ],
      },
    },
  };

  return (
    <div className={styles.container}>
    <h1 className={styles.heading}>Skills for {role}</h1>
    <div className={styles["skills-grid"]}> {/* Use correct class name */}
      {Object.entries(skills[role]).map(([skill, skillData]) => (
        <div key={skill} className={styles["skill-item"]}> {/* Use correct class name */}
          <h2 className={styles.subheading}>{skill}</h2>
          <p className={styles.description}>{skillData.description}</p>
          <h3>Courses</h3>
          <ul>
            {skillData.courses.map((course, index) => (
              <li key={index}>
                <a href={course.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  );
};

export default SkillPage;
