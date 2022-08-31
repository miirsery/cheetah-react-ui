import React, { FC } from "react"
import styled from 'styled-components'

interface IMode {
    mode: 'primary' | 'danger' | 'success'
}

export interface IChButton {
    /**
     * Custom class name for button
     */
    className?: string
    /**
     * Custom name for button
     */
    label?: string
    /*
    * Disabled button
    * */
    disabled?: boolean
    /*
    * Handler
    * */
    onClick?: () => void
    /*
    * Mode for button. primary or danger or success
    * */
    mode: 'primary' | 'danger' | 'success'
}

const StyledChButton = styled.button`
  display: block;
  padding: 8px 12px;
  background-color: ${(props: IChButton) => props.mode === 'primary' ? 'black' : 'white' };
  color: ${(props: IChButton) => props.mode === 'primary' ? 'white' : 'black' };
  cursor: ${(props: IChButton) => props.disabled ? 'default' : 'pointer' };
`

const ChButton: FC<IChButton> = ({
    className,
    label = 'Button',
    disabled = false,
    onClick,
    mode = 'primary'
}) => {
    return (
        <StyledChButton
            className={['ch-button',
                `${className}`,
                `ch-button-${mode}`
            ].join(' ')}
            disabled={disabled}
            onClick={onClick}
            mode={mode}
        >
            { label }
        </StyledChButton>
    )
}

export default ChButton;
