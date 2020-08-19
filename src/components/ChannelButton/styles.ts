import styled from 'styled-components';
import {Hashtag} from 'styled-icons/heroicons-outline';
import {PersonAdd} from 'styled-icons/ionicons-solid';
import {Settings} from 'styled-icons/feather';
export const Container = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    cursor: pointer;
    padding: 5px 0  ;
    border-radius: 5px;
    background-color: transparent;

    transition: .2s;

    > div{
        display: flex;
        align-items: center;

    }
    > div span {
        font-size: 15px;
        color: var(--senary);
        margin-left: 5px;

    }
    &.active,
    &:hover {
        background-color: var(--quinary);
        >div span {
            color: var(--white);
        }
        >div svg {
            display: inline;
        }
    }
`;
export const HashTagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color:var(--symbol);
`;
export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;
    cursor: pointer;
    color: var(--symbol);
    display:none;
    transition: color 0.2s;

    &:hover{ 
        color: var(--white);
    }
`;
export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;
    cursor: pointer;
    color: var(--symbol);
    display: none;
    transition: color 0.2s;
    margin-left: 5px;
    &:hover{ 
        color: var(--white);
    }
`;

