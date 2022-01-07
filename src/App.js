import React from 'react';
import Declaration from './components/Declaration';
import Education from './components/Education';
import Head from './components/head';
import Project from './components/Project';
import Skill from './components/Skill';



const App = () => {
    return (
       <>
        <Head/>
        <Project/>
        <Education/>
        <Skill/>
        <Declaration/>
       </>
    )
}

export default App
