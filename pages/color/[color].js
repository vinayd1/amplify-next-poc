const Color = ({color}) => {
    return <h1>color</h1>;
}

export const getServerSideProps = ({params}) => {
    return {
        props: {
            color: params.color
        }
    }
}

export default Color;