import PropTypes from 'prop-types';

const Joke = (props) => {
  const { data } = props;  
  return (
    <div className="layout">
      <p className='joke-content'>{data}</p>
      <hr className="joke-line"></hr>
      <div className="joke-buttons">
        <button className="button joke-like-button">This is Funny!</button>
        <button className="button joke-dislike-button">This is not Funny.</button>
      </div>
    </div>
  )
}
Joke.propTypes = {
  data: PropTypes.string
}
export default Joke;