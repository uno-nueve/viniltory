import styled from "styled-components";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { Button, ButtonIcon } from "../components/ui/Button";
import { Link } from "react-router";
import { ArrowNarrowRight } from "../components/ui/svgs";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { FlexContainer } from "../components/ui/FlexContainer";
import { useTitle } from "../hooks/useTitle";
import { Heading1, Heading2 } from "../components/ui/Text";
import { DisplayCol, ImageCol } from "../components/ui/LayoutWrapper";

const GridLayout = styled(GridColsWrapper)`
    @media (max-width: 768px) {
        grid-template-columns: minmax(0, 1fr);
    }
`;

const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: end;
`;

const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Home = () => {
    const user = useContext(UserContext);
    useTitle("Viniltory");
    return (
        <FlexContainer h="calc(100vh - 80px)">
            <GridLayout cols="repeat(2, minmax(0, 1fr))">
                <ImageCol>
                    <BgImage
                        src="https://images.unsplash.com/photo-1653560418645-ae0083c0f83e?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="abstract blob"
                    />
                </ImageCol>
                <DisplayCol>
                    <FlexContainer gap="1rem" items="flex-end" w="100%" column>
                        <Heading1>Tu música. Por siempre</Heading1>
                        <Heading2>Comprá una vez, descargá las que quieras</Heading2>
                    </FlexContainer>
                    {user ? (
                        <StyledLink to="/dashboard">
                            <Button size="1.25rem" maxw="320px  " justify="space-between">
                                Dashboard
                                <ButtonIcon>
                                    <ArrowNarrowRight />
                                </ButtonIcon>
                            </Button>
                        </StyledLink>
                    ) : (
                        <StyledLink to="/albums">
                            <Button size="1.25rem" maxw="320px  " justify="space-between">
                                Comprar
                                <ButtonIcon>
                                    <ArrowNarrowRight />
                                </ButtonIcon>
                            </Button>
                        </StyledLink>
                    )}
                </DisplayCol>
            </GridLayout>
        </FlexContainer>
    );
};
