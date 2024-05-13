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
