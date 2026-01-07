import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
export default function Home() {




    return (
        <>
            <h1>Galvenā lapa</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 4, md: 2 }}>
                        <>Saturs</>
                    </Grid>
                    <Grid size={{ xs: 4, md: 8 }}>
                        <>Saturs</>
                    </Grid>
                    <Grid size={{ xs: 4, md: 2 }}>
                        <>Saturs</>
                    </Grid>
                </Grid>
            </Box>



        </>

    )

}