import { useState } from "react";
import JobseekerForm from "./JobseekerForm";
import CompanyForm from "./CompanyForm";
import GoogleForm from "./GoogleForm";
import UserForm from "./UserForm";
import { Button, SelectChangeEvent } from "@mui/material";

// const steps = ["User Form", "Jobseeker Form", "Company Form", "Google Form"];

export default function RegisterForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [role, setRole] = useState("");

  const handleNext = () => {
    if (role == "Job Seeker") {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 2);
    }
  };

  const handleSelanjutnya = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <UserForm
            email={email}
            password={password}
            confirmPass={confirmPass}
            role={role}
            handleRoleChange={handleRoleChange}
            handleNext={handleNext}
          />
        ); //handleNext belum di adjust per-role
      case 1:
        return <JobseekerForm />;
      case 2:
        return <CompanyForm />;
      case 3:
        return (
          <GoogleForm
            role={role}
            handleRoleChange={handleRoleChange}
            handleNext={handleBack}
          />
        ); //handleBack belum di adjust per-role
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <>
      {getStepContent(activeStep)}
      <Button onClick={handleSelanjutnya}>Selanjutnya</Button>
      <Button onClick={handleBack}>Kembali</Button>
    </>
  );
}
