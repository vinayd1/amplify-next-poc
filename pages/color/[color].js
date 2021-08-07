const Color = ({color}) => {
    return <h1>{color}</h1>;
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps = ({params}) => {
    return {
        props: {
            color: params.color
        }
    }
}

export default Color;