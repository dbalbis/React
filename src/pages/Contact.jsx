import { Container } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import '../styles/_Contact.scss';

const Contact = () => {
  return (
    <Container fixed className="contactContainer">
      <h1>Contacto</h1>
      <form>
        <TextField
          name="name"
          placeholder="Ingresa tu nombre"
          margin="normal"
          fullWidth
          required
          label="Nombre"
          id="name"
        />
        <TextField
          name="apellido"
          placeholder="Ingresa tu apellido"
          margin="normal"
          fullWidth
          label="Apellido"
          id="apellido"
        />

        <TextField
          name="email"
          placeholder="Ingresa tu Email"
          margin="normal"
          type="email"
          fullWidth
          required
          label="Email"
          id="email"
        />

        <TextField
          name="mensaje"
          placeholder="Mensaje"
          margin="normal"
          type="text"
          fullWidth
          rows={8}
          required
          multiline
          label="Mensaje"
          id="mensaje"
        />

        <Button
          type="submit"
          value="submit"
          margin="normal"
          variant="contained"
          color="success"
          width="100%"
        >
          ENVIAR
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
