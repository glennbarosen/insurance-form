import { useState } from "react";

import { ArrowDownward } from "@mui/icons-material";
import {
  SxProps,
  Stack,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Typography,
  FormHelperText,
  Box,
  Button,
  Zoom,
  Theme,
} from "@mui/material";

import { isValidEpost } from "../../utils/isValidEpost";
import { isValidFodselsnummer } from "../../utils/isValidFodselsnummer";
import { isValidRegistreringsnummer } from "../../utils/isValidRegistreringsnummer";

const Form = (): JSX.Element => {
  const labelStyle: SxProps<Theme> = {
    color: "text.primary",
    fontSize: 20,
  };

  const defaultPrice = 100;
  const [price, setPrice] = useState<number | null>(null);
  const [fNr, setFnr] = useState("");
  const [validFnr, setValidFnr] = useState(true);
  const [regNr, setRegnr] = useState("");
  const [validRegnr, setValidRegnr] = useState(true);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bonus, setBonus] = useState<number | string>("");

  // Set validation states to avoid showing errors before the user is finished typing
  const validateFnr = () => {
    if (!fNr || isValidFodselsnummer(fNr)) {
      setValidFnr(true);
    } else {
      setValidFnr(false);
    }
  };

  const validateRegnr = () => {
    if (!regNr || isValidRegistreringsnummer(regNr)) {
      setValidRegnr(true);
    } else {
      setValidRegnr(false);
    }
  };

  const validateEmail = () => {
    if (!email || isValidEpost(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const clear = () => {
    setRegnr("");
    setBonus("");
    setFnr("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPrice(null);
    setValidRegnr(true);
    setValidFnr(true);
    setValidEmail(true);
  };

  const handleSumbit = (e: any) => {
    e.preventDefault();
    setPrice(defaultPrice * Number(bonus));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Reset field and scroll to top
  const handleReset = () => {
    clear();
    scrollToTop();
  };

  // Determine if the submit button should be disabled
  const isValidForm =
    regNr &&
    bonus &&
    fNr &&
    firstName &&
    lastName &&
    email &&
    validRegnr &&
    validFnr &&
    validEmail;

  return (
    <form onSubmit={(e) => handleSumbit(e)}>
      <Stack my={4} spacing={3}>
        <Stack>
          <InputLabel sx={labelStyle} htmlFor="regnr">
            Bilens registreringsnummer
          </InputLabel>
          <TextField
            aria-label="registreringsnummer"
            name="regnr"
            placeholder="E.g. AB 12345"
            value={regNr}
            onChange={(e) => setRegnr(e.target.value)}
            onBlur={validateRegnr}
            error={!validRegnr}
            helperText={!validRegnr ? "Ugyldig registreringsnummer" : undefined}
            sx={{ width: { xs: 0.9, sm: 0.4, lg: 300 } }}
            InputProps={{
              autoComplete: "off",
            }}
          />
        </Stack>
        <Stack>
          <InputLabel sx={labelStyle} htmlFor="bonus">
            Din bonus
          </InputLabel>

          <Select
            IconComponent={ArrowDownward}
            name="bonus"
            value={bonus}
            onChange={(e) => setBonus(e.target.value)}
            displayEmpty
            sx={{ width: { xs: 0.9, sm: 0.4, lg: 300 } }}
          >
            <MenuItem value="">
              <Typography color="GrayText">- Velg bonus -</Typography>
            </MenuItem>
            <MenuItem value={2}>God bonus</MenuItem>
            <MenuItem value={1.5}>Bedre bonus</MenuItem>
            <MenuItem value={1}>Best bonus</MenuItem>
          </Select>
          <FormHelperText>Velg en sykt god bonus.</FormHelperText>
        </Stack>
        <Stack>
          <InputLabel sx={labelStyle} htmlFor="fnr">
            Fødselsnummer
          </InputLabel>
          <TextField
            aria-label="fødselsnummer"
            name="fnr"
            placeholder="11 siffer"
            value={fNr}
            onChange={(e) => setFnr(e.target.value)}
            onBlur={validateFnr}
            error={!validFnr}
            helperText={!validFnr ? "Ugyldig fødselsnummer" : undefined}
            sx={{ width: { xs: 0.9, sm: 0.4, lg: 300 } }}
            InputProps={{
              autoComplete: "off",
            }}
          />
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: null, sm: 4 },
          }}
        >
          <Stack
            sx={{
              width: { xs: 0.9, sm: 0.4, lg: 300 },
              mb: { xs: 3, sm: null },
            }}
          >
            <InputLabel sx={labelStyle} htmlFor="firstName">
              Fornavn
            </InputLabel>
            <TextField
              aria-label="fornavn"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              InputProps={{
                autoComplete: "given-name",
              }}
            />
          </Stack>
          <Stack sx={{ width: { xs: 0.9, sm: 0.4, lg: 300 } }}>
            <InputLabel sx={labelStyle} htmlFor="lastName">
              Etternavn
            </InputLabel>
            <TextField
              aria-label="etternavn"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              InputProps={{
                autoComplete: "family-name",
              }}
            />
          </Stack>
        </Box>
        <Stack>
          <InputLabel sx={labelStyle} htmlFor="email">
            E-post
          </InputLabel>
          <TextField
            aria-label="epost"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            error={!validEmail}
            helperText={!validEmail ? "Ugyldig e-post" : undefined}
            type="text"
            InputProps={{
              autoComplete: "email",
            }}
            sx={{ width: { xs: 0.9, sm: 0.4, lg: 300 } }}
          />
        </Stack>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            aria-label="beregn pris"
            disabled={!isValidForm}
            variant="contained"
            sx={{ borderRadius: 100 }}
            type="submit"
          >
            Beregn pris
          </Button>
          <Button
            aria-label="avbryt"
            variant="outlined"
            sx={{ borderRadius: 100 }}
            onClick={handleReset}
          >
            Avbryt
          </Button>
        </Box>
      </Stack>
      {price ? (
        <Zoom in={true}>
          <Typography variant="h5" component="p" lineHeight={1}>
            Din pris: {price}
          </Typography>
        </Zoom>
      ) : undefined}
    </form>
  );
};

export default Form;
