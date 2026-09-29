import React, { useEffect, useRef } from "react";
import { staggerReveal } from "../utils/animations";
import "./TeamMembers.css";

// ─── Icons ───────────────────────────────────────────────────────────────────

function LinkedinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.6.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
    </svg>
  );
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

const AVATAR_MAP = {
  "Abdulrahman Nisar": "/team/abdulrahman-nisar.jpg",
  "Ali Hassan": "/team/ali-hassan.jpg",
  "Ammad Mahmood": "/team/ammad-mahmood.jpg",
  "Ayesha Ahmad": "/team/ayesha-ahmad.jpg",
  "Bismah Nasir": "/team/bismah-nasir.jpg",
  "Haseeb Raza": "/team/haseeb-raza.jpg",
  "Hiba Noor": "/team/hiba-noor.jpg",
  "Iqra Hussain": "/team/iqra-hussain.jpg",
  "M Talha Younis": "/team/m-talha-younis.jpg",
  "Maleeha Mubeen": "/team/maleeha-mubeen.jpg",
  "Muhammad Fakhar": "/team/muhammad-fakhar.jpg",
  "Muhammad Umair": "/team/muhammad-umair.jpg",
  "Syeda Ghania Shahzad": "/team/syeda-ghania-shahzad.jpg",
  "Tashfeen Liaquat": "/team/tashfeen-liaquat.jpg",
  "Taimoor Ahmad": "/team/taimoor-ahmad.png",
  "Zaid Raza": "/team/zaid-raza.jpg",
  "Ameer Hamza": "/team/ameer-hamza.png",
  "Jibraan Khan": "/team/jibraan-khan.jpg",
  "Muniba Shami": "/team/muniba-shami.jpg",
  "Rimsha": "/team/rimsha.jpg",
  "Tariful Islam Tarif": "/team/tariful-islam.jpg",
  "Muhammad Al Yasa Dawood": "/team/m-al-yasa-dawood.jpeg",
  "Muhammad Usman Khan": "/team/m-usman-khan.jpeg",
  "Abdul Wahab": "/team/abdul-wahab.png",
  "Kashaf Noor": "/team/kashaf-noor.jpg",
  "Moiz Ur Rehman": "/team/moiz-ur-rehman.jpg",
  "Sami Ullah": "/team/sami-ullah.jpeg",
  "Saniah Malik": "/team/saniah-malik.png",

};

function getAvatarUrl(name) {
  return AVATAR_MAP[name] || "/team/avatar.svg";
}

const BADGE_CLASS = {
  Leadership: "badge-leadership",
  "Full Time": "badge-full-time",
  "Part Time": "badge-part-time",
  Internship: "badge-internship",
  Ambassador: "badge-ambassador",
};

// ─── Team data ────────────────────────────────────────────────────────────────

