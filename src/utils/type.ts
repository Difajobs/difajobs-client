export interface Job {
  id: number;
  company_id: number;
  company: {
    name: string;
    city: string;
    logo: string;
  };
  title: string;
  description: string;
  employment_type: string;
  min_salary: number;
  max_salary: number;
  date_posted: string;
  gender: string;
  list_ability: string[];
  required_skills: string[];
}

export interface JobApplication {
  id: number;
  job_seeker_id: number;
  job_id: number;
  company_id: number;
  status: string;
  cover_letter: string;
  job: {
    title: string;
    description: string;
    employment_type: string;
    min_salary: number;
    max_salary: number;
    date_posted: string;
    company: {
      name: string;
      city: string;
      logo: string;
    };
  }
}