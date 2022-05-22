// import { LoadingText } from './Loader.styled';
import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <Triangle
            color="#57d331"
            height={80}
            width={80}
            wrapperStyle={{ margin: '0 auto' }}
        />
    )
};

    // return <LoadingText>loading...</LoadingText>