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
  return (
    <div>
      <div id='img'></div>
      
      <Viewer
      visible={true}
      container={document.getElementById("img")}
      noClose
      images={[{src: this.props.src, alt: ''}]}
      />
      
    </div>
  );}
}
export default ImageViewer;