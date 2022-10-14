import React from "react";
import { Container,Tag } from "./styled";

interface IHistoryCardProps {
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string;

}

const HistoryCard: React.FC<IHistoryCardProps> = ({
    tagColor,
    title,
    subTitle,
    amount
}) => {

    return(
        <Container>
            <Tag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subTitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    )
}
export default HistoryCard;