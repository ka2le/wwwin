import React from 'react';
import { Divider, Grid } from '@mui/material';
import MainPrompt from '../components/MainPrompt';
import RunButton from '../components/RunButton';
import Result from '../components/Result';
import Settings from '../components/Settings';
import Reset from '../components/Reset';
import ScenarioParts from '../components/ScenarioParts';
import RoundWinner from '../components/RoundWinner';
import Profile from '../components/Profile';
import CompetitionType from '../components/CompetitionType';
import AnimateButton from '../components/AnimateButton';
import ServerTest from '../components/ServerTest';
import GetTokenTest from '../components/GetTokenTest';
import DatabaseConnect from '../components/DatabaseConnect';
import RoomManager from '../components/RoomManager';
import RoomSync from '../components/RoomSync';

const HomePage = () => {
    return (
        <div className={`home-page`}>
             <Grid container spacing={2}>
                <Grid item xs={6} sm={3} order={{ xs: 1, sm: 1 }}>
                </Grid>
                <Grid item xs={12} sm={6} order={{ xs: 3, sm: 2 }}>
                   <RoomManager/>
                </Grid>
                <Grid item xs={6} sm={3} order={{ xs: 2, sm: 3 }}>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3} order={{ xs: 1, sm: 1 }}>
                    <Profile playerNumber={1} />
                </Grid>
                <Grid item xs={12} sm={6} order={{ xs: 3, sm: 2 }}>
                    <CompetitionType />
                    <RunButton />
                    
                    <RoundWinner />
                    <AnimateButton />
                    <RoomSync />
                    
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
                    <Settings />
                    <Reset />
                </Grid>
                <Grid item xs={12} sm={3} />
            </Grid>
        </div>
    );
};

export default HomePage;
