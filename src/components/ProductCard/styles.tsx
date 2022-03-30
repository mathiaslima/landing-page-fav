import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    color: ${props => props.theme.colors.textDark};
    min-height: 200px;
    position: relative;
`;

export const TitleProduct = styled.span`
    font-size: 14px;
    text-align: center;
    margin-bottom: 4px;
`;

export const TitlePrice = styled.span`
    font-size: 15px;
    color: #000;
    font-weight: 700;
    text-transform: initial;
    text-align: center;
`;

export const ImageCard = styled.img`
    border-radius: 8px;
    margin-bottom: 8px;
`

export const IconFav = styled.div`
    position: absolute;
    right: 8px;
`