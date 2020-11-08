import * as React from 'react';
import Viewer from 'react-viewer';

function ImageViewer() {
  const [ visible, setVisible ] = React.useState(false);

  return (
    <div>
      <button onClick={() => { setVisible(true); } }>show</button>
      <Viewer
      visible={visible}
      container={document.getElementById("img")}
      onClose={() => { setVisible(false); } }
      images={[{src: '/Image/SpeedLimit.jpg', alt: ''}]}
      />
      <div id='img'></div>
    </div>
  );
}
export default ImageViewer;