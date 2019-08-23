const getRating = skill => {
    let rating = 0;
    for(const [key, value] of Object.entries(skill)){
        rating += value;
    }
    rating = rating/Object.keys(skill).length;
    return Math.floor(rating*10)/10;
}
export default getRating;