import React from "react";
import { ProductInterface } from "../../pages";
import { ContainerCard, ImageCard, TitlePrice, TitleProduct, IconFav } from "./styles";
import { Grid, Tooltip, IconButton } from "@mui/material";
import { formatNumberToMoney } from "../../functions/basic";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButtonTooltip from "../buttons/IconButtonTooltip";

const ProductCard = ({
    id = 0,
    name = "",
    imageURL = "",
    listPrice = [],
    salePrice = "",
    favorite = false,
    handleFavorite = () => { },
    key,
}: ProductInterface) => {
    return (
        <Grid item xs={2} sm={4} md={4} key={key} >
            <ContainerCard>
                <IconFav>
                    <IconButtonTooltip
                        tooltipTitle={favorite ? "Desfavoritar" : "Favoritar"}
                        onClick={handleFavorite}
                    >
                        {favorite ?
                            <FavoriteIcon fontSize="small" />
                            :
                            <FavoriteBorderIcon fontSize="small" />
                        }
                    </IconButtonTooltip>
                </IconFav>

                <ImageCard src={imageURL} alt={name} />

                <TitleProduct>{name}</TitleProduct>
                <TitlePrice>{formatNumberToMoney(Number(salePrice))}</TitlePrice>
            </ContainerCard>
        </Grid>
    )
}

export default ProductCard;