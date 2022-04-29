import React, { useEffect } from 'react';
import './App.css';
import UseForm from './Hooks/hooks';
import {
  FormControl, Grid,
  MenuItem, Select, TextField,
  SelectChangeEvent, Button, TableContainer,
  TableHead, Table, TableRow,
  TableCell, TableBody, Paper,
  Typography
} from '@mui/material';
function App() {
  const [opera, setOpera] = React.useState('');
  const [submit, setSubmit] = React.useState(false);
  const [suma, setSuma] = React.useState('');
  const [ciudad, setCiudad] = React.useState({
    Bogota: "",
    Cali: "",
    Medellin: "",
    Neiva: "",
  });
  const ocultar = true || "no";
  console.log(ocultar)
  const handleChange1 = (event: SelectChangeEvent) => {
    setOpera(event.target.value);
  };
  const [values, handleChange, reset] = UseForm({
    numero1: '',
    numero2: '',
    resultado: '',
  });
  const data = values.resultado;
  const Operacion = () => {
    if (values.numero1 === '') {
      values.numero1 = 1
    } else if (values.numero2 === '') {
      values.numero2 = 1
    }
    if (opera === '1') {
      values.resultado = parseInt(values.numero1) + parseInt(values.numero2);

    } else if (opera === '2') {
      values.resultado = parseInt(values.numero1) - parseInt(values.numero2);
    } else if (opera === '3') {
      values.resultado = parseInt(values.numero1) / parseInt(values.numero2);
    } else if (opera === '4') {
      values.resultado = parseInt(values.numero1) * parseInt(values.numero2);
    }
    setSubmit(true);
    setSuma(values.resultado);
  };

  const OrdenarArray = () => {
    const arrayDeNumeros = [[1, 2], [3, 4], [5, 6]];
    const arry = arrayDeNumeros[0];
    const arry1 = arrayDeNumeros[1];
    const arry3 = arrayDeNumeros[2];
    const arrayun = arry.concat(arry1, arry3)
    alert(`El array combinado es ${arrayun}`)
  };

  const Ciudad = () => {
    const listaCiudades = ["Bogota", "Cali", "Bogota", "Medellin", "Bogota", "Medellin", "Bogota", "Cali", "Bogota", "Neiva", "Bogota", "Cali", "Bogota", "Medellin"];
    var count: any = {}
    listaCiudades.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
    setCiudad({ ...count })
  };


  return (
    <>
      <Grid container className="App" >
        <Grid lg={6}>
          <h5>a.	Hacer función que reciba los 2 números y una operación a realizar (-+/*), si alguno de los 2 números no es pasado a la función por defecto debe ser 1.</h5>
        </Grid>
        <Grid item lg={6} style={{ justifyContent: "center", display: "center" }}>
          <Grid container>
            <Grid item lg={3} className="CentrarTodo">
              <TextField id="outlined-basic" label="número" variant="outlined"
                inputProps={{
                  maxLength: 10,
                  pattern: "[0-9]{0,13}",
                }}
                name="numero1"
                value={values.numero1}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={3} className="CentrarTodo">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={opera}
                  label="Operación"
                  onChange={handleChange1}
                >
                  <MenuItem value="">
                    <em>Ninguna</em>
                  </MenuItem>
                  <MenuItem value={'1'}>Suma (+)</MenuItem>
                  <MenuItem value={'2'}>Resta (-)</MenuItem>
                  <MenuItem value={'3'}>Divición (/)</MenuItem>
                  <MenuItem value={'4'}>Multiplicación (*)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={3} className="CentrarTodo">
              <TextField id="outlined-basic" label="número" variant="outlined"
                inputProps={{
                  maxLength: 10,
                  pattern: "[0-9]{0,13}",
                }}
                name="numero2"
                value={values.numero2}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={3} className="CentrarTodo">
              <Button variant="contained" disableElevation onClick={() => Operacion()}>
                Resolver solución
              </Button>
            </Grid>
            {submit && (
              <Grid item lg={12}>
                <Typography >
                  {suma}
                </Typography>
              </Grid>
            )}
          </Grid>

        </Grid>

      </Grid>
      <Grid container className="App" >
        <Grid lg={6}>
          <h5>b.Escribir una función que muestre las 5 ciudades, que más se repiten en el siguiente array, de manera que aparezca en primer lugar la ciudad más repetida hasta la menos repetida.</h5>
        </Grid>
        <Grid item lg={6} className="Centrar">
          <Button variant="contained" disableElevation onClick={() => Ciudad()}>
            Traer ciudad
          </Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Ciudad </TableCell>
                  <TableCell>Cantidad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    Bogotá
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {ciudad.Bogota}
                  </TableCell>

                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    Cali
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {ciudad.Cali}
                  </TableCell>

                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    Medellin
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {ciudad.Medellin}
                  </TableCell>

                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    Neiva
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {ciudad.Neiva}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container className="App" >
        <Grid lg={6}>
          <h5>c.	Del siguiente array: const arrayDeNumeros = [[1, 2], [3, 4], [5, 6]]; retorne un array unificado ejemplo: [1, 2, 3, 4, 5, 6]</h5>
        </Grid>
        <Grid item lg={6} style={{ justifyContent: "center", display: "center" }}>
          <Button variant="contained" disableElevation onClick={() => OrdenarArray()}>
            Ordenar array
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
