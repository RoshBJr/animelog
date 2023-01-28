import './css/cover.css';

interface Props {
    img: string;
}

export default function Cover({img}: Props) {
    return (
        <div className='cover'>
            <img src={img} alt="" />
        </div>
    );
}