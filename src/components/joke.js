import PropTypes from 'prop-types';

const Joke = (props) => {
  const { data, onLike, onDislike } = props;  
  return (
    <div className="layout">
      <p className='joke-content'>{data.content}</p>
      <hr className="joke-line"></hr>
      {
        data.id != null &&
        (
          <div className="joke-buttons">
            <button onClick={onLike} className="button joke-like-button">This is Funny!</button>
            <button onClick={onDislike} className="button joke-dislike-button">This is not Funny.</button>
          </div>
        )
      }
    </div>
  )
}
Joke.propTypes = {
  data: PropTypes.any,
  onLike: PropTypes.func,
  onDislike: PropTypes.func,
}
export default Joke;