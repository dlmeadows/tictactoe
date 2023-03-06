interface Props {
    value: string;
    onClick: any;
}

const Square: React.FC<Props> = ({value, onClick}) => {


    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;
