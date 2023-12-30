interface ConditionProps {
    children: JSX.Element | JSX.Element[];
    condition: boolean
}

function Condition(props: ConditionProps) {
    return (
        <>
            {props.condition ? props.children : <></>}
        </>
    );
}

export default Condition;