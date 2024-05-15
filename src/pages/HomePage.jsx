import React from 'react';
import { Divider, Grid } from '@mui/material';
import MainPrompt from '../components/MainPrompt';
import RunButton from '../components/RunButton';
import Result from '../components/Result';
import SettingsComponent from '../components/SettingsComponent';
import ClearButton from '../components/ClearButton';
import ScenarioParts from '../components/ScenarioParts';
import RoundWinner from '../components/RoundWinner';
import Profile from '../components/Profile';
import CompetitionType from '../components/CompetitionType';
import AnimateButton from '../components/AnimateButton';

const HomePage = () => {
    return (
        <div className={`home-page`}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3} order={{ xs: 1, sm: 1 }}>
                    <Profile playerNumber={1} />
                </Grid>
                <Grid item xs={12} sm={6} order={{ xs: 3, sm: 2 }}>
                    <CompetitionType />
                    <RunButton />
                    
                    <RoundWinner />
                    <AnimateButton />
                </Grid>
                <Grid item xs={6} sm={3} order={{ xs: 2, sm: 3 }}>
                    <Profile playerNumber={2} />
                </Grid>
            </Grid>
        <Divider style={{ margin: '20px 0' }} />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3} >
                    <ScenarioParts />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <MainPrompt />
                    <RunButton />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Result />
                </Grid>
                <Grid item xs={12} sm={1} >
                    <RoundWinner />
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={3} />
                <Grid item xs={12} sm={6}>
                    <SettingsComponent />
                    <ClearButton />
                </Grid>
                <Grid item xs={12} sm={3} />
            </Grid>
        </div>
    );
};

export default HomePage;
