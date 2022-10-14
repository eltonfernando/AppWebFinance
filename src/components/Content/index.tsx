import React from "react";
import { Container, Filters } from './styles';
import ContentHeader from './ContentHeader'
import SelectInput from "../SelectInput";
import HistoryCard from "../historyCard";
const ContentBase: React.FC = () => {
    const months = [{
        value: 7, label: "Julho"
    },
    { value: 8, label: "Agosto" }]

    const years = [
        { value: 2021, label: 2022 },
        { value: 2020, label: 2020 }
    ]

    return (
        <Container>
            <ContentHeader title="Elton" lineColor="#fff">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>
            <Filters>
                <button type="button"
                        className="tag-filter tag-filter-recurrent"
                    >
                    Recorrentes
                </button>
                <button type="button"
                        className="tag-filter tag-filter-eventual"
                    >
                    Eventuais
                </button>
            </Filters>

            <HistoryCard
                title="Elton"
                tagColor="#fff"
                amount="R$ 35,00"
                subTitle="12/09/2022"
            />
        </Container>
    )
}

export default ContentBase;