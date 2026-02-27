export interface PersonalData {
    name: string;
    role: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    duration: string;
    description: string;
    skills: string[];
}

export interface SkillGroup {
    category: string;
    items: string[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    tech: string[];
}

export interface CVData {
    personal: PersonalData;
    experience: Experience[];
    skills: SkillGroup[];
    projects: Project[];
}
