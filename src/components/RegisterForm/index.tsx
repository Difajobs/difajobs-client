import { ChangeEvent, useEffect, useState } from "react";
import JobseekerForm from "./JobseekerForm";
import CompanyForm from "./CompanyForm";
import UserForm from "./UserForm";
import DisabilityForm from "./DisabilityForm";
import { Box, SelectChangeEvent, Alert, Stack } from "@mui/material";
import {
  registerRecruiter,
  registerJobseeker,
  getDisability,
} from "../../utils/fetchApi";
import { useNavigate } from "react-router-dom";

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
  const [deskripsiList, setDeskripsiList] = useState("");
  const [disabilitas, setDisabilitas] = useState<number[]>([]);
  const [disabilitasList, setDisabilitasList] = useState<number[]>([]);
  const [disabilityData, setDisabilityData] = useState([]);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (alertMessage || errorMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
        setErrorMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage, errorMessage]);
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
      case "deskripsiList":
        setDeskripsiList(value);
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
      setDisabilitas(prev => [...prev, value]);
    } else {
      setDisabilitas(prev => prev.filter(disability => disability !== value));
    }
  };

  const handleDisabilityList = (id: number, checked: boolean) => {
    if (checked) {
      setDisabilitasList(prev => [...prev, id]);
    } else {
      setDisabilitasList(prev => prev.filter(disability => disability !== id));
    }
  };

  const handleGetDisability = async () => {
    try {
      const value = {
        category_id: disabilitas,
      };
      const response = await getDisability(value);
      const list = response.data;
      setDisabilityData(list);
    } catch (error) {
      console.error("Error:", error);
      alert("gagal mengontak endpoint");
    } finally {
      setTimeout(() => {
        setActiveStep(activeStep + 1);
      }, 2000);
    }
  };

  const handleRegisterJobseeker = async () => {
    try {
      const phoneNumber = "+62" + nomorTelepon;
      const value = {
        email: email,
        password: password,
        role: role,
        fullname: namaLengkap,
        dob: dob,
        gender: gender,
        phone_number: phoneNumber,
        city: kota,
        disability_id: disabilitasList,
        description: deskripsiList,
      };
      await registerJobseeker(value);
      setAlertMessage("Register Berhasil, mengalikan ke halaman verifikasi email")
      setTimeout(() => {
        navigate("/verification", { replace: true });
      }, 5000);
    } catch (error) {
      setAlertMessage("Register Berhasil, mengalikan ke halaman verifikasi email")
      setTimeout(() => {
        navigate("/verification", { replace: true });
      }, 5000);
    }
  };

  const handleRegisterRecruiter = async () => {
    try {
      const value = {
        email: email,
        password: password,
        role: role,
        name: namaLengkap,
        city: kota,
        about: deskripsi,
        // logo: logo,
        // picture: picture,
      };
      const response = await registerRecruiter(value);
      if (response?.ok) {
        setAlertMessage("Register Berhasil, mengalikan ke halaman verifikasi email")
        setTimeout(() => {
          navigate("/verification", { replace: true });
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Register Gagal, mohon ulangi kembali")
    }
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
            handleRegister={handleRegisterRecruiter}
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
            handleNext={handleGetDisability}
            handleBack={handleBack}
          />
        );

      case 3:
        return (
          <DisabilityForm
            disabilitas={disabilitasList}
            disabilityData={disabilityData}
            deskripsiList={deskripsiList}
            handleDisability={handleDisabilityList}
            handleInputChange={handleInputChange}
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
      </Box>
      <Stack>
        {alertMessage && (
          <Alert variant="outlined" severity="success">
            {alertMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert variant="outlined" severity="error">
            {errorMessage}
          </Alert>
        )}
      </Stack>
    </>
  );
}