import cinema from '../cinema.svg';
import './css/emptyList.scss';

export default function EmptyList() {
    
    return (
        <div className='emptyComponent'>
            <h1>Silence is blissful</h1>
            <img src={cinema} alt="" />
        </div>
    );
} 