import React from 'react'
import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container, Spacer } from './styles'
import UniqueOverlay from '../UniqueOverlay';

export const Page: React.FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <div>
                    {[
                        'Travis Scott x Air Jordan 1 Low Reverse Mocha',
                        'Modelo Um',
                        'Modelo Dois',
                        'Modelo Três',
                        'Modelo Quatro',
                        'Modelo Cinco',
                        'Modelo Seis'
                    ].map(modelName => (
                        <ModelSection
                            key={modelName}
                            className="colored"
                            modelName={modelName}
                            overlayNode={
                                <DefaultOverlayContent
                                    label={modelName}
                                    description="Disponível para entrega"
                                />
                            }
                        />
                    ))}
                </div>

                <Spacer>

                </Spacer>

                <UniqueOverlay/>
            </ModelsWrapper>
        </Container>
    )
}

export default Page;