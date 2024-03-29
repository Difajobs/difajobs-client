import { ChangeEvent, useState } from "react";
import JobseekerForm from "./JobseekerForm";
import CompanyForm from "./CompanyForm";
import GoogleForm from "./GoogleForm";
import UserForm from "./UserForm";
import { Box, Button, SelectChangeEvent } from "@mui/material";

// const steps = ["User Form", "Jobseeker Form", "Company Form", "Google Form"];

export default function RegisterForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [role, setRole] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [kota, setKota] = useState("");

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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPass":
        setConfirmPass(value);
        break;
      case "namaLengkap":
        setNamaLengkap(value);
        break;
      case "nomorTelepon":
        setNomorTelepon(value);
        break;
      case "kota":
        setKota(value);
        break;
    }
  };

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  const handleRegisterJobseeker = async () => {
    //belum try catch, belum direfactor, belum hit 2 endpoint
    const response = await fetch("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPass: confirmPass,
        role: role,
      }),
    });
    const data = await response.json();
    console.log(data);
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
            handleInputChange={handleInputChange}
          />
        ); //handleNext belum di adjust per-role
      case 1:
        return (
          <JobseekerForm
            namaLengkap={namaLengkap}
            nomorTelepon={nomorTelepon}
            kota={kota}
            handleRegister={handleRegisterJobseeker}
          />
        );
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
      <Box sx={{ display: "flex" }}>
        {/* temporary next and back button */}
        <Button onClick={handleSelanjutnya}>Selanjutnya</Button>
        <Button onClick={handleBack}>Kembali</Button>
      </Box>
    </>
  );
}
