import { ChangeEvent, useState } from "react";
import JobseekerForm from "./JobseekerForm";
import CompanyForm from "./CompanyForm";
import UserForm from "./UserForm";
import DisabilityForm from "./DisabilityForm";
import { Box, Button, SelectChangeEvent } from "@mui/material";

// const steps = ["User Form", "Jobseeker Form", "Company Form"];

export default function RegisterForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [role, setRole] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [kota, setKota] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [disabilitas, setDisabilitas] = useState<number[]>([]);

  const handleNext = () => {
    if (role == "job seeker") {
      if (activeStep == 2) {
        setActiveStep(activeStep + 1);
      } else {
        setActiveStep(activeStep + 2);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  console.log(activeStep);

  const handleBack = () => {
    if (role == "job seeker") {
      if (activeStep == 3) {
        setActiveStep(activeStep - 1);
      } else {
        setActiveStep(activeStep - 2);
      }
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSelanjutnya = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack2 = () => {
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
      case "dob":
        setDob(value);
        break;
      case "nomorTelepon":
        setNomorTelepon(value);
        break;
      case "kota":
        setKota(value);
        break;
      case "deskripsi":
        setDeskripsi(value);
        break;
    }
  };

  const handleRoleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  const handleDisability = (value: number, checked: boolean) => {
    if (checked) {
      setDisabilitas((prev) => [...prev, value]);
    } else {
      setDisabilitas((prev) =>
        prev.filter((disability) => disability !== value)
      );
    }
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
          <CompanyForm
            namaLengkap={namaLengkap}
            kota={kota}
            deskripsi={deskripsi}
            handleInputChange={handleInputChange}
            handleRegister={handleRegisterJobseeker}
            handleBack={handleBack}
          /> //handleRegister belum diadjust
        );
      case 2:
        return (
          <JobseekerForm
            namaLengkap={namaLengkap}
            gender={gender}
            dob={dob}
            nomorTelepon={nomorTelepon}
            kota={kota}
            disabilitas={disabilitas}
            handleInputChange={handleInputChange}
            handleGenderChange={handleGenderChange}
            handleDisability={handleDisability}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );

      case 3:
        return (
          <DisabilityForm
            handleNext={handleRegisterJobseeker}
            handleBack={handleBack}
          />
        );
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
        <Button onClick={handleBack2}>Kembali</Button>
      </Box>
    </>
  );
}
