import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Instagram, Mail, Phone } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

interface CertificationItem {
  title: string;
  period: string;
  description: string;
  projects?: string[];
  organization?: string;
}

interface TechnicalSkills {
  programming: string[];
  tools: string[];
  automation: string[];
  integration: string[];
  hardware: string[];
}

type ExperienceCardProps = ExperienceItem;

type EducationCardProps = EducationItem;

// Components
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  period,
  points,
}) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription className="text-base font-medium">
        {company} | {location} | {period}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-6 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-muted-foreground">
            {point}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  location,
  year,
}) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="text-lg">{degree}</CardTitle>
      <CardDescription>
        {institution} | {location} | {year}
      </CardDescription>
    </CardHeader>
  </Card>
);

export default function Home() {
  const professionalExperience: ExperienceItem[] = [
    {
      title: "Lead Automation Engineer",
      company: "PT. Hikmah Jaya Sentosa",
      location: "Jakarta, Indonesia",
      period: "2021 – 2024",
      points: [
        "Developed and programmed industrial controllers (Omron, Mitsubishi, Siemens) for automation sequences, enhancing operational efficiency and accuracy.",
        "Created VSD programs for multiple applications, such as pumps, fans, and blowers, optimizing equipment performance and energy consumption.",
        "Designed and implemented HMI systems for automation visualization using multiple platforms web based and local machine, improving user interface and system monitoring capabilities.",
      ],
    },
    {
      title: "Electrical Engineer",
      company: "PT. Pinanggih Tekhnikatama Indonesia",
      location: "Jakarta, Indonesia",
      period: "2016 – 2021",
      points: [
        "Developed electrical wiring and installation plans for automation control panels, ensuring compliance with industry standards and client specifications.",
        "Programmed PLCs and HMIs for various automation applications, increasing system reliability and performance.",
        "Analyzing electrical power usage in factory plant, using power meter and logging data for visualization using web based.",
      ],
    },
  ];

  const education: EducationItem[] = [
    {
      degree: "Purwadhika Digital Talent Incubator Program",
      institution: "Purwadhika Digital School",
      location: "Batam",
      year: "2024",
    },
    {
      degree: "Bachelor of Engineering in Electrical Engineering",
      institution: "Mercu Buana University",
      location: "Jakarta",
      year: "2022",
    },
  ];

  const certifications: CertificationItem[] = [
    {
      title: "Purwadhika Digital School",
      period: "March 2024 – July 2024",
      description:
        "Completed an intensive full-stack web development training program, focusing on key technologies like Java, JavaScript, React, Next.js, Spring Boot, and Docker. The curriculum covered foundational programming, frontend development with React and responsive design, API integration, and backend development using Java Spring Boot with PostgreSQL for data management.",
      projects: [
        "Company Profile Project: Developed the frontend using React and Next.js",
        "Event Organizer App: Built both frontend and backend with React, Next.js, and Spring Boot",
        "Multi Warehouse App: Built Cart, Payment and Order both frontend and backend with React, Next.js, and Spring Boot",
      ],
    },
    {
      title: "Trainer for Industrial Control Competition",
      organization: "Provincial Education Office, Jakarta",
      period: "September 2023 – October 2023",
      description:
        "Recognized as a trainer for the Industrial Control category in the National Skills Competition for Vocational High Schools (LKS SMK), representing Jakarta.",
    },
  ];

  const technicalSkills: TechnicalSkills = {
    programming: [
      "Java",
      "JavaScript",
      "React",
      "Next.js",
      "Spring Boot",
      "WebSocket",
      "MQTT",
    ],
    tools: ["Docker", "Git"],
    automation: [
      "PLC Programming (Omron, Mitsubishi, Siemens)",
      "HMI Development",
      "VSD Programming",
      "Modbus Communication",
      "Industrial IoT",
    ],
    integration: [
      "RS-232",
      "RS-485",
      "Modbus Serial",
      "Modbus TCP/IP",
      "Rest API",
      "MQTT",
      "WebSocket",
    ],
    hardware: [
      "Industrial Electrical Devices",
      "Automation Equipment",
      "PLCs",
      "VFDs",
      "HMIs",
      "Electrical Panel Assembly",
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="relative w-80 h-80 mx-auto mb-6 rounded-full overflow-hidden bg-blue-600">
            <img
              src="/PP-Iqbal.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Muhammad Iqbal Fariz</h1>
          <p className="text-xl mb-6">Electrical & Software Engineering</p>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild className="h-12 w-12">
              <a
                href="https://www.linkedin.com/in/muhammad-iqbal-fariz/"
                className="hover:text-blue-200"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-12 w-12">
              <a
                href="https://instagram.com/iqballya"
                className="hover:text-blue-200"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground">
                Results-driven Lead Automation Engineer with over 8 years of
                experience in electrical and automation systems, with extensive
                expertise in PLC programming, HMI development, VSD programming,
                and Modbus communication. Recently completed an intensive IT
                bootcamp to expand skills in Java, JavaScript, React, Next.js,
                Spring Boot, and Docker. Proven ability to lead projects and
                collaborate with cross-functional teams to deliver high-quality
                solutions. Seeking to leverage both IT and automation expertise
                for innovative IoT development roles.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {professionalExperience.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Certifications & Professional Development
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{cert.title}</CardTitle>
                  <CardDescription>{cert.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {cert.description}
                  </p>
                  {cert.projects && (
                    <ul className="list-disc pl-6 space-y-2">
                      {cert.projects.map((project, i) => (
                        <li key={i} className="text-muted-foreground">
                          {project}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Programming Languages & IT</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.programming.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools & Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.tools.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Automation & Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.automation.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integration & Hardware</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    ...technicalSkills.integration,
                    ...technicalSkills.hardware,
                  ].map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <div className="flex flex-col space-y-4">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href="#">
                    <Mail className="w-6 h-6" />
                    iqbalya25@gmail.com
                  </a>
                </Button>
                <Separator />
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href="#">
                    <Phone className="w-6 h-6" />
                    +62-852-1006-7755
                  </a>
                </Button>
                <Separator />
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a href="https://instagram.com/iqballya">
                    <Instagram className="w-6 h-6" />
                    @iqballya
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
