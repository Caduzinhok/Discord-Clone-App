import styled from 'styled-components';
import { Add } from 'styled-icons/ionicons-sharp';

export const Container = styled.div`
    grid-area: CL;
    display: flex;
    flex-direction: column;

    padding: 0 24px;
    background-color: var(--secondary);
`;
export const Category = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 6px;
    padding: 6px 0;
    >span{
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
`;
export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height:21px;
    color:var(--symbol);
    cursor: pointer;

`;