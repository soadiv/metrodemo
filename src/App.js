import React from 'react';
import './App.css';
import Display from './Display';
import ImageViewer from './ImageViewer';
import a from './a.png';

const MENU = [
  { type: 2, name: "Схема Филёвской линии", src: '/Image/FilLine.png' },
  { type: 1, name: "Штатное движение на линии", url: "https://www.youtube.com/embed/tOPF_wufH8Y", description: "", day: "/Image/Суточные план-графики/1. Текущая система ИР/ГИР без задержек.svg", graphik: "/Image/Графики исполненного движения/1. Текущая система ИР/без задержек.svg" },
  { type: 1, name: "Штатное движение на линии", url: "https://www.youtube.com/embed/vCSCWbCCBus", description: "", day: "/Image/Суточные план-графики/2. АЛС-АРС/ГИД без задержек.svg", graphik: "/Image/Графики исполненного движения/2. АЛС-АРС/без задержек.svg" },
  { type: 1, name: "Штатное движение на линии", url: "https://www.youtube.com/embed/tnjjjonu23M", description: "", day: "/Image/Суточные план-графики/3. Радиоканал/ГИР без задержек.svg", graphik: "/Image/Графики исполненного движения/3. Радиоканал/без задержек.svg" },
  { type: 1, name: "Человек на пути", url: "https://www.youtube.com/embed/BrvjY-oaxyI", description: "Вследствие возникновения данного инцидента поезд №44, с временем отправления 7 час. 42 мин. был отправлен со станции Киевская в 7 час. 52 мин.&Остановка движения поездов из-за инцидента составляет 10 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 75 мин.&Время на полное восстановление интервалов в чётном направлении: 91 мин.", day: "/Image/Суточные план-графики/1. Текущая система ИР/ГИР человек на пути.svg", graphik: "/Image/Графики исполненного движения/1. Текущая система ИР/человек на пути.svg" },
  { type: 1, name: "Человек на пути", url: "https://www.youtube.com/embed/A3o-Ozpw5f0", description: "Вследствие возникновения данного инцидента поезд №44 с временем прибытия на станцию Киевская в 7 час. 41 мин. был отправлен со станции Киевская в 7 час. 52 мин.&Остановка движения поездов из-за инцидента составляет 10 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 69 мин.&Время на полное восстановление интервалов в чётном направлении: 98 мин.", day: "/Image/Суточные план-графики/2. АЛС-АРС/ГИР человек (предмет) на пути.svg", graphik: "/Image/Графики исполненного движения/2. АЛС-АРС/человек (предмет) на пути.svg" },
  { type: 1, name: "Человек на пути", url: "https://www.youtube.com/embed/HpP7UDU0ATA", description: "Вследствие возникновения данного инцидента поезд №44 с временем прибытия на станцию Киевская в 7 час. 41 мин. был отправлен со станции Киевская в 7 час. 52 мин.&Остановка движения поездов из-за инцидента составляет 10 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 69 мин.&Время на полное восстановление интервалов в чётном направлении: 98 мин.", day: "/Image/Суточные план-графики/3. Радиоканал/ГИР человек (предмет) на пути.svg", graphik: "/Image/Графики исполненного движения/3. Радиоканал/человек (предмет) на пути.svg" },
  { type: 1, name: "Потеря управления", url: "https://www.youtube.com/embed/xXGvPRbcbLM", description: "Вследствие возникновения данного инцидента поезд №44 с временем отправления со станции Киевская в 7. час. 43 минут, был отправлен в 8 час. 1 мин.&Остановка движения поездов из-за инцидента составляет 16 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 172 мин.&Время на полное восстановление интервалов в чётном направлении: 222 мин.", day: "/Image/Суточные план-графики/1. Текущая система ИР/ГИР потеря управления.svg", graphik: "/Image/Графики исполненного движения/1. Текущая система ИР/потеря управления.svg" },
  { type: 1, name: "Потеря управления", url: "https://www.youtube.com/embed/3QLifnmz3Mg", description: "Вследствие возникновения данного инцидента поезд №44 с временем отправления со станции Киевская в 7. час. 43 минут, был отправлен в 8 час. 1 мин.&Остановка движения поездов из-за инцидента составляет 16 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 155 мин.&Время на полное восстановление интервалов в чётном направлении: 161 мин.", day: "/Image/Суточные план-графики/2. АЛС-АРС/ГИР потеря управления.svg", graphik: "/Image/Графики исполненного движения/2. АЛС-АРС/потеря управления.svg" },
  { type: 1, name: "Потеря управления", url: "https://www.youtube.com/embed/q7JvM9pb0lA", description: "Вследствие возникновения данного инцидента поезд №44 с временем отправления со станции Киевская в 7. час. 43 минут, был отправлен в 8 час. 1 мин.&Остановка движения поездов из-за инцидента составляет 16 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 155 мин.&Время на полное восстановление интервалов в чётном направлении: 161 мин.", day: "/Image/Суточные план-графики/3. Радиоканал/ГИР потеря управления.svg", graphik: "/Image/Графики исполненного движения/3. Радиоканал/потеря управления.svg" },
  { type: 1, name: "Заклинивание колесных пар", url: "https://www.youtube.com/embed/75LG69XVQVc", description: "Вследствие возникновения данного инцидента поезд №45, с временем отправления 7 час. 58 мин. был отправлен со станции Студенческая в 8 час. 10 мин.&Остановка движения поездов из-за инцидента составляет 12 мин. Далее неисправный поезд следует с уменьшенной скоростью в депо на протяжении 30 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 68 мин.&Время на полное восстановление интервалов в чётном направлении: 64 мин.", day: "/Image/Суточные план-графики/1. Текущая система ИР/ГИР заклинивание кол.пар.svg", graphik: "/Image/Графики исполненного движения/1. Текущая система ИР/заклинивание кол.пар.svg" },
  { type: 1, name: "Заклинивание колесных пар", url: "https://www.youtube.com/embed/Eh9aGMUvouI", description: "Вследствие возникновения данного инцидента поезд №45, с временем отправления 7 час. 58 мин. был отправлен со станции Студенческая в 8 час. 10 мин.&Остановка движения поездов из-за инцидента составляет 12 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 68 мин.&Время на полное восстановление интервалов в чётном направлении: 64 мин.", day: "/Image/Суточные план-графики/2. АЛС-АРС/ГИР  заклинивание кол. пар.svg", graphik: "/Image/Графики исполненного движения/2. АЛС-АРС/заклинивание кол. пар.svg" },
  { type: 1, name: "Заклинивание колесных пар", url: "https://www.youtube.com/embed/c-94maBHq3k", description: "Вследствие возникновения данного инцидента поезд №45, с временем отправления 7 час. 58 мин. был отправлен со станции Студенческая в 8 час. 10 мин.&Остановка движения поездов из-за инцидента составляет 12 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 68 мин.&Время на полное восстановление интервалов в чётном направлении: 64 мин.", day: "/Image/Суточные план-графики/3. Радиоканал/ГИР заклинивание кол. пар.svg", graphik: "/Image/Графики исполненного движения/3. Радиоканал/заклинивание кол. пар.svg" },
  { type: 1, name: "Проезд запрещающего", url: "https://www.youtube.com/embed/vJ8kkJjXzPI", description: "Вследствие возникновения данного инцидента поезд №44 с временем отправления со станции Арбатская, с временем прибытия на станцию Александровский Сад в 7 часов 50 минут прибыл в 7 часов 56 минут.&Остановка движения поездов из-за инцидента составляет 7 мин.&Время на полное восстановление интервалов движения в нечетном направлении: 49 мин.&Время на полное восстановление интервалов в чётном направлении: 88 мин.", day: "/Image/Суточные план-графики/1. Текущая система ИР/ГИР проезд запрещ.svg", graphik: "/Image/Графики исполненного движения/1. Текущая система ИР/проезд запрещ..svg" },
  { type: 1, name: "Проезд запрещающего", url: "https://www.youtube.com/embed/vCSCWbCCBus", description: "Данная неисправность не рассматривается по причине заложенных в цифровую модель принципов работы устройств АЛС-АРС, автоматически включающих торможение состава поезда и исключающих возможность отправления на занятый участок.", day: "/Image/Суточные план-графики/2. АЛС-АРС/ГИД без задержек.svg", graphik: "/Image/Графики исполненного движения/2. АЛС-АРС/без задержек.svg" },
  { type: 1, name: "Проезд запрещающего", url: "https://www.youtube.com/embed/tnjjjonu23M", description: "Данная неисправность не рассматривается по причине заложенных в цифровую модель принципов работы устройств CBTC, автоматически включающих торможение состава поезда и исключающих возможность отправления на занятый участок.", day: "/Image/Суточные план-графики/3. Радиоканал/ГИР без задержек.svg", graphik: "/Image/Графики исполненного движения/3. Радиоканал/без задержек.svg" },
  { type: 1, name: "Ложная занятость", url: "https://www.youtube.com/embed/OoYkZ7oFb-0", description: "Начало неисправности в 7 часов 55 минут, устранение неисправности – восстановление нормальной работы устройств ЖАТ в 8 часов 35 минут&Продолжительность ложной занятости: 40 минут.&Время на полное восстановление интервалов движения в нечетном направлении: 100 мин.&Время на полное восстановление интервалов в чётном направлении: 103 мин.", day: "/Image/Суточные план-графики/1. Текущая система ИР/ГИР ложная занятость.svg", graphik: "/Image/Графики исполненного движения/1. Текущая система ИР/ложная занятость.svg" },
  { type: 1, name: "Ложная занятость", url: "https://www.youtube.com/embed/KWcc1lDZ1AA", description: "Начало неисправности в 7 часов 55 минут, устранение неисправности – восстановление нормальной работы устройств ЖАТ в 8 часов 35 минут.&Продолжительность ложной занятости: 40 минут.&Время на полное восстановление интервалов движения в нечетном направлении: 59 мин.&Время на полное восстановление интервалов в чётном направлении: 28 мин.", day: "/Image/Суточные план-графики/2. АЛС-АРС/ГИР ложная занятость.svg", graphik: "/Image/Графики исполненного движения/2. АЛС-АРС/ложная занятость.svg" },
  { type: 1, name: "Ложная занятость", url: "https://www.youtube.com/embed/ZQUvo_CwCb0", description: "Начало неисправности в 7 часов 55 минут, устранение неисправности – восстановление нормальной работы устройств ЖАТ в 8 часов 35 минут.&Продолжительность ложной занятости: 40 минут.&Время на полное восстановление интервалов движения в нечетном направлении: 59 мин.&Время на полное восстановление интервалов в чётном направлении: 28 мин.", day: "/Image/Суточные план-графики/3. Радиоканал/ГИР ложная занятость.svg", graphik: "/Image/Графики исполненного движения/3. Радиоканал/ложная занятость.svg" },
  { type: 1, name: "Плюс одна пара поездов", url: "https://www.youtube.com/embed/IzorqSkRc1E", description: "Добавлена пара поездов на участке Александровский Сад – Кунцевская – нитка поезда № 7415 отправлением со станции Багратионовская в 7 час. 54 мин. с оборотом на станции Кунцевская под поезд №54.&Увеличивается время стоянки на ст. Пионерская. По перегону ст. Пионерская – ст. Кунцевская поезда следуют с задержками.&Увеличение количества пар поездов при текущем развитии инфраструктуры невозможно. Резерв в графике движения отсутствует.", day: "/Image/Суточные план-графики/1. Текущая система ИР/ГИР + 1 пара.svg", graphik: "/Image/Графики исполненного движения/1. Текущая система ИР/+1 пара поездов.svg" },
  { type: 1, name: "Плюс одна пара поездов", url: "https://www.youtube.com/embed/zJwJsnEpXOE", description: " Добавлена пара поездов на участке Александровский Сад – Кунцевская – нитка поезда № 4003 отправлением со станции Багратионовская в 7 час. 00 мин. с оборотом на станции Кунцевская под поезд №36.&Добавлена пара поездов на участке Александровский Сад – Международная – нитка поезда № 3806 отправлением со станции Багратионовская в 7 час. 21 мин. с оборотом на станции Александровский Сад под поезд №4725.&Возможно организовать движение 16 пар в час пик на участке Александровский Сад – Кунцевская, 16 пар в час пик на участке Александровский Сад – Международная, 32 пар в час пик на участке Киевская – Александровский Сад.&Резерв в графике движения отсутствует. При возникновении нарушения в нормальной работе устройств увеличенное количество поездов на линии будет способствовать увеличению периода времени для нормализации движения на линии.", day: "/Image/Суточные план-графики/2. АЛС-АРС/ГИР + 1 пара.svg", graphik: "/Image/Графики исполненного движения/2. АЛС-АРС/+ 1 пара.svg" },
  { type: 1, name: "Плюс одна пара поездов", url: "https://www.youtube.com/embed/9QJA1kTTgag", description: "Добавлена пара поездов на участке Александровский Сад – Кунцевская – нитка поезда № 3766 отправлением со станции Багратионовская в 8 часов 35 минут.&Добавлена пара поездов на участке Александровский Сад – Международная – нитка поезда № 3772 отправлением со станции Багратионовская в 8 часов 36 минут.&Возможно организовать движение 16 пар в час пик на участке Александровский Сад – Кунцевская, 16 пар в час пик на участке Александровский Сад – Международная, 32 пар в час пик на участке Киевская – Александровский Сад.&Резерв в графике движения отсутствует. При возникновении нарушения в нормальной работе устройств увеличенное количество поездов на линии будет способствовать увеличению периода времени для нормализации движения на линии.", day: "/Image/Суточные план-графики/3. Радиоканал/ГИР + 1 пара.svg", graphik: "/Image/Графики исполненного движения/3. Радиоканал/+ 1 пара.svg" },
  { type: 2, name: "Скоростные ограничения", src: '/Image/SpeedLimit.jpg' },
  { type: 2, name: "Лимитирующие участки", src: '/Image/LimitItem.png' },
  { type: 2, name: "Расстановка составов", src: '/Image/расстановка.png' },
  { type: 1, name: "Переход с радиоканала на АЛС-АРС", url: "https://www.youtube.com/embed/8w1dHSJ82-M", description: "Потеря радиоканала поездом №45 на перегоне между станциями Фили и Багратионовская I главного пути.&Прекращается движение поездов, все составы следуют до станций, происходит переключение всех поездов на систему АЛС-АРС и дальнейшее следование согласно сигнализации.&Продолжительность стоянки поездов и переключения поездов на систему АЛС-АРС составляет 9 минут.&Нарушения графика движения поездов отсутствуют." },
  { type: 4, name: "Отчет о результатах", link: "/Отчет_Метро v.1.docx" },
  { type: 4, name: "Презентация", link: "/для совещания с ММ 20 11 2020_итог.pdf" }
];

