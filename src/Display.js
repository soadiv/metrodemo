function Display(props) {
    var ar = props.description.split('&')
    return (
        <div class="App-result-content__content">
        <h1>Моделирование ННР: {props.name}</h1>
        {(props.url) &&
            <iframe src={props.url}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            width='80%'
            height='900'
            className='App-result-content__video'
            title='video'/>
        }
        {(props.day) &&
            <div className="alink">
            <a
                href={props.day}
                target="_blank"
                rel="noreferrer"
            >
                Суточный план-график
            </a> 
            </div>
        }
        {(props.graphik) &&
        <div className="alink">
            <a
                href={props.graphik}
                target="_blank"
                rel="noreferrer"
            >
                График исполненного движения
            </a> 
            </div>
        }
        {ar[0] !== "" &&
        <div>
            <ul>{ar.map((item, index) => (
            <li className="ListItem">
                {item}
            </li>
        ))}</ul></div>}
        </div>
        
    );
  }
  
  export default Display;