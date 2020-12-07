import * as React from 'react';
import Viewer from 'react-viewer';


class ImageViewer extends React.Component{
  constructor(props) {
    super();

    this.state = {
      visible: false,
      loading: false
    };
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    
  }
  render(){
     var ar = this.props.description.split('&');
  return (
    <div>
      <h1>{this.props.title}</h1>
      <div id='img'></div>
      
      <Viewer
      visible={true}
      container={document.getElementById("img")}
      noClose
      noNavbar
      noToolbar
      zoomSpeed={0.3}
      rotatable={false}
      minScale={0.5}
      defaultScale={3}
      images={[{src: this.props.src, alt: ''}]}
      />
      {ar[0] !== "" &&
        <div>
            <ol>{ar.map((item, index) => (
            <li className="ListItem">
                {item}
            </li>
        ))}</ol></div>}
    </div>
  );}
}
export default ImageViewer;