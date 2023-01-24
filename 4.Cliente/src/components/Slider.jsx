import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { Lightbulb, DeviceThermostat, Scale } from '@mui/icons-material';

export default function InputSlider({ unit , value}) {
    
    let icon = <Scale style={{ "fontSize": "1.5em" }} />
    if (unit === "l") {
        icon = <Lightbulb style={{ "fontSize": "1.5em" }} />
    } if (unit === "°C") {
        icon = <DeviceThermostat style={{ "fontSize": "1.5em" }} />
    } 
    return (
        <Box style={{ "width": "80%", "fontSize": "7em" }}>
            <Grid item>
                {value}
                <label style={{ "fontSize": "0.2em" }} >{unit}</label>
            </Grid>
            <Typography id="input-slider" style={{ "fontSize": "0.2em" }} gutterBottom>
                <Grid item>
                {icon}
                </Grid>
            </Typography>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Slider
                        value={value}
                        aria-labelledby="input-slider"
                        color="secondary"
                        step={0.1}
                        max={4}
                        min={0}
                    />
                </Grid>

            </Grid>
        </Box>
    );
}