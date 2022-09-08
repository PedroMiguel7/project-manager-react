import { SpinnerBox, Spinner, LoadingMessage } from "./style";

export default function DataLoading(props) {
    return (
        <SpinnerBox height={props.height}>
            <Spinner size={props.size || 50} thickness={1} />
            <LoadingMessage>Carregando os dados...</LoadingMessage>
        </SpinnerBox>
    )
}