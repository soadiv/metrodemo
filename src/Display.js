function Display(props) {
    return (
        <div>
        <h1>Моделирование ННР: {props.name}</h1>
        <iframe src={props.url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'/>
        <div>{props.description}</div>
        </div>
    );
  }
  
  export default Display;