const TEAM_CATEGORIES = [
  {
    category: "Founders & Directors",
    members: [
      {
        name: "Muhammad Al Yasa Dawood",
        role: "Co-Founder",
        gender: "male",
        type: "Leadership",
        linkedin:
          "https://www.linkedin.com/in/muhammad-al-yasa-dawood-666317286/",
        portfolio: "https://alyasa62.github.io/",
      },
      {
        name: "Muhammad Usman Khan",
        role: "Director",
        gender: "male",
        type: "Leadership",
        linkedin: "https://www.linkedin.com/in/muhammad-usman-khan-9ba575381",
        github: "https://github.com/codewithuusman",
      },
      {
        name: "Abdul Wahab",
        role: "Head of Software, Sales & Marketing Department",
        gender: "male",
        type: "Leadership",
        linkedin: "",
      },
    ],
  },
   {
    category: "HR Team",
    members: [
      {
        name: "Maleeha Mubeen",
        role: "HR Executive",
        gender: "female",
        type: "Full Time",
        linkedin: "https://www.linkedin.com/in/maleeha-mubeen-9a4688408",
      },
      {
        name: "Ayesha Ahmad",
        role: "HR Internee",
        gender: "female",
        type: "Internship",
        linkedin: "https://www.linkedin.com/in/ayesha-ahmad-6b757b3b5/",
        github: "https://github.com/ayeshaahmad1609",
      },
    ],
  },
  {
    category: "Cyber Security",
    members: [
      {
        name: "Sami Ullah",
        role: "CISO (Chief Information Security Officer)",
        gender: "male",
        linkedin: "https://www.linkedin.com/in/sami-ullah-19ba71333/",
        github: "https://github.com/sami-tor",
      },
    ],
  },
  {
    category: "Android Developer",
    members: [
      {
        name: "Abdulrahman Nisar",
        role: "Native Android Developer Intern",
        gender: "male",
        linkedin: "https://www.linkedin.com/in/abdulrahman-nisar/",
        github: "https://github.com/abdulrahman-nisar",
      },
      {
        name: "Sabiha Niaz",
        role: "Native Android Developer Intern",
        gender: "female",
        linkedin: "https://www.linkedin.com/in/sabiha-niaz-864771383",
        github: "https://github.com/sabihaniaz7",
      },
      {
        name: "Ifra Malik",
        role: "Native Android Developer",
        gender: "female",
        linkedin: "https://www.linkedin.com/in/ifra-malik-09236836a",
        github: "https://github.com/ifra489",
      },
      {
        name: "Syeda Ghania Shahzad",
        role: "Native Android Intern",
        gender: "female",
        type: "Internship",
        linkedin: "https://www.linkedin.com/in/ghania-shahzad-531710287",
        github: "https://github.com/ghaniashahzad01",
      },
      {
        name: "Muhammad Umair",
        role: "Native Android Intern",
        gender: "male",
        type: "Internship",
        linkedin: "https://www.linkedin.com/in/muhammad-umair-9523ba347",
        github: "https://github.com/umaircoder123",
      },
      {
        name: "Moiz Ur Rehman",
        role: "Flutter Developer Intern",
        gender: "male",
        type: "Internship",
        linkedin: "https://www.linkedin.com/in/moizrao/"
      },
    ],
  },
  {
    category: "Game Developer",
    members: [
      {
        name: "Muhammad Fakhar",
        role: "Android Game Developer",
        gender: "male",
        type: "Full Time",
        linkedin: "https://www.linkedin.com/in/muhammad-fakhar-829b3237b",
      },
      {
        name: "Ali Hassan",
        role: "Android Game Developer",
        gender: "male",
        type: "Full Time",
        linkedin: "https://www.linkedin.com/in/ali-hassan-6a84b6231",
        github: "https://github.com/Ali143624",
        photoPosition: "40% 25%",
      },
      {
        name: "Tashfeen Liaquat",
        role: "Android Game Developer",
        gender: "male",
        type: "Full Time",
        linkedin: "https://smartlnks.com/JgOB",
        github: "https://github.com/mtashfeen-git",
      },
    ],
  },
  {
    category: "Web Developer",
    members: [
      {
        name: "Iqra Hussain",
        role: "Team lead of web developers",
        gender: "female",
        isTeamLead: true,
        linkedin: "https://www.linkedin.com/in/iqra-hussain-5158222a3",
      },
      {
        name: "Ammad Mahmood",
        role: "MERN Stack Developer",
        gender: "male",
        linkedin: "https://www.linkedin.com/in/ammad-mahmood-a8322a254",
        github: "https://github.com/Ammad-07",
      },
      {
        name: "Bismah Nasir",
        role: "Web Development Intern",
        gender: "female",
        linkedin: "https://www.linkedin.com/in/bismah-nasir",
        github: "https://github.com/bismah-nasir",
      },
      {
        name: "Hiba Noor",
        role: "Web Development & Social Media Manager",
        gender: "female",
        linkedin: "https://www.linkedin.com/in/hiba-noor-247a0936a",
        github: "https://github.com/Hiba-noor",
      },
      {
        name: "Haseeb Raza",
        role: "Backend Web Developer",
        gender: "male",
        type: "Full Time",
        linkedin: "https://www.linkedin.com/in/haseebraza4998",
        github: "https://github.com/Haseebzahid9",
      },
      {
        name: "M Talha Younis",
        role: "Frontend Developer Intern",
        gender: "male",
        type: "Internship",
        linkedin: "https://www.linkedin.com/in/talha-younis-b082113a9",
        github: "https://github.com/talhayounis3006",
      },
        {
        name: "Saniah Malik",
        role: "Frontend Developer Intern",
        gender: "female",
        type: "Internship",
        linkedin: "https://www.linkedin.com/in/saniah-malik-5850953b5/",
        github: "https://github.com/SaniahMalik",
      },
    ],
  },
  {
    category: "UI/UX Designer",
    members: [
     {
        name: "Aleeza Ahmad",
        role: "UI/UX Designer",
        gender: "female",
        linkedin: "https://www.linkedin.com/in/aleeza-ahmed-5286a42a1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        github: "https://github.com/AleezaBhatti835"
      }
    ],
  },
 {
    category: "AI Engineer",
    members: [
      {
        name: "Tariful Islam Tarif",
        role: "AI Intern",
        gender: "male",
        type: "Internship",
        linkedin: "https://www.linkedin.com/in/tariful-islam-tarif-1a4338324/",
      },
      {
        name: "Kashaf Noor",
        role: "AI Intern",
        gender: "female",
        type: "Internship",
        linkedin: "https://www.linkedin.com/in/kashaf-noor-6678bb304?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      },
    ],
  },
 
  {
    category: "Campus Ambassadors",
    members: [
      {
        name: "Taimoor Ahmad",
        role: "Campus Ambassador — FAST NUCES CFD",
        gender: "male",
        type: "Ambassador",
        linkedin: "https://www.linkedin.com/in/taimoor-ahmad-343193324",
      },
      {
        name: "Zaid Raza",
        role: "Campus Ambassador — University of Mianwali",
        gender: "male",
        type: "Ambassador",
        linkedin: "https://www.linkedin.com/in/zaid-raza-5935a6380",
      },
      {
        name: "Ameer Hamza",
        role: "Campus Ambassador — UET Lahore New Campus",
        gender: "male",
        type: "Ambassador",
        linkedin: "https://www.linkedin.com/in/malik-ameerhamza",
      },
      {
        name: "Jibraan Khan",
        role: "Campus Ambassador — University of Mianwali",
        gender: "male",
        type: "Ambassador",
        linkedin: "https://www.linkedin.com/in/jibran-khan-399053416",
      },
      {
        name: "Rimsha",
        role: "Campus Ambassador — COMSATS",
        gender: "female",
        type: "Ambassador",
        linkedin: "https://www.linkedin.com/in/rimsha-ghulam-ali-85757b36b/",
      },
      {
        name: "Muniba Shami",
        role: "Campus Ambassador — UET Lahore",
        gender: "female",
        type: "Ambassador",
        linkedin: "https://www.linkedin.com/in/muniba-shami-558705384",
      },
    ],
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function MemberCard({ member }) {
  return (
    <div className="member-card glass-card reveal">
      <div className="member-avatar-wrapper">
        <div className="member-avatar-circle">
          <img
            src={getAvatarUrl(member.name)}
            alt={member.name}
            className="member-photo"
            style={
              member.photoPosition
                ? { objectPosition: member.photoPosition }
                : undefined
            }
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/team/avatar.svg";
            }}
          />
        </div>
        {member.type === "Leadership" && (
          <span className="member-type-badge badge-leadership">Leader</span>
        )}
        {member.isTeamLead && (
          <span className="member-type-badge badge-full-time">Team Lead</span>
        )}
        {member.type === "Ambassador" && (
          <span className="member-type-badge badge-ambassador">Ambassador</span>
        )}
      </div>

      <div className="member-info">
        <h4 className="member-name">{member.name}</h4>
        <p className="member-role text-gradient">{member.role}</p>

        <div className="member-links">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="member-link-btn"
              aria-label={`${member.name} LinkedIn`}
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
          )}
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="member-link-btn"
              aria-label={`${member.name} GitHub`}
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>
          )}
          {member.portfolio && (
            <a
              href={member.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="member-link-btn"
              aria-label={`${member.name} Portfolio`}
            >
              <PortfolioIcon />
              <span>Portfolio</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category, members }) {
  const isFounders = category === "Founders & Directors";
  return (
    <div className="member-category">
      <h3 className="member-category-title">
        <span className="text-gradient">{category}</span>
      </h3>
      <div className={`member-grid ${isFounders ? "founders-grid" : ""}`}>
        {members.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function TeamMembers() {
  const containerRef = useRef(null);

  // Animate cards in on mount
  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".member-card");
    staggerReveal(cards, { delay: 0.1, stagger: 0.08 });
  }, []);

  return (
    <div className="team-members-section" ref={containerRef}>
      <div className="about-intro">
        <span className="section-label">Our Team</span>
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          The founders, developers, designers, and operators who turn ideas into
          products — across Android, Web, Game, UI/UX, and HR.
        </p>
      </div>

      {TEAM_CATEGORIES.map((group) => (
        <CategorySection
          key={group.category}
          category={group.category}
          members={group.members}
        />
      ))}
    </div>
  );
}
