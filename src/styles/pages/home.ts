import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    section {
        background-color: ${props => props.theme.colors.backgroundLight};
        padding: 16px;
        border-radius: 8px;
        max-width: 600px;
    }

   


`