import './css/title.css';

interface Props {
    titleProps: string;
}

export default function Title({titleProps}:Props) {
    return (
        <div className='title'>
            <h1>{titleProps}</h1>
        </div>
    );
}