const NEWMENUJSON = [
  {
    "item": {
      "id": "0",
      "type": "2",
      "name": "Схема Филёвской линии"
    }
  },
  {
    "item": {
      "id": "22",
      "type": "2",
      "name": "Скоростные ограничения"
    }
  },
  {
    "item": {
      "id": "23",
      "type": "2",
      "name": "Лимитирующие участки"
    }
  },
  {
    "item": {
      "id": "24",
      "type": "2",
      "name": "Расстановка составов"
    }
  },
  {
    "item": {
      "id": "26",
      "type": "4",
      "name": "Отчет о результатах"
    }
  },
  {
    "item": {
      "id": "27",
      "type": "4",
      "name": "Презентация"
    }
  },
  {
    "group": {
      "name": "Штатное движение на линии",
      "items": [
        {
          "item": {
            "id": "1",
            "type": "1",
            "name": "Существующая система ИР"
          }
        },
        {
          "item": {
            "id": "2",
            "type": "1",
            "name": "АЛС-АРС"
          }
        },
        {
          "item": {
            "id": "3",
            "type": "1",
            "name": "Радиоканал"
          }
        }

      ]
    }
  },
  {
    "item": {
      "id": "_1",
      "type": "3",
      "name": "line"
    }

  },
  {
    "item": {
      "id": "_2",
      "type": "3",
      "name": "Нарушения нормальной работы"
    }

  },
  {
    "group": {
      "name": "Человек на пути",
      "items": [
        {
          "item": {
            "id": "4",
            "type": "1",
            "name": "Существующая система ИР"
          }
        },
        {
          "item": {
            "id": "5",
            "type": "1",
            "name": "АЛС-АРС"
          }
        },
        {
          "item": {
            "id": "6",
            "type": "1",
            "name": "Радиоканал"
          }
        }
      ]
    }
  },
  {
    "group": {
      "name": "Потеря управления",
      "items": [
        {
          "item": {
            "id": "7",
            "type": "1",
            "name": "Существующая система ИР"
          }
        },
        {
          "item": {
            "id": "8",
            "type": "1",
            "name": "АЛС-АРС"
          }
        },
        {
          "item": {
            "id": "9",
            "type": "1",
            "name": "Радиоканал"
          }
        }
      ]
    }
  },
  {
    "group": {
      "name": "Заклинивание колесных пар",
      "items": [
        {
          "item": {
            "id": "10",
            "type": "1",
            "name": "Существующая система ИР"
          }
        },
        {
          "item": {
            "id": "11",
            "type": "1",
            "name": "АЛС-АРС"
          }
        },
        {
          "item": {
            "id": "12",
            "type": "1",
            "name": "Радиоканал"
          }
        }
      ]
    }
  },
  {
    "group": {
      "name": "Проезд запрещающего",
      "items": [
        {
          "item": {
            "id": "13",
            "type": "1",
            "name": "Существующая система ИР"
          }
        },
        {
          "item": {
            "id": "14",
            "type": "1",
            "name": "АЛС-АРС"
          }
        },
        {
          "item": {
            "id": "15",
            "type": "1",
            "name": "Радиоканал"
          }
        }
      ]
    }
  },
  {
    "group": {
      "name": "Ложная занятость",
      "items": [
        {
          "item": {
            "id": "16",
            "type": "1",
            "name": "Существующая система ИР"
          }
        },
        {
          "item": {
            "id": "17",
            "type": "1",
            "name": "АЛС-АРС"
          }
        },
        {
          "item": {
            "id": "18",
            "type": "1",
            "name": "Радиоканал"
          }
        }
      ]
    }
  },
  {
    "group": {
      "name": "Плюс одна пара поездов",
      "items": [
        {
          "item": {
            "id": "19",
            "type": "1",
            "name": "Существующая система ИР"
          }
        },
        {
          "item": {
            "id": "20",
            "type": "1",
            "name": "АЛС-АРС"
          }
        },
        {
          "item": {
            "id": "21",
            "type": "1",
            "name": "Радиоканал"
          }
        }
      ]
    }
  },
  {
    "item": {
      "id": "25",
      "type": "2",
      "name": "Переход с радиоканала на АЛС-АРС"
    }
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "0",
      menu: true,
      clickkedGroup: "",
    };
  }

  render() {
    const activeItem = this.state.activeItem;
    return (
      <div className="App">
        <div className="Appheader">
          <div
            className="App-navButtons-menu"
            onClick={() => this.setState({ menu: true })}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
          <a
            href="http://rut.digital"
            target="_blank"
          >
            <img
              className="logoImg"
              height="23"
              width="23"
              alt="logo"
              src={a}
            />
          </a>
          <span
            style={{
              color: '#c92622',
              marginLeft: 20
            }}
          >
            Интерактивная модель Филёвской линии Московского метро
            </span>
        </div>
        <div className="Appbody">
          <div className="App-navButtons"
            style={{
              display: this.state.menu ? 'flex' : 'none'
            }}
          >
            <div className="App-navButtons-close">
              <span
                className="App-navButtons-close-btn"
                onClick={() => this.setState({ menu: false })}
              >
                &#10006;
            </span>
            </div>
            <div className="App-navButtons-btns">
              {NEWMENUJSON.map((item, index) => (
                item.item !== undefined
                  ? item.item.type === "2"
                    ? <div
                      className="App-navButtons-button"
                      key={item.item.id}
                      onClick={() => {
                        this.setState({ activeItem: item.item.id, clickkedGroup: "" });
                      }}
                    >
                      <span
                        className={activeItem === item.item.id
                          ? "App-navButtons-span-active"
                          : "App-navButtons-span"
                        }
                      >
                        {item.item.name}
                      </span>
                    </div>
                    : item.item.type === "4"
                    ? <div
                        className="App-navButtons-button"
                        key={item.item.id}
                        
                      >
                        <span
                        className={activeItem === item.item.id
                          ? "App-navButtons-span-active"
                          : "App-navButtons-span"
                        }
                      >
                        <a
                            href={MENU[item.item.id].link}
                            download
                        >
                            {item.item.name}
                        </a> 
                      </span>
                    </div>
                     : item.item.name === "line"
                      ? <div className="App-line"/>
                        :<div
                          className="App-text"
                          key={item.item.id}
                        >
                          <b>{item.item.name}</b>
                        </div>
                  : <div key={item.group.name}>
                          <div
                            className="App-navButtons-button"
                            onClick={() => this.state.clickkedGroup === ""
                              ? this.setState({ clickkedGroup: item.group.name })
                              : this.state.clickkedGroup === item.group.name
                                ? this.setState({ clickkedGroup: "" })
                                : this.setState({ clickkedGroup: item.group.name })
                            }
                          >
                            <span
                              style={{
                                borderLeft: '2px solid #fff',
                                paddingLeft: '10px',
                                fontWeight: this.state.clickkedGroup === item.group.name
                                  ? '500'
                                  : ''
                              }}
                            >
                              {item.group.name}
                            </span>
                            <div className={this.state.clickkedGroup === item.group.name
                              ? "Triangle-active"
                              : "Triangle-passive"
                            } />
                          </div>
                          {this.state.clickkedGroup === item.group.name
                            ? item.group.items.map((groupElement, index) =>
                              <div
                                className="App-navButtons-button-gr"
                                key={groupElement.item.id}
                                onClick={() => {
                                  this.setState({ activeItem: groupElement.item.id });
                                }}
                              >
                                <span
                                  className={activeItem === groupElement.item.id
                                    ? "App-navButtons-span-active-gr"
                                    : "App-navButtons-span-gr"
                                  }
                                >
                                  {groupElement.item.name}
                                </span>
                              </div>
                            )
                            : ""
                          }
                        </div>
              ))}
              {/* {MENU.map((item, index) => (
                <div
                  className="App-navButtons-button"
                  key={index}
                  onClick={() => {
                    this.setState({ activeItem: index });
                  }}
                >
                  <span
                    className={this.state.activeItem === index
                      ? "App-navButtons-span-active"
                      : "App-navButtons-span"
                    }
                  >
                    {item.name}
                  </span>
                </div>
              ))} */}
            </div>
          </div>
            <div className="App-result">
              <div className="App-result-content">
                {(MENU[activeItem].type === 1) &&
                  <Display name={MENU[activeItem].name} url={MENU[activeItem].url} day={MENU[activeItem].day} graphik={MENU[activeItem].graphik} description={MENU[activeItem].description}></Display>
                }
                {(MENU[activeItem].type === 2) &&
                  <ImageViewer src={MENU[activeItem].src}></ImageViewer>
                }
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;