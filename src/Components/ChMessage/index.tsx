import {FC, useEffect, useState} from 'react'
import styled from 'styled-components'

export interface IChMessage {
    /**
     * Visible of Message
     */
    visible?: boolean
    /**
     * Custom class name for button
     */
    className?: string
    /*
    * mode for style message
    * */
    mode?: 'success' | 'error' | 'warning' | 'info'
    /*
    * Message
    * */
    message?: string
    /**
     * TODO: Need to finish :)
     * Set the distance of current position
     * Example [-90, 15]
     */
    offset?: number[]
    /*
    * Time for disappearance in ms. Default - 1000 ms
    * */
    delay?: string | number
    /*
    * Action for change state visible
    * */
    changeVisible?: (visible: boolean) => void
}

const colors = {
    success: '#248600',
    error: '#e5063a',
    warning: '#f90',
    info: '#000000',
}

const backgroundColors = {
    success: '#165305',
    error: '#b0032b',
    warning: '#824f00',
    info: '#cccccc',
}

const StyledChMessage = styled.div`
    width: 150px;
    height: 60px;
    background-color: ${(props: IChMessage) => props.mode && backgroundColors[props.mode]};
    color: ${(props: IChMessage) => props.mode && colors[props.mode]};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`

const ChMessage: FC<IChMessage> = ({
    mode = 'info',
    message = 'This is message',
    className = '',
    delay = 1000,
    visible= false,
    changeVisible
}) => {
    const [visibleState, setVisibleState] = useState(false)

    const onClose = (): void => {
        if (changeVisible) {
            changeVisible(visible)
        }
    }

    useEffect(() => {
        setVisibleState(visible)

       if (visible && +delay){
            setTimeout(() => {
                onClose()
            }, +delay)
        }

    }, [visible]);

    return (
        <>
            {visibleState && <StyledChMessage
                className={['ch-message',
                    `${className}`,
                    `ch-message-${mode}`]
                    .join(' ')}
                mode={mode}
            >
                {message}
            </StyledChMessage>}
        </>
    )
}

export default ChMessage
