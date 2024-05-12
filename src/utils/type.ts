export interface Job {
  id: number;
  company: {
    name: string;
    city: string;
    logo: string;
  };
  title: string;
  description: string;
  employment_type: string;
  min_salary: string;
  max_salary: string;
  date_posted: string;
  gender: string;
  list_ability: string[];
  required_skills: string[];
}
