import StarRating from 'react-native-star-rating';
import React from 'react';

const Star = props => {
    return (
        <StarRating
            disabled={props.disabled}
            maxStars={5}
            rating={props.rating}
            emptyStarColor={'lightgrey'}
            fullStar={'star'}
            emptyStar={'star-border'}
            fullStarColor={'steelblue'}
            starSize={20}
            iconSet={'MaterialIcons'}
            selectedStar={(rating)=> props.action(rating)}
        />
    )
}

export default Star;