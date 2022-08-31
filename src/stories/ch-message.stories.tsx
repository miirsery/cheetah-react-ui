import ChMessage, { IChMessage } from "../Components/ChMessage"
import ChButton, {IChButton} from "../Components/ChButton";
import {useEffect, useState} from "react";
import {primaryButton} from "./ch-button.stories";

export default {
    title: 'Example/ChMessage',
    component: ChMessage
}

export const infoMessage = (args: IChMessage & IChButton) => {
    const [visible, setVisible] = useState(false);

    const changeVisibleMessage = (): void => {
        setVisible(!visible)
    }

    return (
        <>
            <ChButton onClick={changeVisibleMessage} {...args} />
            <ChMessage
                visible={visible}
                changeVisible={changeVisibleMessage}
                {...args}
            />
        </>
    )
}


infoMessage.args = {
    type: 'info',
    message: 'This message text)',
    delay: '1500',
    mode: 'success',
}

primaryButton.args = {
    mode: 'primary',
    disabled: false
}

