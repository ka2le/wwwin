import React from 'react';
import { Button } from '@mui/material';
import  useCallApi  from '../hooks/useCallLLM';  // Adjust path as necessary

const RunButton = () => {
    const callApi = useCallApi();

    return (
        <Button fullWidth variant="contained" color="primary" onClick={callApi}>
            Run
        </Button>
    );
};

export default RunButton;
