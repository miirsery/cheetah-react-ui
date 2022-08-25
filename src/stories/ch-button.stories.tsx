import ChButton, {IChButton} from "../Components/ChButton";

export default {
    title: 'Example/ChButton',
    component: ChButton,
}

export const primaryButton = (args: IChButton) => <ChButton {...args} />

primaryButton.args = {
    mode: 'primary',
    disabled: false
}
