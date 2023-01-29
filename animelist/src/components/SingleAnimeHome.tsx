import '../components/css/singleAnimeHome.css';
import Add from './Add';
import Cover from './Cover';
import Score from './Score';
import Title from './Title';

interface CardInfo {
    imgSrc: string;
    title: string;
}

export default function SingleAnimeHome({imgSrc, title}: CardInfo) {

    return(
        <div className='item'>
            <Cover img={imgSrc}/>
            <div className='itemContainerInfo'>
                <Title titleProps={title}/>
                <Score/>
                <Add addImgSrc={imgSrc} addTitle={title}/>
            </div>
        </div>
    );
}