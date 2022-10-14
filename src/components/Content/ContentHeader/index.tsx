import React from "react";
import SelectInput from "./../../SelectInput"
import {Container,
        TitleContent,
        Controller,        
        } from './styles'

interface IContentHeaderProps  {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({title,lineColor,children}) => {

    return(
        <Container >
            <TitleContent lineColor ={lineColor}>
               <h1>{title}</h1>
            </TitleContent>
            <Controller>
               {children}
            </Controller>
        </Container>
    )

}

export default ContentHeader;