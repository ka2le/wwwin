import React from 'react';
import { Grid } from '@mui/material';
import SampleComponent from '../components/SampleComponent';
import MainPrompt from '../components/MainPrompt';
import RunButton from '../components/RunButton';
import Result from '../components/Result';
import SettingsComponent from '../components/SettingsComponent';

const HomePage = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3} />
                <Grid item xs={12} sm={3}>
                    <MainPrompt />
                    <RunButton />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Result />
                </Grid>
                <Grid item xs={12} sm={3} />
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3} />
                <Grid item xs={12} sm={6}>
                    <SettingsComponent />
                </Grid>
                <Grid item xs={12} sm={3} />
            </Grid>
        </>
    );
};

export default HomePage;
