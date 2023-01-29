import Cover from './Cover';
import Score from './Score';
import Title from './Title';

interface CardInfo {
    imgSrc: string;
    title: string;
}

export default function SingleAnimeMyList({imgSrc, title}: CardInfo) {

    return(
        <div className='item'>
            <Cover img={imgSrc}/>
            <Title titleProps={title}/>
            <Score/>
        </div>
    );
}