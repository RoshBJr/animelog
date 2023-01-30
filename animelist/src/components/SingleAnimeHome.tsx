import '../components/css/singleAnimeHome.css';
import Add from './Add';
import Cover from './Cover';
import Score from './Score';
import Title from './Title';

interface CardInfo {
    imgSrc: string;
    title: string;
    text: string;
    id: number;
}

export default function SingleAnimeHome({imgSrc, title, text, id}: CardInfo) {

    return(
        <div className='item'>
            <Cover img={imgSrc}/>
            <div className='itemContainerInfo'>
                <Title titleProps={title}/>
                <Score/>
                <Add addImgSrc={imgSrc} addTitle={title} addText={text} id={id} />
            </div>
        </div>
    );
}