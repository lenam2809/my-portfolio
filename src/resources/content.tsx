import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "First",
  lastName: "Last",
  name: "First Last",
  role: "Role",
  avatar: "/images/avatar.jpg",
  email: "email@example.com",
  location: "Asia/Ho_Chi_Minh",
  languages: ["English", "Vietnamese"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to Newsletter</>,
  description: <>Newsletter Description</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Home Title",
  description: "Home Description",
  headline: <>Headline</>,
  subline: <>Subline</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Project
        </Text>
      </Row>
    ),
    href: "/work/project-01",
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About Title",
  description: "About Description",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Intro",
    description: <>Intro Description</>,
  },
  work: {
    display: true,
    title: "Work",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Technical",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog Title",
  description: "Blog Description",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Work Title",
  description: "Work Description",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery Title",
  description: "Gallery Description",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
