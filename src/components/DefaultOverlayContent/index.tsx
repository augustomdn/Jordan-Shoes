import React from 'react'

import { Container, Heading, Buttons } from './styles'

interface Props {
    label: string
    description: string
}

export const DefaultOverlayContent: React.FC<Props> = ({
    label,
    description
}) => {
    return (
        <Container>
            <Heading>
                <h1>{label}</h1>
                <h2>{description}</h2>
            </Heading>

            <Buttons>
                <button>Fazer Pedido</button>
                <button className="white">Presentear</button>
            </Buttons>
        </Container>
    )
}

export default DefaultOverlayContent;