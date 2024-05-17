import { Box, Button, TextField, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.scss";
import difaJobsLogo from "../../assets/images/difajobs-dark.webp";
import { login } from "../../utils/fetchApi";

export default function LoginForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const response = await login(values);
        localStorage.setItem("token", response.token);
        navigate("/dashboard");
      } catch (error) {
        setFieldError("email", "Invalid email or password");
        setFieldError("password", "Invalid email or password");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Box className={styles.formContainer}>
      <img
        src={difaJobsLogo}
        alt="Difa Jobs Logo"
        className={styles.difaJobsLogo}
      />
      <form onSubmit={formik.handleSubmit} className={styles.inputForm}>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Email</Typography>
          <TextField
            autoComplete="off"
            className={styles.inputField}
            variant="outlined"
            type="email"
            {...formik.getFieldProps("email")}
            InputProps={{
              style: {
                borderRadius: "20px",
                height: "52px",
                padding: "0px 5px",
              },
            }}
          />
          {formik.touched.email && formik.errors.email && (
            <Typography className={styles.errorMsg}>
              {formik.errors.email}
            </Typography>
          )}
        </Box>
        <Box className={styles.inputBox}>
          <Typography className={styles.inputLabel}>Password</Typography>
          <TextField
            autoComplete="off"
            className={styles.inputField}
            variant="outlined"
            type="password"
            {...formik.getFieldProps("password")}
            InputProps={{
              style: {
                borderRadius: "20px",
                height: "52px",
                padding: "0px 5px",
              },
            }}
          />
          {formik.touched.password && formik.errors.password && (
            <Typography className={styles.errorMsg}>
              {formik.errors.password}
            </Typography>
          )}
        </Box>
        <Box className={styles.buttonBox}>
          <Button
            className={styles.button}
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Masuk"
            )}
          </Button>
          <Typography className={styles.registerText}>
            Belum punya akun?{" "}
            <Link to="/register" className={styles.registerLink}>
              Daftar disini
            </Link>
          </Typography>
          <Typography className={styles.registerText}>
            Akun anda belum terverifikasi?
          </Typography>
          <Link to="/verification" className={styles.registerLink}>
            Verifikasi disini
          </Link>
        </Box>
      </form>
    </Box>
  );
}
