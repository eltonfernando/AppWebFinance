import React from "react";

import { Container,ToggeSelector,ToggleLabel } from "./styled";


const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light </ToggleLabel>
        <ToggeSelector
            checked
            uncheckedIcon={false}
            checkedIcon= {false}
            onChange={() => console.log("moudl")}
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)
export default Toggle;