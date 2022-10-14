import styled from "styled-components";

export const GridLayout = styled.div `
    display: grid;
    /**
    * Layout
    * MH Main Header
    * AS = Aside
    * CT = Content
     */
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;
    grid-template-areas:
    'AS MH'
    'AS CT';
    height: 100vh;

`;