import { useState } from "react";
import JobseekerForm from "./JobseekerForm";
import CompanyForm from "./CompanyForm";
import GoogleForm from "./GoogleForm";
import UserForm from "./UserForm";
import { Button } from "@mui/material";

// const steps = ["User Form", "Jobseeker Form", "Company Form", "Google Form"];

export default function RegisterForm() {
  const [activeStep, setActiveStep] = useState(0);
  //   const [isLoading, setIsloading] = useState(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <UserForm />;
      case 1:
        return <JobseekerForm />;
      case 2:
        return <CompanyForm />;
      case 3:
        return <GoogleForm />;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <>
      {getStepContent(activeStep)}
      <Button onClick={handleNext}>Selanjutnya</Button>
      <Button onClick={handleBack}>Kembali</Button>
    </>
  );
}
