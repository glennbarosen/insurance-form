import { Container } from "@mui/material";

import { PageDescription } from "./components/PageDescription";
import { Form } from "./components/Form";

const App = (): JSX.Element => {
  return (
    <Container maxWidth="md">
      <PageDescription
        title="Kjøp Bilforsikring"
        description="Det er fire forskjellige forsikringer å velge mellom.
Ansvarsforsikring er
 lovpålagt om kjøretøyet er registrert og skal
brukes på veien. I tillegg kan
 du utvide forsikringen avhengig av
hvor gammel bilen din er og hvordan
 du bruker den."
      />
      <Form />
    </Container>
  );
};

export default App;
