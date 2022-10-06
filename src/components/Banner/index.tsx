import { Button } from "components/Button"
import {Container, Content, ButtonContainer} from "./styles"

type IBannerProps = {
    url: string;
    imageUrl: string;
    description: string;
    title: string;
}

const imgSrc = "https://i.imgur.com/zaYPAdf.png"

const Banner = ({url, imageUrl, title, description}: IBannerProps) => {
    return ( <Container imageUrl={imageUrl}>
        <Content>
            <h1>{title}</h1>
            <span>{description}</span>
            <ButtonContainer>
                <Button>
                    Assistir agora
                </Button>
            </ButtonContainer>
        </Content>
        </Container>)
}

export { Banner }