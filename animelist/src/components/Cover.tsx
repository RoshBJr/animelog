import './css/cover.scss';

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