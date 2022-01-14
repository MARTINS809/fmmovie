import MovieStars from "../MovieStars";
import './styles.css';
function MovieScore() {

    const score = 3.8;
    const count = 13;

    return (
        <div className="fmmovie-score-container">
    <p className="fmmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
    <MovieStars />
    <p className="fmmovie-score-count">{count} avaliações</p>
</div>
    );
}

export default MovieScore;