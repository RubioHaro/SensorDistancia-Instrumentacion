import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { Straighten } from '@mui/icons-material';
import { Button } from '@mui/material';
// import { fontSize } from '@mui/system';
import { bintodec, calculo } from './../lib/main';

export default function InputSlider() {
    // create a react state variable
    const [distance, setDistance] = React.useState(0);
    const [vres, setVres] = React.useState(0);
    const [vsal, setVsal] = React.useState(0);
    const [vsen, setVsen] = React.useState(0);
    const [rsen, setRsen] = React.useState(0);
    const [distanciaCaculada, setDistanciaCaculada] = React.useState(0);
    
    const [showDetails, changeShowDetails] = React.useState(false);


    const updateDistance = (event) => {
        // remove the last 2 characters and the first 1 character, the characters are generated by the server.
        let parsed_string = event.data.slice(1, -3);
        console.log("event data:" + parsed_string);

        let parsed_value = bintodec(parsed_string) / 100; // PROBABLEMENTE HAY QUE CAMBIAR ESTO!!!!!!!!!!1
        
        if (parsed_value >= 0 && parsed_value <= 4) {
            setDistance(parsed_value);
            console.log("actualizando valores de detalles");
            let calculos = calculo(parsed_string);
            console.log(calculos);
            setVres(calculos[0]);
            setVsal(calculos[1]);
            setVsen(calculos[2]);
            setRsen(calculos[3]);
            setDistanciaCaculada(calculos[4]);

        }
    }

    function handleDetails() {
        changeShowDetails(!showDetails);
        let buttonDetails = document.getElementById('buttonDetails');
        buttonDetails.innerHTML = showDetails ? 'Ver Detalles' : 'Ocultar detalles';
    }
    // create a react effect to subscribe to the server-sent events
    React.useEffect(() => {
        const sse = new EventSource("http://localhost:5000/stream");
        sse.onmessage = updateDistance;
    }, []);

    return (
        <Box style={{ "width": "80%", "fontSize": "7em" }}>
            <Grid item>
                {distance}
                <label style={{ "fontSize": "0.2em" }} >cm</label>
            </Grid>
            <Typography id="input-slider" style={{ "fontSize": "0.2em" }} gutterBottom>
                <Grid item>
                    <Straighten style={{ "fontSize": "1.5em" }} />
                </Grid>
                <Grid item>
                    <Button id='buttonDetails' onClick={handleDetails}>ver detalles</Button>
                    <div id='detalles'>
                        {showDetails &&
                            <h5>
                                Voltaje Resolucion: {vres} V <br />
                                Voltaje de Salida: {vsal} V <br />
                                Voltaje del Sensor: {vsen} V <br />
                                Resistencia del Sensor: {rsen} ohms <br />
                                Distancia Calculada: {distanciaCaculada} cm <br />
                            </h5>
                        }
                    </div>
                </Grid>
            </Typography>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Slider
                        value={typeof distance === 'number' ? distance : 0}
                        aria-labelledby="input-slider"
                        color="secondary"
                        step={0.1}
                        max={4}
                    />
                </Grid>

            </Grid>
        </Box>
    );
}