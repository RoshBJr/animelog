import '../components/css/singleAnimeHome.css';
import Add from './Add';
import Cover from './Cover';
import Score from './Score';
import Title from './Title';

export default function SingleAnimeHome() {

    return(
        <div className='item'>
            <Cover/>
            <Title/>
            <Score/>
            <Add/>
        </div>
    );
}