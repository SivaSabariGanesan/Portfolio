import { Code2, Brain, Database, Server, Globe, Terminal } from 'lucide-react';

export const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    items: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
    ]
  },
  {
    category: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 65 },
    ]
  },
  {
    category: 'Database',
    icon: Database,
    items: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 70 },
    ]
  },
  {
    category: 'DevOps',
    icon: Terminal,
    items: [
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 75 },
    ]
  }
];