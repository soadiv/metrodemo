import React from 'react';
import './App.css';
import Display from './Display';

const MENU = [
  { name: "Человек на пути", url: "https://www.youtube.com/embed/xzyvgdpGbjI" },
  { name: "Потеря управления", url: "https://www.youtube.com/embed/SA-sZV9DF8c" },
  { name: "Заклинивание колесных пар", url: "https://www.youtube.com/embed/8EDOj3qeFgo" },
  { name: "Проезд запрещающего", url: "https://www.youtube.com/embed/T6ULuuq6InI" },
  { name: "Ложная занятость", url: "https://www.youtube.com/embed/kX4A8u8NeuU" },
  { name: "Плюс одна пара поездов", url: "https://www.youtube.com/embed/8OuTpTrD-x8" }

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 0,
    };
  }
  render(){
    const activeItem = this.state.activeItem;
  return (
    <div className="App">
      {MENU.map((item, index) => (
      <button
        key={index}
        onClick={() => {
          this.setState({ activeItem: index });
        }}
      >
          {item.name}
      </button>
    ))}
      <Display name={MENU[activeItem].name} url={MENU[activeItem].url}></Display>
    </div>
  );
}
}

export default App;
