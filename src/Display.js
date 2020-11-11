function Display(props) {
    var ar = props.description.split('&')
    return (
        <div>
        <h1>Моделирование ННР: {props.name}</h1>
        <iframe src={props.url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        width='540'
        height='400'
        title='video'/>
        <div>
            <ul>{ar.map((item, index) => (
            <li className="ListItem">
                {item}
            </li>
        ))}</ul></div>
        </div>
    );
  }
  
  export default Display;