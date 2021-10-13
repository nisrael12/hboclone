import Link from 'next/link'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { shuffleArray } from '../../Utilities'

const MediaRow = (props) => {

    const [laodingData, setLoadingData] = useState(true)
    const [movies, setMoviesData] = useState([])

    useEffect(() => {
        
        // Make a request for a user with a given ID
        axios.get(`https://api.themoviedb.org/3/${props.endpoint}&api_key=01b01026b9723f069d5b965420239060&language=en-US`)
        .then(function (response) {
            setMoviesData(shuffleArray(response.data.results))
            setLoadingData(false);
            
        // handle success
        console.log('Success Response For '  + props.title);
        console.log(response);
        })
        .catch(function (error) {
        // handle error
        console.log('Error Response For'  + props.title);
        console.log(error);
        });
    }, [])

    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 1; index <= digit; index++){
            thumbnails.push(comp);
        }
        
        return thumbnails;
    }

    const showThumbnails = () => {
        // setTimeout(() => setLoadingData(false), 3000)
        return laodingData 
        ? loopComp((<Skeleton />), 10) 
        : movies.map((movie) => {
            return <Thumbnail key="content" movieData={movie} />
        })
    }

    return(
        <div className={`media-row ${props.type} `}>
            <h3 className="media-row__title">{props.title}</h3>
            <div className="media-row__thumbnails">

                {showThumbnails()}

              {/* {loopComp(
                    (<Thumbnail />
                ),10
                )} */}
                 
            </div>
        </div>
    )
}

const Thumbnail = (props) => {
    return(
        <div className="media-row__thumbnail">
            <img src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`} />
            <div className="media-row__top-layer">
                <i className="fas fa-play" />
            </div>
        </div>
    )
}
const Skeleton = () => {
    return(
        <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img">

            </div>
        </div> 
)
}

export default MediaRow