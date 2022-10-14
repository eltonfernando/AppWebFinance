
import {Container} from './styled'

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

const SelectInput: React.FC<ISelectInputProps> = ({options}) => {
    return (
        <Container>
            <select>
                {
                    options.map((option ,i) =>(
                        <option key = {i} value={option.value}>{option.label} </option>
                    ))
                }
   
            </select>
        </Container>
    )
}
export default SelectInput;