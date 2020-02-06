import React from 'react';
import GiphyApp from './GiphyApp';
import { useParams } from 'react-router-dom';

function GiphyAppWrapper() {
    const { tag } = useParams();
    return (
        <GiphyApp tag={tag} />
    )
}

export default GiphyAppWrapper;