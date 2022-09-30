$(document).ready(function () {
  AOS.init();
  
  $(".map__item-title").hover(function () {
    $(this).next().css("opacity", 0);
  });
  $(".map__item-title").mouseleave(function () {
    $(this).next().css("opacity", 0.5);
  });

  $(".catergory__item-title").hover(function () {
    $(this).next().css("opacity", 0);
  });
  $(".catergory__item-title").mouseleave(function () {
    $(this).next().css("opacity", 0.5);
  });

  var users = [
    {
      id: "01",
      profession: "volosi",
      location: "center",
      name: "Елена",
      adress: "Спартака, 2",
      description: "",
      promo: "vineeva",
      phone: "+79614914261",
      imgs: {
        img1: "url(/assets/images/users/01/01.jpeg)",
        img2: "url(/assets/images/users/01/02.jpeg)",
        img3: "url(/assets/images/users/01/03.jpeg)",
        img4: "url(/assets/images/users/01/04.jpeg)",
        img5: "url(/assets/images/users/01/05.jpeg)",
        img6: "url(/assets/images/users/01/06.jpeg)",
      },
      services: {
        service1: "Контуринг и тонирование - 3500₽ (бонус укладка)",
        service2:
          "Аиртач/шатуш (цена зависит от длины) - от 4000₽ - 8000₽ (бонус укладка)",
        service3: "Корни (1 тон) - от 1000₽ -3500₽ (бонус укладка)",
        service4: "Прическа - от 1000₽",
        service5: "Стрижка женская - от 500₽ - 1000₽",
        service6: "Стрижка мужская - 500₽",
      },
      insta: "https://instagram.com/Vineeva.lena",
      whats: "https://wa.me/79614914261",
      geo: [45.044189574592274, 41.985747499999974],
    },
    {
      id: "02",
      profession: "manikur",
      location: "sever",
      name: "Евгения",
      adress: "Кулакова, 49/6",
      description: "",
      phone: "+79054427758",
      promo: "2606S",
      imgs: {
        img1: "url(/assets/images/users/02/01.jpeg)",
        img2: "url(/assets/images/users/02/02.jpeg)",
        img3: "url(/assets/images/users/02/03.jpeg)",
        img4: "url(/assets/images/users/02/04.jpeg)",
      },
      services: {
        service1:
          "Маникюр с покрытием гель лак и укреплением ногтевой пластины - 1100₽",
        service2: "Наращивание ногтей - 1300₽",
        service3: "Коррекция нарощенных ногтей - 1200₽",
        service6: "Маникюр (обработка) - 400₽",
      },
      insta: "https://instagram.com/nailmaster_evgenia26?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79054427758",
      geo: [45.07072707458384, 41.93570199999999],
    },
    {
      id: "03",
      profession: "brovist",
      location: "yug",
      name: "Татьяна",
      adress: "50 лет ВЛКСМ 33",
      description: "",
      phone: "+79197552799",
      promo: "АКРИЛ26",
      imgs: {
        img1: "url(/assets/images/users/03/01.jpg)",
        img2: "url(/assets/images/users/03/02.jpg)",
        img3: "url(/assets/images/users/03/03.jpg)",
        img4: "url(/assets/images/users/03/04.jpg)",
        img5: "url(/assets/images/users/03/05.jpg)",
      },
      services: {
        service1: "Коррекция и окрашивание бровей - 600₽",
        service2: "Коррекция бровей - 300₽",
        service3: "Окрашивание бровей - 300₽",
        service4: "Мужская коррекция бровей - от 400₽",
        service5: "Ламинирование бровей - 1100",
        service6: "Окрашивание ресниц - 200₽",
        service7: "Ваксинг (восковая депиляция лица - 1 зона) - 200₽",
      },
      insta: "https://www.instagram.com/acril_stv",
      whats: "https://wa.me/79197552799",
      vk: "https://vk.com/club214869258",
      geo: [45.0112290745842, 41.920205999999915],
    },
    {
      id: "04",
      profession: "resnici",
      location: "yug",
      name: "Татьяна",
      adress: "50 лет ВЛКСМ 33",
      description: "",
      phone: "+79197552799",
      promo: "АКРИЛ26",
      imgs: {
        img1: "url(/assets/images/users/04/01.jpg)",
        img2: "url(/assets/images/users/04/02.jpg)",
        img3: "url(/assets/images/users/04/03.jpg)",
        img4: "url(/assets/images/users/04/04.jpg)",
      },
      services: {
        service1: "Наращивание и коррекция ресниц",
        service2: "Наращивание - от 1000₽",
        service3: "Снятие без последующего наращивания - 200₽",
        service4: "Окрашивание ресниц - 200₽",
      },
      insta: "https://www.instagram.com/acril_stv",
      whats: "https://wa.me/79197552799",
      vk: "https://vk.com/club214869258",
      geo: [45.0112290745842, 41.920205999999915],
    },
    {
      id: "05",
      profession: "manikur",
      location: "yug",
      name: "Юлия",
      adress: "50 лет ВЛКСМ 33",
      description: "",
      phone: "+79197552799",
      promo: "АКРИЛ26",
      imgs: {
        img1: "url(/assets/images/users/05/01.jpg)",
        img2: "url(/assets/images/users/05/02.jpg)",
        img3: "url(/assets/images/users/05/03.jpg)",
        img4: "url(/assets/images/users/05/04.jpg)",
        img5: "url(/assets/images/users/05/05.jpg)",
      },
      services: {
        service1: "Маникюр гигиенический - от 400₽",
        service2: "Маникюр с покрытием гель лак - от 800₽",
        service3: "Маникюр с укреплением гелем - от 1100₽",
        service4: "Наращивание ногтей - от 1600₽",
        service5: "Коррекция наращенных ногтей - от 1300₽",
      },
      insta: "https://www.instagram.com/acril_stv",
      whats: "https://wa.me/79197552799",
      vk: "https://vk.com/club214869258",
      geo: [45.0112290745842, 41.920205999999915],
    },
    {
      id: "06",
      profession: "pedikur",
      location: "yug",
      name: "Полина",
      adress: "50 лет ВЛКСМ 33",
      description: "",
      phone: "+79197552799",
      promo: "АКРИЛ26",
      imgs: {
        img1: "url(/assets/images/users/06/01.jpg)",
        img2: "url(/assets/images/users/06/02.jpg)",
        img3: "url(/assets/images/users/06/03.jpg)",
        img4: "url(/assets/images/users/06/04.jpg)",
        img5: "url(/assets/images/users/06/05.jpg)",
        img6: "url(/assets/images/users/06/06.jpg)",
      },
      services: {
        service1: "Полный педикюр без покрытия - от 1100₽",
        service2: "Полный педикюр с покрытием гель лак - от 1300₽",
        service3: "Обработка пальцев без покрытия - от 900₽",
        service4: "Обработка пальцев с покрытием гель лак - от 1000₽",
        service5: "Мужской педикюр (только пальцы) - 900₽",
        service6: "Мужской педикюр (полная обработка стопы) - 1800₽",
        service7: "Обработка трещин и мозолей - от 500₽",
        service8: "Парафинотерапия - от 250₽",
      },
      insta: "https://www.instagram.com/acril_stv",
      whats: "https://wa.me/79197552799",
      vk: "https://vk.com/club214869258",
      geo: [45.0112290745842, 41.920205999999915],
    },
    {
      id: "07",
      profession: "permanent",
      location: "sever",
      name: "Светлана",
      adress: "пер. Шеболдаева 3а",
      description: "",
      phone: "+79286322207",
      promo: "Lanacosm",
      imgs: {
        img1: "url(/assets/images/users/07/01.jpg)",
        img2: "url(/assets/images/users/07/02.jpg)",
        img3: "url(/assets/images/users/07/03.jpg)",
        img4: "url(/assets/images/users/07/04.jpg)",
        img5: "url(/assets/images/users/07/05.jpg)",
        img6: "url(/assets/images/users/07/06.jpg)",
        img7: "url(/assets/images/users/07/07.jpg)",
        img8: "url(/assets/images/users/07/08.jpg)",
      },
      services: {
        service1: "Брови (пудровое напыление) - 4000₽",
        service2: "Губы - 5000₽",
        service3: "Веки : межресничка 3000₽",
        service4: "Веки : стрелка классическая 4000₽",
        service5: "Веки : стрелка с растушевкой 4500₽",
        service6: "Коррекция через месяц 50% от первоначальной стоимости",
        service7:
          "Обучение:  Перманентный макияж<br> Базовый курс (Брови, губы, межресничка )<br> 4 дня индивидуальный курс<br> Выдаётся 3 сертификата<br> Теория,отработка на моделях<br> Стоимость 35.000₽",
      },
      insta: "https://www.instagram.com/lana_beauty_face?r=nametag",
      whats: "https://wa.me/79286322207",
      vk: "",
      geo: [45.05944007460601, 41.93009649999995],
    },
    {
      id: "08",
      profession: "kosmetolog",
      location: "sever",
      name: "Светлана",
      adress: "пер. Шеболдаева 3а",
      description: "",
      phone: "+79286322207",
      promo: "Lanacosm",
      imgs: {
        img1: "url(/assets/images/users/08/01.jpg)",
        img2: "url(/assets/images/users/08/02.jpg)",
        img3: "url(/assets/images/users/08/03.jpg)",
        img4: "url(/assets/images/users/08/04.jpg)",
        img5: "url(/assets/images/users/08/05.jpg)",
        img6: "url(/assets/images/users/08/06.jpg)",
        img7: "url(/assets/images/users/08/07.jpg)",
        img8: "url(/assets/images/users/08/08.jpg)",
      },
      services: {
        service1:
          "Чистка лица ультразвуковая, комбинированная - от 1500₽-2500₽",
        service2:
          "Пилинги по типу кожи, Биоревитализирующие, всесезонные - от 1500₽-3000₽",
        service3: "Мезотерапия лица - от 3000₽",
        service4:
          "Мезотерапия вокруг глаз ( уменьшение темных кругов, сокращение морщин) - от 3000₽",
        service5: "Биоревитализация - от 4000₽",
        service6: "Биоревитализация жидкими бионитями - от 6000₽",
        service7: "Коктейль 'Монако' 10.000₽",
        service8: "Ботокс - 200₽ 1 единица",
        service9: "Лечение гипергидроза подмышек - 10.000₽",
        service10: "Нитевой лифтинг лица: Мезонити моно - от 350₽ 1 шт",
        service11: "Нитевой лифтинг лица: Мезонити скрю - от 450₽",
        service12:
          "Нитевой лифтинг лица: Нити типа Ког (лифтинг лица) - от 2700₽ 1 шт",
        service13:
          "Контурная пластика филлерами на основе гиалуроновой кислоты (1 мл филлера от 6000₽):<br> -Увеличение губ(плоский бантик); <br> -Коррекция подбородка; <br> -'Профиль Джоли' ( углы нижней челюсти+подбородок+скулы); <br> -Скулы; <br> -Щёчки-яблочки; <br> -Заполнение носослезной борозды; <br> -Заполнение носогубных складок; <br> -Коррекция овала лица; <br> -Коррекция 'колец Венеры' на шее.",
      },
      insta: "https://www.instagram.com/lana_beauty_face?r=nametag",
      whats: "https://wa.me/79286322207",
      vk: "",
      geo: [45.05944007460601, 41.93009649999995],
    },
    {
      id: "09",
      profession: "manikur",
      location: "center",
      name: "Lera26st",
      adress: "Пушкина 11<br> Цирюльникъ",
      description: "",
      phone: "+79280127404",
      promo: "Lera26",
      imgs: {
        img1: "url(/assets/images/users/09/01.jpeg)",
        img2: "url(/assets/images/users/09/02.jpeg)",
        img3: "url(/assets/images/users/09/03.jpeg)",
        img4: "url(/assets/images/users/09/04.jpeg)",
        img5: "url(/assets/images/users/09/05.jpeg)",
        img6: "url(/assets/images/users/09/06.jpeg)",
        img7: "url(/assets/images/users/09/07.jpeg)",
        img8: "url(/assets/images/users/09/08.jpeg)",
        img9: "url(/assets/images/users/09/09.jpeg)",
        img10: "url(/assets/images/users/09/10.jpeg)",
      },
      services: {
        service1:
          "Маникюр с покрытием гель лак и укреплением ногтевой пластины - 1100₽",
        service2: "Маникюр - 400₽",
        service3: "Гель-лак - 600₽",
        service4: "Маникюр и гель лак - от 990₽",
        service5: "Наращивание - от 1650₽",
        service6: "Гелевый маникюр - от 1250₽",
        service7: "Дизайн - от 100₽ палец. ",
        service8: "Зачистка онизолизиса - от 150₽",
        service9: "Снятие не моей работы - 300₽",
      },
      insta: "https://www.instagram.com/p/Cey443ptgVm/?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79280127404",
      geo: [45.039406574579964, 41.96283999999997],
    },
    {
      id: "10",
      profession: "manikur",
      location: "yug",
      name: "Lera26st",
      adress: "Тухачевского 21/2",
      description: "",
      phone: "+79280127404",
      promo: "Lera26",
      imgs: {
        img1: "url(/assets/images/users/10/01.jpeg)",
        img2: "url(/assets/images/users/10/02.jpeg)",
        img3: "url(/assets/images/users/10/03.jpeg)",
        img4: "url(/assets/images/users/10/04.jpeg)",
        img5: "url(/assets/images/users/10/05.jpeg)",
        img6: "url(/assets/images/users/10/06.jpeg)",
        img7: "url(/assets/images/users/10/07.jpeg)",
        img8: "url(/assets/images/users/10/08.jpeg)",
        img9: "url(/assets/images/users/10/09.jpeg)",
        img10: "url(/assets/images/users/10/10.jpeg)",
      },
      services: {
        service1:
          "Маникюр с покрытием гель лак и укреплением ногтевой пластины - 1100₽",
        service2: "Маникюр - 400₽",
        service3: "Гель-лак - 600₽",
        service4: "Маникюр и гель лак - от 990₽",
        service5: "Наращивание - от 1650₽",
        service6: "Гелевый маникюр - от 1250₽",
        service7: "Дизайн - от 100₽ палец",
        service8: "Зачистка онизолизиса - от 150₽",
        service9: "Снятие не моей работы - 300₽",
      },
      insta: "https://www.instagram.com/p/Cey443ptgVm/?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79280127404",
      geo: [45.016492574572176, 41.90269799999997],
    },
    {
      id: "11",
      profession: "pedikur",
      location: "center",
      name: "Lera26st",
      adress: "Пушкина 11<br> Цирюльникъ",
      description: "",
      phone: "+79280127404",
      promo: "Lera26",
      imgs: {
        img1: "url(/assets/images/users/11/01.jpeg)",
        img2: "url(/assets/images/users/11/02.jpeg)",
        img3: "url(/assets/images/users/11/03.jpeg)",
        img4: "url(/assets/images/users/11/04.jpeg)",
        img5: "url(/assets/images/users/11/05.jpeg)",
        img6: "url(/assets/images/users/11/06.jpeg)",
        img7: "url(/assets/images/users/11/07.jpeg)",
      },
      services: {
        service1: "Педикюр классический - 950₽",
        service2: "Сматр педикюр - 1300₽",
        service3: "Педикюр подологический - 1800₽",
        service4: "Зачистка онизолизиса(пальцы ног) - 1200₽",
        service5: "Обработка пальцев - 1000₽",
        service6: "Покрытие гель-лак - 600₽",
        service7: "Удаление стержневой мозоля - 300₽",
        service8: "Под ногтевого мозоля - 250₽",
        service9: "Удаления омозоллелостей - 500₽",
        service10: "Перевязка - 300₽",
        service11: "Установка скобы 3ТО - 3000₽",
        service12: "Установка титановой нити - 3000₽",
      },
      insta: "https://www.instagram.com/p/Cey443ptgVm/?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79280127404",
      geo: [45.039406574579964, 41.96283999999997],
    },
    {
      id: "12",
      profession: "pedikur",
      location: "yug",
      name: "Lera26st",
      adress: "Тухачевского 21/2",
      description: "",
      phone: "+79280127404",
      promo: "Lera26",
      imgs: {
        img1: "url(/assets/images/users/12/01.jpeg)",
        img2: "url(/assets/images/users/12/02.jpeg)",
        img3: "url(/assets/images/users/12/03.jpeg)",
        img4: "url(/assets/images/users/12/04.jpeg)",
        img5: "url(/assets/images/users/12/05.jpeg)",
        img6: "url(/assets/images/users/12/06.jpeg)",
        img7: "url(/assets/images/users/12/07.jpeg)",
      },
      services: {
        service1: "Педикюр классический - 950₽",
        service2: "Сматр педикюр - 1300₽",
        service3: "Педикюр подологический - 1800₽",
        service4: "Зачистка онизолизиса(пальцы ног) - 1200₽",
        service5: "Обработка пальцев - 1000₽",
        service6: "Покрытие гель-лак - 600₽",
        service7: "Удаление стержневой мозоля - 300₽",
        service8: "Под ногтевого мозоля - 250₽",
        service9: "Удаления омозоллелостей - 500₽",
        service10: "Перевязка - 300₽",
        service11: "Установка скобы 3ТО - 3000₽",
        service12: "Установка титановой нити - 3000₽",
      },
      insta: "https://www.instagram.com/p/Cey443ptgVm/?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79280127404",
      geo: [45.016492574572176, 41.90269799999997],
    },
    {
      id: "13",
      profession: "manikur",
      location: "sever",
      name: "Олеся",
      adress: "ул. Лазо 127",
      description: "",
      phone: "+79187859703",
      promo: "БОНУС 100₽",
      imgs: {
        img1: "url(/assets/images/users/13/01.jpg)",
        img2: "url(/assets/images/users/13/02.jpg)",
        img3: "url(/assets/images/users/13/03.jpg)",
      },
      services: {
        service1: "Маникюр - 600₽",
        service2: "Маникюр с покрытием гель лак - 1000₽",
        service3: "Маникюр с укреплением гелем - 1200₽",
        service4: "Френч - 200₽",
        service5: "Аэрография - 200₽",
        service6: "Снятие материала без покрытия - 200₽",
        service7: "Снятие материала другого мастера - 100₽",
        service8: "Мужской маникюр - 600₽",
      },
      insta: "https://www.instagram.com/olesia_nail26",
      whats: "https://wa.me/79187859703",
      geo: [45.06701607457427, 41.941208499999966],
    },
    {
      id: "14",
      profession: "pedikur",
      location: "sever",
      name: "Олеся",
      adress: "ул. Лазо 127",
      description: "",
      phone: "+79187859703",
      promo: "БОНУС 100₽",
      imgs: {
        img1: "url(/assets/images/users/14/01.jpg)",
        img2: "url(/assets/images/users/14/02.jpg)",
        img3: "url(/assets/images/users/14/03.jpg)",
        img4: "url(/assets/images/users/14/04.jpg)",
        img5: "url(/assets/images/users/14/05.jpg)",
        img6: "url(/assets/images/users/14/06.jpg)",
      },
      services: {
        service1: "Полный без покрытия - 1300₽",
        service2: "Полный с покрытием - 1700₽",
        service3: "Пальчики с покрытием - 1300₽",
        service4: "Пальчики без покрытия - 800₽",
        service5: "Медицинский педикюр - от 1600₽",
        service6: "Удаление бородавок - от 300₽",
        service7: "Стержневые мозоли - от 300₽-500₽",
        service8: "Установка титановой нити - 2000₽",
        service9: "Вростающие ногти  - от 300₽",
        service10: "Установка тампонады - 200₽",
        service11: "Мужской педикюр - от 1600₽-2600₽",
      },
      insta: "https://www.instagram.com/olesia_nail26",
      whats: "https://wa.me/79187859703",
      geo: [45.06701607457427, 41.941208499999966],
    },
    {
      id: "15",
      profession: "pedikur",
      location: "sever",
      name: "Евгения",
      adress: "Кулакова, 49/6",
      description: "",
      phone: "+79054427758",
      promo: "2606S",
      imgs: {
        img1: "url(/assets/images/users/15/01.jpeg)",
        img2: "url(/assets/images/users/15/02.jpeg)",
      },
      services: {
        service1: "Педикюр гигиенический - 900₽",
        service2: "Педикюр с покрытием гель лак - 1200",
      },
      insta: "https://instagram.com/nailmaster_evgenia26?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79054427758",
      geo: [45.07072707458384, 41.93570199999999],
    },
    {
      id: "16",
      profession: "massage",
      location: "yug",
      name: "Виталий",
      adress: "Тухачевского 18",
      description: "",
      phone: "+79097709298",
      promo: "290184",
      imgs: {
        img1: "url(/assets/images/users/16/01.jpeg)",
        img2: "url(/assets/images/users/16/02.jpeg)",
      },
      services: {
        service1: "Коррекция фигуры - 700₽",
        service2: "Антицеллюлитная (программа) - 700₽",
        service3: "Бразильская попка - 500₽",
        service4: "Тонизирующий массаж бамбуковыми палками - 700₽",
        service5: "Баночный массаж (китайская банка) - 700₽",
        service6: "Медовый массаж - 700₽",
        service7: "Йони массаж (эро-релакс,для девушек) - 2000₽",
        service8:
          "Виды общего массажа:<br> - классический - 1000₽ (ж), 1500₽ (м)<br> - лимфодренажный - 1000₽ (ж), 1500₽ (м)<br> - масляный - 1000₽ (ж), 1500₽ (м) <br> - спортивный - 1000₽ (ж), 1500₽ (м) <br> - тонизирующий - 1000₽ (ж), 1500₽ (м) <br> - комбинированный - 1000₽-2000₽",
        service9: "Антистресс массаж - 1000₽",
        service10:
          "Спортивный массаж:<br> - перед тренировками - 700₽-1500₽ <br> - после нагрузок - 700₽-1500₽ <br> - при травмах - 700₽-1500₽",
        service11:
          "Лечебные виды массажа: <br> - гипертонии - 700₽ <br> - гипотонии - 700₽ <br> - вялых параличах - 500₽-1000₽  <br> - спастических параличах - 500₽-1000₽ <br> - гиперкифозах - 700₽ <br> - гиперлордозах - 700₽ <br> - при сколиозе - 700₽ <br> - при плоскостопии - 500₽ <br> - при остеохондрозе - 300₽-700₽ <br> - болезненных месячных - 700₽ <br> - болезнях ОД (в том числе в пост Ковидный период) - 700₽ <br> - болезнях ЖКТ - 700₽",
        service12:
          "Возможен выезд по Михайловску  и Ставрополю на адрес клиента -  +300₽-500₽",
      },
      insta: "https://instagram.com/profi.massazh.stavropol",
      whats: "https://wa.me/79097709298",
      telegram: "https://t.me/massazh_stavropol",
      geo: [45.013542074590156, 41.912884999999996],
    },
    {
      id: "17",
      profession: "manikur",
      location: "yug",
      name: "Наталья",
      adress: "50 лет ВЛКСМ 79",
      description: "",
      phone: "+79887391237",
      promo: "nata26",
      imgs: {
        img1: "url(/assets/images/users/17/01.jpeg)",
        img2: "url(/assets/images/users/17/02.jpeg)",
        img3: "url(/assets/images/users/17/03.jpeg)",
        img4: "url(/assets/images/users/17/04.jpeg)",
        img5: "url(/assets/images/users/17/05.jpeg)",
        img6: "url(/assets/images/users/17/06.jpeg)",
        img7: "url(/assets/images/users/17/07.jpeg)",
        img8: "url(/assets/images/users/17/08.jpeg)",
        img9: "url(/assets/images/users/17/09.jpeg)",
        img10: "url(/assets/images/users/17/10.jpeg)",
      },
      services: {
        service1: "Мужской - 600₽",
        service2: "Женский, детский - 500₽",
        service3: "Маникюр с покрытием гель-лаком - 1200₽",
        service4: "Наращивание - от 1800₽ до 2500₽",
        service5: "Коррекция наращенных - от 1400₽ до 1800₽",
        service6: "Кератиновое наращивание - 1800₽",
        service7:
          "Коррекция кератиновых - 3000₽  <br> (Простой дизайн, френч, ремонт 1 ногтя, укрепление акрилом - входят в стоимость)",
        service8: "Консультация проблемные ногти - 500₽",
        service9: "Удаление ладонных бородавок - от 350₽ до 500₽",
        service10:
          "Восстановление и установка коррекционных систем ( титановая нить, 3ТО) - от 1000₽ до 2000₽ <br><br>  Полная стерильность. Одноразовые материалы.<br>Работаю только качественными матермалами на современном оборудовании.<br> Ежегодные курсы повышения квалификации. Всегда в тренде. ",
      },
      insta: "https://www.instagram.com/p/CQjOFSOJ4RZ/?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79887391237",
      vk: "https://vk.com/mechta.nails26",
      geo: [45.002517574587294, 41.9200894999999],
    },
    {
      id: "18",
      profession: "pedikur",
      location: "yug",
      name: "Наталья",
      adress: "50 лет ВЛКСМ 79",
      description: "",
      phone: "+79887391237",
      promo: "nata26",
      imgs: {
        img1: "url(/assets/images/users/18/01.jpeg)",
        img2: "url(/assets/images/users/18/02.jpeg)",
        img3: "url(/assets/images/users/18/03.jpeg)",
        img4: "url(/assets/images/users/18/04.jpeg)",
        img5: "url(/assets/images/users/18/05.jpeg)",
        img6: "url(/assets/images/users/18/06.jpeg)",
        img7: "url(/assets/images/users/18/07.jpeg)",
        img8: "url(/assets/images/users/18/08.jpeg)",
        img9: "url(/assets/images/users/18/09.jpeg)",
        img10: "url(/assets/images/users/18/10.jpeg)",
      },
      services: {
        service1:
          "Эстетический  педикюр полный (пальцы + стопа): <br> - мужской  1600₽ <br> - женский, детский  1200₽ <br> - обработка пальцев  1000₽ <br> - обработка стопы (без обработки ногтей)  1000₽ <br> - полный педикюр с покрытием гель-лаком  1600₽ <br> - покрытие лаком 300₽",
        service2: "Подолог: <br> - консультация подолога - 500₽",
        service3:
          "Подологический педикюр: <br> - мужской - 2200₽ <br> - женский - 2000₽ <br> - обработка вросшего ногтя - 500₽-1000₽ <br> - установка КС (Титановой нити и 3ТО) - 2000₽ <br> - коррекция КС - 1500₽ <br> - при установке 2-х КС  коррекция - 1000₽ <br> - деструкция бородавок - 350₽-500₽ <br> - удаление мозоли (стержневой, сухой) - 350₽-700₽ <br> - обработка пальцев или стоп ( онихолиз, онихомикоз, дерматомикоз) - 1200₽-1500₽ <br> - ортезы (изготовление индивидуальных межпальцевых) - 300₽-1000₽",
        service4:
          "Восстановление и установка коррекционных систем ( титановая нить, 3ТО) - от 1000₽ до 2000₽ <br><br>  Полная стерильность. Одноразовые материалы.<br>Работаю только качественными матермалами на современном оборудовании.<br> Ежегодные курсы повышения квалификации. Всегда в тренде. ",
      },
      insta: "https://www.instagram.com/p/CQjOFSOJ4RZ/?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79887391237",
      vk: "https://vk.com/mechta.nails26",
      geo: [45.002517574587294, 41.9200894999999],
    },
    {
      id: "19",
      profession: "pedikur",
      location: "center",
      name: "Екатерина",
      adress: "Розы Люксембург 8 Б",
      description: "",
      phone: "+79289559920",
      promo: "Moskvitina",
      imgs: {
        img1: "url(/assets/images/users/19/01.jpeg)",
        img2: "url(/assets/images/users/19/02.jpeg)",
        img3: "url(/assets/images/users/19/03.jpeg)",
        img4: "url(/assets/images/users/19/04.jpeg)",
        img5: "url(/assets/images/users/19/05.jpeg)",
        img6: "url(/assets/images/users/19/06.jpeg)",
        img7: "url(/assets/images/users/19/07.jpeg)",
        img8: "url(/assets/images/users/19/08.jpeg)",
      },
      services: {
        service1:
          "Полный педикюр Смарт (обработка стопы +обработка пальчики +покрытие гель- лак) - 1500₽",
        service2: "Только обработка пальчики +покрытие гель лак - 1000₽",
        service3: "Только обработка стопа - 1000₽",
        service4: "Только обработка стопа +обработка пальчики - 1200₽",
        service5: "Только обработка пальчиков - 500₽",
        service6: "Покрытие обычным лаком - 100₽",
        service7:
          "Принимаю в кабинете: <br> - Опыт 7 лет <br> - Дезинфекция /Стерилизация <br> - Одноразовый расходный материал <br> - Мед. книжка",
      },
      insta: "https://instagram.com/moskvitina.nails26?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79289559920",
      vk: "https://vk.com/ekaterina26stav",
      geo: [45.04540607456985, 41.98095900000001],
    },
    {
      id: "20",
      profession: "manikur",
      location: "center",
      name: "Екатерина",
      adress: "Розы Люксембург 8 Б",
      description: "",
      phone: "+79289559920",
      promo: "Moskvitina",
      imgs: {
        img1: "url(/assets/images/users/20/01.jpeg)",
        img2: "url(/assets/images/users/20/02.jpeg)",
        img3: "url(/assets/images/users/20/03.jpeg)",
        img4: "url(/assets/images/users/20/04.jpeg)",
        img5: "url(/assets/images/users/20/05.jpeg)",
        img6: "url(/assets/images/users/20/06.jpeg)",
        img7: "url(/assets/images/users/20/07.jpeg)",
      },
      services: {
        service1: "Наращивание/коррекция от другого мастера - 1500₽",
        service2:
          "Коррекция моего геля - 1300₽ (Длина до 3 ки включительно.)<br> - Свыше 3 ки +100 р за размер. (Маникюр и дизайн на 4 х ногтях входит в стоимость) <br> - Дизайн свыше 4 х ноготков +50 р за ноготок.",
        service3: "Покрытие гель-лаком - 1000₽",
        service4: "Снятие нарощенных ногтей (без последущего покрытия) - 300₽",
        service5: "Снятие покрытия гель лак (без последущего покрытия) - 200₽",
        service6:
          "Принимаю в кабинете: <br> - Опыт 7 лет <br> - Дезинфекция /Стерилизация <br> - Одноразовый расходный материал <br> - Мед. книжка",
      },
      insta: "https://instagram.com/moskvitina.nails26?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79289559920",
      vk: "https://vk.com/ekaterina26stav",
      geo: [45.04540607456985, 41.98095900000001],
    },
    {
      id: "21",
      profession: "depil",
      location: "center",
      name: "Милана",
      adress: "Ленина 468",
      description: "",
      phone: "+79064624930",
      promo: "код2022mila",
      imgs: {
        img1: "url(/assets/images/users/21/01.jpeg)",
        img2: "url(/assets/images/users/21/02.jpeg)",
        img3: "url(/assets/images/users/21/03.jpeg)",
        img4: "url(/assets/images/users/21/04.jpeg)",
      },
      services: {
        service1: "Подмышки + бикини + ноги полностью - 1500₽",
        service2: "Подмышки + бикини + голень/бедро - 1300₽",
        service3: "Подмышки + бикини + руки + ноги - 2000₽",
        service4: "Все тело - 2800₽",
        service5: "Лицо, одна зона - 100₽",
        service6: "Подмышечные впадины - 300₽",
        service7: "Живот/спина - 300₽",
        service8: "Дорожка на животе - 100₽",
        service9: "Бикини - 500₽/700₽",
        service10: "Ягодицы - 300₽",
        service11: "Голень/бедро - 500₽",
        service12: "Ноги полностью - 900₽",
        service13: "Руки - 300₽/500₽",
      },
      insta: "https://www.instagram.com/shugar_mila_stav",
      whats: "https://wa.me/79064624930",
      geo: [45.03640057457221, 41.920700499999974],
    },
    {
      id: "22",
      profession: "depil",
      location: "center",
      name: "Яна",
      adress: "Михаила Морозова 73",
      description: "",
      phone: "+79280113041",
      promo: "Gladko20",
      imgs: {
        img1: "url(/assets/images/users/22/01.jpg)",
        img2: "url(/assets/images/users/22/02.jpg)",
        img3: "url(/assets/images/users/22/03.jpg)",
        img4: "url(/assets/images/users/22/04.jpg)",
        img5: "url(/assets/images/users/22/06.jpg)",
        img6: "url(/assets/images/users/22/07.jpg)",
        img7: "url(/assets/images/users/22/08.jpg)",
        img8: "url(/assets/images/users/22/09.jpg)",
      },
      services: {
        service1: "Лицо (1 зона ) - 200₽",
        service2: "Подмышечные впадины - 300₽",
        service3: "Руки до локтя - 500₽",
        service4: "Полностью - 700₽",
        service5: "Бикини классика - 600₽",
        service6: "Бикини глубокое - 900₽",
        service7: "Живот/спина - 500₽",
        service8: "Голень/бедро - 600₽",
        service9: "Ноги полностью - 900₽",
        service10:
          "Комплексы: <br> Все включено: <br> - Подмышечные впадины+руки+ноги полностью+ гл. Бикини - 2400₽ <br>Комплекс xl:<br>  - Подмышечные впадины, глубокое бикини, ноги полностью - 1900₽ <br>Комплекс М:<br>  - Подмышечные впадины, глубокое бикини, голень/бедро (с коленом)  - 1600₽<br>Комплекс S::<br>  - Подмышечные впадины, классическое бикини , голень/ бедро ( с коленом)- 1400₽",
        service11:
          " Я сертифицированный мастер восковой депиляции, работаю только на профессиональной линейки премиум  класса ( italwax) все расходники одноразовые. Работаю быстро, качественно, чисто. <br> <br>Если ты устала от бесконечного раздражения, и щетины уже на следующий день после бритья, тогда тебе точно стоит посетить мой уютный кабинет и Я помогу тебе избавиться от этой проблемы.",
      },
      insta: "https://instagram.com/depilstav_yana?r=nametag",
      whats: "https://wa.me/79280113041",
      vk: "https://vk.com/depilstav_yana",
      telegram: "https://t.me/Depilstav_yana",
      geo: [45.040342574582404, 41.951000499999935],
    },
    {
      id: "23",
      profession: "visage",
      location: "center",
      name: "Ксения Блок",
      adress: "ул. Дзержинского 160",
      description: "",
      phone: "+79187719684",
      promo: "Акция",
      imgs: {
        img1: "url(/assets/images/users/23/01.jpg)",
        img2: "url(/assets/images/users/23/02.jpg)",
        img3: "url(/assets/images/users/23/03.jpeg)",
        img4: "url(/assets/images/users/23/04.jpeg)",
        img5: "url(/assets/images/users/23/05.jpeg)",
        img6: "url(/assets/images/users/23/06.jpeg)",
        img7: "url(/assets/images/users/23/07.jpeg)",
        img8: "url(/assets/images/users/23/08.jpeg)",
        img9: "url(/assets/images/users/23/09.jpeg)",
        img10: "url(/assets/images/users/23/10.jpeg)",
        img11: "url(/assets/images/users/23/11.jpeg)",
      },
      services: {
        service1: "Дневной макияж  - 1000₽",
        service2: "Вечерний макияж - 1400₽",
        service3: "Свадебный макияж - 2000₽",
      },
      insta: "https://instagram.com/visblok",
      whats: "https://wa.me/79187719684",
      geo: [45.04241257458771, 41.95503399999994],
    },
    {
      id: "24",
      profession: "manikur",
      location: "yug",
      name: "Оксана",
      adress: "45 параллель, 32",
      description: "",
      phone: "+79620010031",
      promo: "lisichka26",
      imgs: {
        img1: "url(/assets/images/users/24/01.jpeg)",
        img2: "url(/assets/images/users/24/02.jpeg)",
        img3: "url(/assets/images/users/24/03.jpeg)",
        img4: "url(/assets/images/users/24/04.jpeg)",
        img5: "url(/assets/images/users/24/05.jpeg)",
        img6: "url(/assets/images/users/24/06.jpeg)",
        img7: "url(/assets/images/users/24/07.jpeg)",
        img8: "url(/assets/images/users/24/08.jpeg)",
      },
      services: {
        service1: "Аппаратный маникюр (без покрытия) - 400₽",
        service2: "Маникюр + укрепление + покрытие гель лак- 850₽",
        service3: "Коррекция - 1000₽",
        service4: "Наращивание ногтей - 1300₽",
        service5: "Коррекция (Наращивание) - 1150₽",
      },
      insta: "https://instagram.com/manikur_lisichka26",
      whats: "https://wa.me/79620010031",
      geo: [44.99864307460295, 41.91475349999997],
    },
    {
      id: "25",
      profession: "visage",
      location: "center",
      name: "Екатерина",
      adress: "Спартака, 2",
      description: "",
      phone: "+79620271473",
      promo: "PION",
      imgs: {
        img1: "url(/assets/images/users/25/01.jpeg)",
        img2: "url(/assets/images/users/25/02.jpeg)",
        img3: "url(/assets/images/users/25/03.jpeg)",
        img4: "url(/assets/images/users/25/04.jpeg)",
        img5: "url(/assets/images/users/25/05.jpeg)",
        img6: "url(/assets/images/users/25/06.jpeg)",
      },
      services: {
        service1: "Дневной макияж - 1700₽",
        service2: "Макияж на фотосессию - 1700₽",
        service3: "Вечерний макияж - 1900₽",
        service4: "Лифтинг-макияж  - 1900₽",
        service5: "Свадебный макияж  - 2100₽",
        service6:
          "Прически:<br>Укладка - 700₽ <br>Прическа - 900₽ <br>Детская причёска - 700₽  <br>Плетение кос - 700₽ ",
        service7: "Свадебный образ  - 2700₽",
        service8: "Комплекс вечерний макияж/лифтинг-макияж + прическа  - 2500₽",
      },
      insta: "https://instagram.com/k.zolotykh_?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79620271473",
      vk: "vk.com/id88449158",
      geo: [45.044189574592274, 41.985747499999974],
    },
    {
      id: "26",
      profession: "resnici",
      location: "yug",
      name: "Екатерина",
      adress: "Доваторцев 61",
      description: "",
      phone: "+79614625410",
      promo: "Золотых",
      imgs: {
        img1: "url(/assets/images/users/26/01.jpg)",
        img2: "url(/assets/images/users/26/02.jpg)",
        img3: "url(/assets/images/users/26/03.jpg)",
        img4: "url(/assets/images/users/26/04.jpg)",
        img5: "url(/assets/images/users/26/05.jpg)",
        img6: "url(/assets/images/users/26/06.jpg)",
        img6: "url(/assets/images/users/26/07.jpg)",
      },
      services: {
        service1: "Уголки - 1000₽",
        service2: "Классика- 1400₽",
        service3: "2D - 1700₽",
        service4: "3D - 2000₽",
        service5: "Мокрый эффект  - 1700₽",
        service6: "Снятие без последующего наращивания  - 300₽",
      },
      insta: "https://instagram.com/pion_lash_studio?igshid=NmNmNjAwNzg=",
      whats: "https://wa.me/79614625410",
      geo: [45.004977574593674, 41.92593749999999],
    },
    {
      id: "27",
      profession: "manikur",
      location: "yug",
      name: "Александра",
      adress: "50 лет ВЛКСМ 16И",
      description: "",
      phone: "+79131755408",
      promo: "красота26",
      imgs: {
        img1: "url(/assets/images/users/27/01.jpeg)",
        img2: "url(/assets/images/users/27/02.jpeg)",
        img3: "url(/assets/images/users/27/03.jpeg)",
        img4: "url(/assets/images/users/27/04.jpeg)",
        img5: "url(/assets/images/users/27/05.jpeg)",
        img6: "url(/assets/images/users/27/06.jpeg)",
        img7: "url(/assets/images/users/27/07.jpeg)",
        img8: "url(/assets/images/users/27/08.jpeg)",
        img9: "url(/assets/images/users/27/09.jpeg)",
      },
      services: {
        service1: "Маникюр без покрытия - 900₽",
        service2: "Маникюр с покрытием «камуфляж» - 1400₽",
        service3: "Маникюр с покрытием «всё включено» - 1700₽",
        service4: "Наращивание ногтей (дизайн в подарок) - 1950₽",
      },
      insta: "https://instagram.com/pirogova_nails_",
      whats: "https://wa.me/79131755408 ",
      vk: "vk.com/pirogovanails",
      geo: [45.013893074591046, 41.92451800000001],
    },
    {
      id: "28",
      profession: "visage",
      location: "yug",
      name: "Катерина",
      adress: "50 лет ВЛКСМ 23/6",
      description: "",
      phone: "+79624329292",
      promo: "Sokol",
      imgs: {
        img1: "url(/assets/images/users/28/01.jpeg)",
        img2: "url(/assets/images/users/28/02.jpg)",
        img3: "url(/assets/images/users/28/03.jpeg)",
        img4: "url(/assets/images/users/28/04.jpg)",
        img5: "url(/assets/images/users/28/05.jpeg)",
        img6: "url(/assets/images/users/28/06.jpeg)",
      },
      services: {
        service1: "Вечерний макияж - 1500₽",
        service2: "Макияж для фотосессии - 1500₽",
        service3: "Макияж и создание причёски - от 2500₽",
        service4: "Репетиция свадебного макияжа  - от 1500₽",
        service5: "Причёски для взрослых и деток  - от 1500₽",
        service6:
          "Плетение / фальш Дреды - стоимость обсуждается <br> <br>5 лет непрерывного опыта, постоянное повышение. Создаю стильные, современные, стойкие причёски, любой макияж, без ощущения тона на лице.",
      },
      insta: "https://www.instagram.com/sokolova_ea_mua/",
      whats: "https://wa.me/79624329292",
      vk: "https://vk.com/rosaselvatika",
      geo: [45.015874574570546, 41.92382649999999],
    },
    {
      id: "29",
      profession: "manikur",
      location: "yug",
      name: "Екатерина",
      adress: "45 Параллель, 73",
      description: "",
      phone: "+79624247550",
      promo: "pilka",
      imgs: {
        img1: "url(/assets/images/users/29/01.jpeg)",
        img2: "url(/assets/images/users/29/02.jpeg)",
        img3: "url(/assets/images/users/29/03.jpeg)",
        img4: "url(/assets/images/users/29/04.jpeg)",
        img5: "url(/assets/images/users/29/05.jpeg)",
      },
      services: {
        service1: "Маникюр аппаратный, комбинированный - 400₽",
        service2: "Покрытие гель-лаком без укрепления - 800₽",
        service3: "Покрытие гель-лаком с укреплением - 900₽",
        service4: "Коррекция - 900₽",
        service5:
          "Наращивание ногтей до 2  - от 1200₽ <br><br> В сфере ногтевого сервиса работаю 2 года, все расходники одноразовые, инструмент проходит все этапы стерилизации",
      },
      insta: "",
      whats: "https://wa.me/79624247550",
      vk: "http://vk.com/id747006123",
      geo: [45.00152357458477, 41.90437799999992],
    },
    {
      id: "30",
      profession: "pedikur",
      location: "yug",
      name: "Екатерина",
      adress: "45 Параллель, 73",
      description: "",
      phone: "+79624247550",
      promo: "pilka",
      imgs: {
        img1: "url(/assets/images/users/30/01.jpeg)",
        img2: "url(/assets/images/users/30/02.jpeg)",
        img3: "url(/assets/images/users/30/03.jpeg)",
        img4: "url(/assets/images/users/30/04.jpeg)",
        img5: "url(/assets/images/users/30/05.jpeg)",
      },
      services: {
        service1: "Педикюр полный - 1000₽",
        service2: "Педикюр полный с покрытием - 1200₽",
        service3:
          "Педикюр пальчики с покрытием  - 800₽ <br><br> В сфере ногтевого сервиса работаю 2 года, все расходники одноразовые, инструмент проходит все этапы стерилизации",
      },
      insta: "",
      whats: "https://wa.me/79624247550",
      vk: "http://vk.com/id747006123",
      geo: [45.00152357458477, 41.90437799999992],
    },
    {
      id: "31",
      profession: "visage",
      location: "center",
      name: "Кира",
      adress: "Карла маркса, 4б",
      description: "",
      phone: "+79034145220",
      promo: "KIRABEAUTY",
      imgs: {
        img1: "url(/assets/images/users/31/01.jpeg)",
        img2: "url(/assets/images/users/31/02.jpeg)",
        img3: "url(/assets/images/users/31/03.jpeg)",
        img4: "url(/assets/images/users/31/04.jpeg)",
        img5: "url(/assets/images/users/31/05.jpeg)",
      },
      services: {
        service1: "Дневной макияж - 2000₽",
        service2: "Вечерний макияж - 2000₽ - 2500₽",
        service3: "Свадебный макияж - 2500₽",
        service4: "Экспресс образ  - 3500₽",
        service5: "Вечерний образ  - 4000₽ - 4500₽",
        service6: "Свадебный образ - 4500₽ - 5000₽",
        service7: "Причёска  - 2000₽",
        service8: "Свадебная причёска  - 2500₽",
        service9:
          "Укладка  - 1500₽ - 2000₽ <br> <br>Возможен выезд по городу <br><br> Владелица кабинета красоты #KIRABEAUTYST , а ещё я занимаюсь фотографией и активно пополняю своё портфолио.<br><br> Вы спросите как это работает, ВИЗАЖИСТ/ФОТОГРАФ в одном лице и почему это удобно?!<br><br> 1. ВЫГОДНО, если вы делаете полный образ и съёмку у меня, по стоимости это выходит дешевле, так как у меня самые вкусные условия для пакета «Премиум» <br><br> 2. КОМФОРТНО, вы не занимаетесь состыковками  даты и времени между стилистом и фотографом, не тратите время на дорогу. А приезжаете в мой кабинет красоты  в центре города, где начинается наша работа над образом и мы вместе отправляемся к месту локации на моем 🚗 <br><br> 3. ПРОФЕССИОНАЛЬНО, я постоянно пополняю багаж своих знаний и слежу за тенденциями и модой. Мои клиенты всегда получаю бесплатный  🎁 в виде мини видеоролика или рекомендации и помощь при покупке косметических средств.",
      },
      insta: "https://www.instagram.com/p/CaH73h-gH-s/?igshid=MDE2OWE1N2Q=",
      whats: "https://wa.me/79034145220",
      vk: "vk.com/kiravolobueva_art",
      geo: [45.053066574563935, 41.99506249999999],
    },
    {
      id: "32",
      profession: "manikur",
      location: "yug",
      name: "diiin_nailsss",
      adress: "Родосская, 5",
      description: "",
      phone: "+79880952190",
      promo: "diiin_nailsss",
      imgs: {
        img1: "url(/assets/images/users/32/01.jpeg)",
        img2: "url(/assets/images/users/32/02.jpeg)",
        img3: "url(/assets/images/users/32/03.jpeg)",
        img4: "url(/assets/images/users/32/04.jpeg)",
        img5: "url(/assets/images/users/32/05.jpeg)",
      },
      services: {
        service1: "Маникюр классический - 400₽",
        service2: "Маникюр аппаратный - 500₽",
        service3: "Cпа-уход - 200₽",
        service4:
          "мужской маникюр - 400₽ <br><br> Меня зовут Диана, я начинающий мастер, повышаю квалификацию и работаю в данной сфере",
      },
      insta: "https://instagram.com/diiin_nailsss?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79880952190",
      geo: [45.00279857458807, 41.90394649999996],
    },
    {
      id: "33",
      profession: "pedikur",
      location: "yug",
      name: "diiin_nailsss",
      adress: "Родосская, 5",
      description: "",
      phone: "+79880952190",
      promo: "diiin_nailsss",
      imgs: {
        img1: "url(/assets/images/users/33/01.jpeg)",
        img2: "url(/assets/images/users/33/02.jpeg)",
      },
      services: {
        service1: "Комбинированный педикюр - 500₽",
        service2: "Обрезной педикюр - 500₽",
        service3:
          "Аппаратный педикюр - 600₽ <br><br> Меня зовут Диана, я начинающий мастер, повышаю квалификацию и работаю в данной сфере",
      },
      insta: "https://instagram.com/diiin_nailsss?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79880952190",
      geo: [45.00279857458807, 41.90394649999996],
    },
    {
      id: "34",
      profession: "pedikur",
      location: "yug",
      name: "Екатерина",
      adress: "Пирогова, 36б",
      description: "",
      phone: "+79188051803",
      promo: "EKATERINA",
      imgs: {
        img1: "url(/assets/images/users/34/01.jpg)",
        img2: "url(/assets/images/users/34/02.jpg)",
        img3: "url(/assets/images/users/34/03.jpg)",
      },
      services: {
        service1: "Педикюр классический - 800₽",
        service2: "Педикюр аппаратный - 1000₽",
        service3: "Только пальчики - 500₽",
        service4: "Только стопы - 500₽",
        service5: "Покрытие - + 300₽",
        service6: "Снятие чужого покрытия - 200₽",
        service7: "Покрытие обычным лаком - 100₽ <br><br> Мужской педикюр:",
        service8: "Классический - 800₽",
        service9: "Аппаратный - 1200₽",
        service10: "Стопы - 500₽",
        service11:
          "Пальцы - 500₽ <br><br> Мастер с опытом работы более 4 лет.<br>Принимаю в уютном салоне на юге города.<br>Все инструменты проходят тщатнльную стерелизацию.<br>Материалы премиум класса.<br>Только по предварительной записи.</vr>",
      },
      insta: "https://www.instagram.com/__ewgeniya__26?r=nametag",
      whats: "https://wa.me/79188051803",
      geo: [45.00703007457341, 41.917178999999926],
    },
    {
      id: "35",
      profession: "manikur",
      location: "yug",
      name: "Екатерина",
      adress: "Пирогова, 36б",
      description: "",
      phone: "+79188051803",
      promo: "EKATERINA",
      imgs: {
        img1: "url(/assets/images/users/35/01.jpg)",
        img2: "url(/assets/images/users/35/02.jpg)",
        img3: "url(/assets/images/users/35/03.jpg)",
        img4: "url(/assets/images/users/35/04.jpg)",
        img5: "url(/assets/images/users/35/05.jpg)",
      },
      services: {
        service1: "Маникюр обрезной - 500₽",
        service2: "Маникюр аппаратный - 400₽",
        service3: "Покрытие гель-лак - +500₽",
        service4: "Укрепление - 200₽",
        service5: "Ремонт - 100₽",
        service6: "Дизайн (1 ноготь)  - 50₽/100₽",
        service7: "Покрытие обычным лаком - 100₽",
        service8: "Снятие чужого покрытия - 200₽",
        service9:
          "Наращивание ногтей <br> - До 2 - 1200₽<br> - От 3 - 1300₽ <br><br>Мужской маникюр:<br>",
        service10: "Обрезной - 500₽",
        service11:
          "Аппаратный - 700₽ <br><br> Мастер с опытом работы более 4 лет.<br>Принимаю в уютном салоне на юге города.<br>Все инструменты проходят тщатнльную стерелизацию.<br>Материалы премиум класса.<br>Только по предварительной записи.</vr>",
      },
      insta: "https://www.instagram.com/__ewgeniya__26?r=nametag",
      whats: "https://wa.me/79188051803",
      geo: [45.00703007457341, 41.917178999999926],
    },
    {
      id: "36",
      profession: "manikur",
      location: "yug",
      name: "Виктория",
      adress: "Тухачевского, 20/2",
      description: "",
      phone: "+79197441519",
      promo: "paaniq56",
      imgs: {
        img1: "url(/assets/images/users/36/01.jpg)",
        img2: "url(/assets/images/users/36/02.jpg)",
        img3: "url(/assets/images/users/36/03.jpg)",
        img4: "url(/assets/images/users/36/04.jpg)",
        img5: "url(/assets/images/users/36/05.jpg)",
        img6: "url(/assets/images/users/36/05.jpg)",
        img7: "url(/assets/images/users/36/05.jpg)",
      },
      services: {
        service1: "Маникюр + покрытие гель-лак - 800₽",
        service2: "Комби маникюр - 300₽",
        service3: "Коррекция - 700₽",
        service4:
          "Укрепление гелем - 900₽ <br><br> Опыт работы 2 года.<br> Прошла обучение в центре Натальи Болдурчиди.<br> Работаю на дому.<br> Готова к экзаменам с дизайнами",
      },
      insta: "https://instagram.com/viki.nails_26?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79197441519",
      vk: "https://vk.com/paaniqw",
      geo: [45.01407107459149, 41.90913899999997],
    },
    {
      id: "37",
      profession: "visage",
      location: "center",
      name: "Ольга Красит",
      adress: "Мира, 355",
      description: "",
      phone: "+79507391106",
      promo: "beautyStav",
      imgs: {
        img1: "url(/assets/images/users/37/01.jpg)",
        img2: "url(/assets/images/users/37/02.jpg)",
        img3: "url(/assets/images/users/37/03.jpg)",
        img4: "url(/assets/images/users/37/04.jpg)",
        img5: "url(/assets/images/users/37/05.jpg)",
        img6: "url(/assets/images/users/37/06.jpg)",
        img7: "url(/assets/images/users/37/07.jpg)",
        img8: "url(/assets/images/users/37/08.jpg)",
        img9: "url(/assets/images/users/37/09.jpg)",
        img10: "url(/assets/images/users/37/10.jpg)",
      },
      services: {
        service1: "СВАДЕБНЫЙ образ- 4000₽ - 5000₽",
        service2: "ВЕЧЕРНИЙ образ - 3500₽ - 4500₽",
        service3: "ЭКСПРЕСС образ - 2500₽",
        service4: "ДНЕВНОЙ макияж  - 1500₽",
        service5: "ВЕЧЕРНИЙ макияж  - 2000₽",
        service6: "СВАДЕБНЫЙ макияж - 2500₽",
        service7: "РЕПЕТИЦИЯ образа  - 3000₽",
        service8: "Сценический макияж  - от 2000₽",
        service9: "Мужской макияж  - 1300₽",
        service10: "Детский макияж   - 500₽ (до 10 лет), 1000₽ (10-14 лет)",
        service11: "Макияж для фото или видео сессии   - от 2000₽",
        service12: "ПРИЧЁСКА   - 2000₽",
        service13: "ЛОКОНЫ   - 1500₽",
        service14:
          "Длина/густота - +500₽  <br> <br>Возможен выезд по городу <br><br> Будем знакомы, меня зовут Ольга, я - стилист и визажист уже 8 лет!<br> За это время выполнила > 2000 макияжей, оформила > 1000 бровей",
      },
      insta: "https://instagram.com/olga_krasit",
      whats: "https://wa.me/79507391106",
      vk: "https://vk.com/olga_krasit",
      geo: [45.03665507459848, 41.958662999999994],
    },
    {
      id: "38",
      profession: "visage",
      location: "yug",
      name: "Ольга Красит",
      adress: "Рогожникова, 17",
      description: "",
      phone: "+79507391106",
      promo: "beautyStav",
      imgs: {
        img1: "url(/assets/images/users/38/01.jpg)",
        img2: "url(/assets/images/users/38/02.jpg)",
        img3: "url(/assets/images/users/38/03.jpg)",
        img4: "url(/assets/images/users/38/04.jpg)",
        img5: "url(/assets/images/users/38/05.jpg)",
        img6: "url(/assets/images/users/38/06.jpg)",
        img7: "url(/assets/images/users/38/07.jpg)",
        img8: "url(/assets/images/users/38/08.jpg)",
        img9: "url(/assets/images/users/38/09.jpg)",
        img10: "url(/assets/images/users/38/10.jpg)",
      },
      services: {
        service1: "СВАДЕБНЫЙ образ- 4000₽ - 5000₽",
        service2: "ВЕЧЕРНИЙ образ - 3500₽ - 4500₽",
        service3: "ЭКСПРЕСС образ - 2500₽",
        service4: "ДНЕВНОЙ макияж  - 1500₽",
        service5: "ВЕЧЕРНИЙ макияж  - 2000₽",
        service6: "СВАДЕБНЫЙ макияж - 2500₽",
        service7: "РЕПЕТИЦИЯ образа  - 3000₽",
        service8: "Сценический макияж  - от 2000₽",
        service9: "Мужской макияж  - 1300₽",
        service10: "Детский макияж   - 500₽ (до 10 лет), 1000₽ (10-14 лет)",
        service11: "Макияж для фото или видео сессии   - от 2000₽",
        service12: "ПРИЧЁСКА   - 2000₽",
        service13: "ЛОКОНЫ   - 1500₽",
        service14:
          "Длина/густота - +500₽  <br> <br>Возможен выезд по городу <br><br> Будем знакомы, меня зовут Ольга, я - стилист и визажист уже 8 лет!<br> За это время выполнила > 2000 макияжей, оформила > 1000 бровей",
      },
      insta: "https://instagram.com/olga_krasit",
      whats: "https://wa.me/79507391106",
      vk: "https://vk.com/olga_krasit",
      geo: [45.010095074581244, 41.90198850000003],
    },
    {
      id: "39",
      profession: "volosi",
      location: "center",
      name: "Анна hairstylist",
      adress: "Добролюбова, 26",
      description: "",
      promo: "sheik",
      phone: "+79289518469",
      imgs: {
        img1: "url(/assets/images/users/39/01.jpg)",
        img2: "url(/assets/images/users/39/02.jpg)",
        img3: "url(/assets/images/users/39/03.jpg)",
        img4: "url(/assets/images/users/39/04.jpg)",
        img5: "url(/assets/images/users/39/05.jpg)",
        img6: "url(/assets/images/users/39/06.jpg)",
        img7: "url(/assets/images/users/39/07.jpg)",
      },
      services: {
        service1:
          "Итальянское наращивание волос , загущение волос:<br> &nbsp - 1 капсула стандарт 20₽; <br> &nbsp - 1 микро капсула 25₽; <br> &nbsp - 1 нано капсула 28₽;",
        service2:
          "Примерная стоимость - от 3000₽ - 7000₽ (за услугу) <br><br> ✅Сертифицированный мастер<br>🎀Наращивание и загущение волос<br>🎀Коррекция и снятие любой сложности<br> 🎀Капсуляция среза (микро,нано,стандарт)<br><br>Делаю качественно , имеются профессиональные сертификаты. «Крепко держаться» это про мои капсулки. Успей прийти ко мне на консультацию 🥳 От меня все уходят с улыбкой , стань одной из них :)",
      },
      insta: "https://instagram.com/hair_sheik_stav",
      whats: "https://wa.me/79289518469",
      geo: [45.039069074604676, 41.992727],
    },
    {
      id: "40",
      profession: "permanent",
      location: "center",
      name: "Наталья",
      adress: "Дзержинского, 114в",
      description: "",
      promo: "бьюти ПМ",
      phone: "+79887086028",
      imgs: {
        img1: "url(/assets/images/users/40/01.jpeg)",
        img2: "url(/assets/images/users/40/02.jpeg)",
        img3: "url(/assets/images/users/40/03.jpeg)",
        img4: "url(/assets/images/users/40/04.jpeg)",
        img5: "url(/assets/images/users/40/05.jpeg)",
        img6: "url(/assets/images/users/40/06.jpeg)",
        img7: "url(/assets/images/users/40/07.jpeg)",
        img8: "url(/assets/images/users/40/08.jpeg)",
        img9: "url(/assets/images/users/40/09.jpeg)",
        img10: "url(/assets/images/users/40/10.jpeg)",
        img11: "url(/assets/images/users/40/11.jpeg)",
        img12: "url(/assets/images/users/40/12.jpeg)",
        img13: "url(/assets/images/users/40/13.jpeg)",
        img14: "url(/assets/images/users/40/14.jpeg)",
      },
      services: {
        service1: "ПМ бровей - 3500₽",
        service2: "Коррекция бровей - 2000₽",
        service3: "ПМ губ - 4000₽",
        service4: "Коррекция губ - 2500₽",
        service5: "ПМ век - 3000₽",
        service6: "Коррекция век - 2000₽",
        service7: "Ремувер (удаление ПМ/тату) - 2000₽",
        service8: "Рефреш бровей (обновление ПМ) - 2500₽",
        service9:
          "Рефреш губ - 3000₽ <br><br> Исправление ПМ другого мастера стоимость оговаривается с учётом результата работы.",
        service10: "Оформление + окрашивание бровей - 500₽",
        service11: "Долговременная укладка бровей - 700₽",
        service12:
          "Комплекс процедур оформление+окрашивание+ долговременная укладка - 1200₽",
        service13: "Коррекция воск/пинцет - 400₽",
        service14: "Депиляция лица - 500₽",
      },
      insta: "https://instagram.com/sevna_permanent?r=nametag",
      whats: "https://wa.me/79887086028",
      geo: [45.04421507456673, 41.970322999999986],
    },
    {
      id: "41",
      profession: "manikur",
      location: "yug",
      name: "Татьяна",
      adress: "50 лет ВЛКСМ, 53/3",
      description: "",
      phone: "+79097634800",
      promo: "nail_podo",
      imgs: {
        img1: "url(/assets/images/users/41/01.jpg)",
        img2: "url(/assets/images/users/41/02.jpg)",
        img3: "url(/assets/images/users/41/03.jpg)",
        img4: "url(/assets/images/users/41/04.jpg)",
        img5: "url(/assets/images/users/41/05.jpg)",
        img6: "url(/assets/images/users/41/06.jpg)",
        img7: "url(/assets/images/users/41/07.jpg)",
        img8: "url(/assets/images/users/41/08.jpg)",
        img9: "url(/assets/images/users/41/09.jpg)",
      },
      services: {
        service1: "Маникюр - от 800₽",
      },
      insta: "https://instagram.com/viki.nails_26?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79097634800",
      vk: "https://vk.com/club211895848",
      geo: [45.00715757459924, 41.92033200000003],
    },
    {
      id: "42",
      profession: "pedikur",
      location: "yug",
      name: "Татьяна",
      adress: "50 лет ВЛКСМ, 53/3",
      description: "",
      phone: "+79097634800",
      promo: "nail_podo",
      imgs: {
        img1: "url(/assets/images/users/42/01.jpg)",
        img2: "url(/assets/images/users/42/02.jpg)",
        img3: "url(/assets/images/users/42/03.jpg)",
        img4: "url(/assets/images/users/42/04.jpg)",
        img5: "url(/assets/images/users/42/05.jpg)",
        img6: "url(/assets/images/users/42/06.jpg)",
      },
      services: {
        service1: "Педикюр - от 1000₽",
        service2: "Консультация подолога - от 500₽",
      },
      insta: "https://instagram.com/viki.nails_26?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79097634800",
      vk: "https://vk.com/club211895848",
      geo: [45.00715757459924, 41.92033200000003],
    },
    {
      id: "43",
      profession: "manikur",
      location: "yug",
      name: "Дарья Ефимова",
      adress: "Тухачевского, 24/4",
      description: "",
      phone: "+79054939133",
      promo: "Знакомство с мастером",
      imgs: {
        img1: "url(/assets/images/users/43/01.jpeg)",
        img2: "url(/assets/images/users/43/02.jpeg)",
        img3: "url(/assets/images/users/43/03.jpeg)",
        img4: "url(/assets/images/users/43/04.jpeg)",
        img5: "url(/assets/images/users/43/05.jpeg)",
      },
      services: {
        service1: "Наращивание - 1500₽",
        service2: "Коррекция- 1300₽",
        service3: "Покрытие «гель-лак» - 1000₽",
        service4:
          "Френч - 200₽ <br><br>Снятие, ремонт, достраивание архитектуры, лёгкий дизайн входят в стоимость<br>За длину более 4 - доплата ",
      },
      insta: "https://instagram.com/d.efimovaa_nails",
      whats: "https://wa.me/79054939133",
      vk: "https://vk.com/id283204991",
      geo: [45.012740074588066, 41.90521349999998],
    },
    {
      id: "44",
      profession: "pedikur",
      location: "yug",
      name: "Дарья Ефимова",
      adress: "Тухачевского, 24/4",
      description: "",
      phone: "+79054939133",
      promo: "Знакомство с мастером",
      imgs: {
        img1: "url(/assets/images/users/44/01.jpeg)",
      },
      services: {
        service1: "Педикюр неполный (только пальчики) - 1000₽",
        service2: "Педикюр полный (пальчики+стопа) - 1500₽",
      },
      insta: "https://instagram.com/d.efimovaa_nails",
      whats: "https://wa.me/79054939133",
      vk: "https://vk.com/id283204991",
      geo: [45.012740074588066, 41.90521349999998],
    },
    {
      id: "45",
      profession: "volosi",
      location: "yug",
      name: "Диана",
      adress: "45 параллель, 73",
      description: "",
      phone: "+79187994048",
      promo: "STAILO",
      imgs: {
        img1: "url(/assets/images/users/45/01.jpeg)",
        img2: "url(/assets/images/users/45/02.jpeg)",
        img3: "url(/assets/images/users/45/03.jpeg)",
        img4: "url(/assets/images/users/45/04.jpeg)",
        img5: "url(/assets/images/users/45/05.jpeg)",
        img6: "url(/assets/images/users/45/06.jpeg)",
        img7: "url(/assets/images/users/45/07.jpeg)",
        img8: "url(/assets/images/users/45/08.jpeg)",
        img9: "url(/assets/images/users/45/09.jpeg)",
      },
      services: {
        service1: "Стрижки - от 400₽",
        service2: "Укладки - от 600₽",
        service3: "Окрашивания - от 1000₽",
        service4:
          "Прически - от 1000₽<br><br>Я Диана, мастер с опытом работы 1 год. Учту все ваши пожелания при выполнении услуг 🤗 ",
      },
      insta: "https://instagram.com/diana_stailo?igshid=NmNmNjAwNzg=",
      whats: "https://wa.me/79187994048",
      geo: [45.00152357458477,41.90437799999992],
    },
    {
      id: "46",
      profession: "volosi",
      location: "yug",
      name: "Катерина",
      adress: "50 лет ВЛКСМ 23/6",
      description: "",
      phone: "+79624329292",
      promo: "Sokol",
      imgs: {
        img1: "url(/assets/images/users/46/01.jpg)",
        img2: "url(/assets/images/users/46/02.jpeg)",
        img3: "url(/assets/images/users/46/03.jpg)",
        img4: "url(/assets/images/users/46/04.jpg)",
        img5: "url(/assets/images/users/46/05.jpg)",
      },
      services: {
        service1: "Абсолютно любые причёски в самых современных техниках",
        service2: "Стойкие",
        service3: "Плетение кос и фальш-дред.",
        service4:
          "Без повреждения волоса <br><br> Стоимость от 1500.<br><br>Индивидуальное обучение по прическам.",
      },
      insta: "https://www.instagram.com/sokolova_ea_mua/",
      whats: "https://wa.me/79624329292",
      vk: "https://vk.com/rosaselvatika",
      geo: [45.015874574570546, 41.92382649999999],
    },
    {
      id: "47",
      profession: "manikur",
      location: "center",
      name: "Елена",
      adress: "Ленина, 417а к2",
      description: "",
      phone: "+79187738998",
      promo: "Знакомство с мастером",
      imgs: {
        img1: "url(/assets/images/users/47/01.jpeg)",
        img2: "url(/assets/images/users/47/02.jpeg)",
        img3: "url(/assets/images/users/47/03.jpeg)",
      },
      services: {
        service1: "Маникюр гигиенический - 600₽",
        service2: "Маникюр с покрытием гель лак - 1000₽",
        service3: "Маникюр с укреплением гелем - 1000₽",
        service4: "Ремонт ногтя - 100₽",
        service5: "Дизайн от 50₽/1 ноготь",
        service6: "Френч/градиент - 200₽",
        service7:
          "Зачистка онихолизиса 150₽/1ноготь <br><br>- проходила базовые курсы и стажировку по маникюру и педикюру в центре натальи болдурчиди<br>- выполняю такие виды маникюра и педикюра как классический, аппаратный, комбинированный, смарт педикюр<br>- все инструменты проходят стерилизацию по санпин<br>- одноразовые расходные материалы на каждого клиента<br>- работаю качественными материалами и на современном оборудовании<br>- прохожу ежегодные курсы повышения квалификации<br>- только по предварительной записи",
      },
      insta: "https://instagram.com/elena.nail.26?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79187738998",
      vk: "vk.com/nail_26",
      geo: [45.04136157458499, 41.91764599999997],
    },
    {
      id: "48",
      profession: "pedikur",
      location: "center",
      name: "Елена",
      adress: "Ленина, 417а к2",
      description: "",
      phone: "+79187738998",
      promo: "Знакомство с мастером",
      imgs: {
        img1: "url(/assets/images/users/48/01.jpeg)",
        img2: "url(/assets/images/users/48/02.jpeg)",
      },
      services: {
        service1: "Педикюр гигиенический - 1200₽",
        service2: "Педикюр с покрытием гель лак - 1500₽",
        service3: "SMART педикюр - 1400₽ <br>  С покрытием гель лак - 1700₽",
        service4: "Гигиеническая обработка пальчиков - 900₽",
        service5: "Обработка пальчиков с покрытием гель лак - 1200₽",
        service6: "Снятие покрытия и придание формы - 300₽",
        service7: "Зачистка онихолизиса от 150р /1 ноготь",
        service8: "Френч - 200₽",
        service9:
          "Дизайн от 50₽/1 ноготь <br><br>- проходила базовые курсы и стажировку по маникюру и педикюру в центре натальи болдурчиди<br>- выполняю такие виды маникюра и педикюра как классический, аппаратный, комбинированный, смарт педикюр<br>- все инструменты проходят стерилизацию по санпин<br>- одноразовые расходные материалы на каждого клиента<br>- работаю качественными материалами и на современном оборудовании<br>- прохожу ежегодные курсы повышения квалификации<br>- только по предварительной записи",
      },
      insta: "https://instagram.com/elena.nail.26?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79187738998",
      vk: "vk.com/nail_26",
      geo: [45.04136157458499, 41.91764599999997],
    },
    {
      id: "49",
      profession: "volosi",
      location: "yug",
      name: "Анна",
      adress: "45 параллель, 73",
      description: "",
      phone: "+79614813802",
      promo: "HANNA26",
      imgs: {
        img1: "url(/assets/images/users/49/01.jpg)",
        img2: "url(/assets/images/users/49/02.jpg)",
        img3: "url(/assets/images/users/49/03.jpg)",
        img4: "url(/assets/images/users/49/04.jpg)",
        img5: "url(/assets/images/users/49/05.jpg)",
        img6: "url(/assets/images/users/49/06.jpg)",
        img7: "url(/assets/images/users/49/07.jpg)",
      },
      services: {
        service1: "Женские стрижки - от 500₽",
        service2: "Кончики - 300₽",
        service3: "Челка - 300₽",
        service4: "Мужские стрижки - от 300₽",
        service5: "Модельная стрижка - 500₽",
        service6: "Прически - от 1300₽",
        service7: "Укладки - от 800₽",
        service8: "Окрашивания тон в тон - от 1300₽ (со своей краской от 700₽)",
        service9:
          "Сложные техники окрашивания(мелирование, шатуш, балаяж, амбре, Airtouch) - от 4000₽<br><br>Меня зовут Анна, я молодой мастер, со стажем работы больше года. Закончила школу парикмахерского искусства Влада Гарамова, +дополнительные курсы по современным техникам окрашивания, не стою на месте, развиваюсь. К каждому клиенту индивидуальный подход, учту все нюансы и пожелания и сделаю вас ещё красивее)",
      },
      whats: "https://wa.me/79614813802",
      telegram: "https://t.me/Hanna152",
      geo: [45.00152357458477, 41.90437799999992],
    },
    {
      id: "50",
      profession: "brovist",
      location: "yug",
      name: "Алина",
      adress: "Шпаковская, 107в",
      description: "",
      phone: "+79886768533",
      promo: "Лайтстав",
      imgs: {
        img1: "url(/assets/images/users/50/01.jpg)",
        img2: "url(/assets/images/users/50/02.jpg)",
        img3: "url(/assets/images/users/50/03.jpg)",
        img4: "url(/assets/images/users/50/04.jpg)",
        img5: "url(/assets/images/users/50/05.jpg)",
        img6: "url(/assets/images/users/50/06.jpg)",
        img7: "url(/assets/images/users/50/07.jpg)",
        img8: "url(/assets/images/users/50/08.jpg)",
      },
      services: {
        service1: "Ламинирование ресниц и бровей - 1200₽",
        service2: "Оформление краска/хна и коррекция - 800₽",
        service3: "Уход для бровей - 200₽",
        service4: "Коррекция без окрашивания - 600₽",
        service5:
          "Обучение бровистов с 0<br><br> Всем привет меня зовут Алина.🖐🏻<br>Приглашаю вас на оформление и татуаж бровей.<br>Опыт работы 5 лет.<br>олько качественные материалы.<br>Обучаю мастеров с 0 качественная база без воды.<br>",
      },
      insta: "https://www.instagram.com/reel/CiekHEvseji/?igshid=NDc0ODY0MjQ=",
      whats: "https://wa.me/+79886768533",
      vk: "https://vk.com/club211445565",
      geo: [45.02022657458179, 41.935324499999986],
    },
    {
      id: "51",
      profession: "permanent",
      location: "center",
      name: "Татьяна",
      adress: "Мира, 278",
      description: "",
      promo: "KULIKOVASTAV",
      phone: "+79887647120",
      imgs: {
        img1: "url(/assets/images/users/51/01.jpg)",
        img2: "url(/assets/images/users/51/02.jpg)",
        img3: "url(/assets/images/users/51/03.jpg)",
        img4: "url(/assets/images/users/51/04.jpg)",
        img5: "url(/assets/images/users/51/05.jpg)",
        img6: "url(/assets/images/users/51/06.jpg)",
        img7: "url(/assets/images/users/51/07.jpg)",
        img8: "url(/assets/images/users/51/08.jpg)",
      },
      services: {
        service1:
          "Пудровое напыление брови:<br>&nbsp;&nbsp;Первая процедура - 3500₽<br>&nbsp;&nbsp;Коррекция - 2000₽",
        service2:
          "Губы акварель/помада:<br>&nbsp;&nbsp;Первая процедура 3500₽<br>&nbsp;&nbsp;Коррекция 2000₽",
        service3:
          "Веки: <br> - Стрелочка классическая/ с растушёвкой: <br>&nbsp;&nbsp;&nbsp;Первая процедура 3500₽<br>&nbsp;&nbsp;&nbsp;Коррекция 2000₽<br><br> - Межресничка:<br>&nbsp;&nbsp;&nbsp;Первая процедура 2000₽<br>&nbsp;&nbsp;&nbsp;Коррекция 1500₽<br><br>Натуральный перманентный макияж пигментами ПРЕМИУМ  класса. Стерильность, одноразовые материалы. ",
      },
      insta: "https://instagram.com/kulikova_pm_stav?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79887647120",
      geo: [45.03773157457566, 41.974545500000005],
    },
    {
      id: "52",
      profession: "manikur",
      location: "center",
      name: "Екатерина",
      adress: "Мира, 278",
      description: "",
      phone: "+79995901720",
      promo: "BeautyStav",
      imgs: {
        img1: "url(/assets/images/users/52/01.jpeg)",
        img2: "url(/assets/images/users/52/02.jpeg)",
      },
      services: {
        service1: "Маникюр и покрытие гель-лак - 1500₽",
        service2: "Укрепление ногтей гелем - 1900₽",
        service3: "Салонное моделирование ногтей (простые формы) - 2200₽",
        service4: "Арочное моделирование ногтей (сложные формы) - 2800₽",
        service5: "Коррекция салонных ногтей - 1900₽",
        service6: "Ремонт одного ногтя - 100₽ - 200₽",
        service7:
          "Маникюр аппаратный/комбинированный - 800₽<br>Дизайн любой сложности входит в стоимость!<br><br>Основатель студии @esthetics.st, находимся в центре города на Мира 278(вход со двора).<br>Я мастер-эксперт/инструктор по маникюру/наращиванию ногтей, педикюру и подологии.",
      },
      insta: "https://instagram.com/katrine_de_nail",
      whats: "https://wa.me/79995901720",
      vk: "https://vk.com/id210402922",
      geo: [45.03773157457566, 41.974545500000005],
    },
    {
      id: "53",
      profession: "pedikur",
      location: "center",
      name: "Екатерина",
      adress: "Мира, 278",
      description: "",
      phone: "+79995901720",
      promo: "BeautyStav",
      imgs: {
        img1: "url(/assets/images/users/53/01.jpeg)",
        img2: "url(/assets/images/users/53/02.jpeg)",
        img3: "url(/assets/images/users/53/03.jpeg)",
        img4: "url(/assets/images/users/53/04.jpeg)",
      },
      services: {
        service1: "Педикюр полный без покрытия - 1500₽",
        service2: "Педикюр полный с покрытием гель-лак - 1900₽",
        service3: "Педикюр только пальчиков с покрытием гель-лак - 1500₽",
        service4: "Педикюр пальчиков без покрытия - 1000₽",
        service5: "Обработка только стопы - 700₽",
        service6: "Консультация подолога - 300₽",
        service7: "Зачистка онихолизиса/онихомикоза - 400₽ - 800₽",
        service8: "Обработка стержневой мозоли/глубоких трещин - 200₽ - 800₽",
        service9: "Наложение повязки/тампонады/тейпирование - 100₽ - 400₽",
        service10: "Установка титановой нити (1ноготь) - 2000₽",
        service11:
          "Коррекция титановой нити - 1200₽<br>Дизайн любой сложности входит в стоимость!<br><br>Основатель студии @esthetics.st, находимся в центре города на Мира 278(вход со двора).<br>Я мастер-эксперт/инструктор по маникюру/наращиванию ногтей, педикюру и подологии.",
      },
      insta: "https://instagram.com/katrine_de_nail",
      whats: "https://wa.me/79995901720",
      vk: "https://vk.com/id210402922",
      geo: [45.03773157457566, 41.974545500000005],
    },
    {
      id: "54",
      profession: "permanent",
      location: "yug",
      name: "Ларина",
      adress: "Рогожникова, 17",
      description: "",
      phone: "+79280286229",
      promo: "PM10",
      imgs: {
        img1: "url(/assets/images/users/54/01.jpeg)",
        img2: "url(/assets/images/users/54/02.jpeg)",
        img3: "url(/assets/images/users/54/03.jpeg)",
        img4: "url(/assets/images/users/54/04.jpeg)",
      },
      services: {
        service1: "Брови (первичная процедура) - 3000₽<br>Коррекция - 2000₽<br>Обновление (от 3х месяцев) - 3000₽",
        service2: "Губы (акварельная техника, помадный прокрас, контур) - 3000₽<br>Коррекция - 2000₽<br>Обновление (от 3х месяцев) - 3000₽",
        service3:
          "Межресничное пространство (первичная процедура) - 2500₽<br>Коррекция - 2000₽<br>Обновление (от 3х месяцев) - 2500₽<br><br>Меня зовут Ларина, уже больше года я мастер-бровиста и мастер по перманентному макияжу.<br><br>Моя работа приносит мне большое удовольствие. Я очень рада, когда улыбки моих клиенток светятся радостью и уверенностью в себе.<br><br>Я очень довольна, что могу помогать многим женщинам становиться еще прекраснее. А Ваши благодарные отзывы дают мне заряд энергии на каждый новый рабочий день!<br><br>В своей работе я использую только качественные, безопасные материалы ведущих брендов.",
      },
      insta: "https://instagram.com/permanent_kishmakhova?igshid=YzA2ZDJiZGQ=",
      whats: "https://wa.me/79280286229",
      geo: [45.010095074581244,41.90198850000003],
    },
    {
      id: "55",
      profession: "brovist",
      location: "yug",
      name: "Ларина",
      adress: "Рогожникова, 17",
      description: "",
      phone: "+79280286229",
      promo: "PM10",
      imgs: {
        img1: "url(/assets/images/users/55/01.jpeg)",
        img2: "url(/assets/images/users/55/02.jpeg)",
        img3: "url(/assets/images/users/55/03.jpeg)",
        img4: "url(/assets/images/users/55/04.jpeg)",
      },
      services: {
        service1: "Окрашивание хной/краской - 500₽",
        service2: "Коррекция воск/пинцет - 300₽",
        service3: "Коррекция + покраска хной/краской - 650₽",
        service4: "Мусульманская коррекция - 300₽",
        service5: "Ламинирование бровей - 1000₽",
        service6: "Ламинирование ресниц - 900₽",
        service7: "Окрашивание ресниц - 300₽",
        service8:
          "Ламинирование бровей + окрашивание + коррекция - 1200₽<br><br>Меня зовут Ларина, уже больше года я мастер-бровиста и мастер по перманентному макияжу.<br><br>Моя работа приносит мне большое удовольствие. Я очень рада, когда улыбки моих клиенток светятся радостью и уверенностью в себе.<br><br>Я очень довольна, что могу помогать многим женщинам становиться еще прекраснее. А Ваши благодарные отзывы дают мне заряд энергии на каждый новый рабочий день!<br><br>В своей работе я использую только качественные, безопасные материалы ведущих брендов.",
      },
      insta: "https://instagram.com/permanent_kishmakhova?igshid=YzA2ZDJiZGQ=",
      whats: "https://wa.me/79280286229",
      geo: [45.010095074581244,41.90198850000003],
    },
    {
      id: "56",
      profession: "brovist",
      location: "yug",
      name: "Светлана",
      adress: "Савченко, 38к2",
      description: "",
      phone: "+79002635279",
      promo: "s1pnv5",
      imgs: {
        img1: "url(/assets/images/users/56/01.jpg)",
        img2: "url(/assets/images/users/56/02.jpg)",
        img3: "url(/assets/images/users/56/03.jpg)",
        img4: "url(/assets/images/users/56/04.jpg)",
        img5: "url(/assets/images/users/56/05.jpg)",
        img6: "url(/assets/images/users/56/06.jpg)",
      },
      services: {
        service1: "Коррекция и окрашивание бровей - 550₽",
        service2: "Коррекция бровей (пинцет) - 200₽",
        service3: "Окрашивание бровей - 400₽",
        service4: "Ламинирование бровей/ окрашивание/ коррекция - 750₽",
        service5: "Ламинирование бровей - 650₽",
      },
      insta: "https://instagram.com/s1pnv_brows?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79002635279",
      telegram: "https://t.me/s1pnv",
      geo: [45.00547507456939,41.90041649999997],
    },
    {
      id: "57",
      profession: "brovist",
      location: "center",
      name: "Анастасия",
      adress: "Мира, 278",
      description: "",
      phone: "+79966940301",
      promo: "BeautyStav",
      imgs: {
        img1: "url(/assets/images/users/57/01.jpeg)",
        img2: "url(/assets/images/users/57/02.jpeg)",
        img3: "url(/assets/images/users/57/03.jpeg)",
        img4: "url(/assets/images/users/57/04.jpeg)",
        img5: "url(/assets/images/users/57/05.jpeg)",
        img6: "url(/assets/images/users/57/06.jpeg)",
        img7: "url(/assets/images/users/57/07.jpeg)",
        img8: "url(/assets/images/users/57/08.jpeg)",
        img9: "url(/assets/images/users/57/09.jpeg)",
        img10: "url(/assets/images/users/57/10.jpeg)",
        img11: "url(/assets/images/users/57/11.jpeg)",
      },
      services: {
        service1: "Коррекция бровей + окрашивание ламинирование(ботокс в подарок) - 300₽",
        service2: "Коррекция бровей+окрашивание (краска/хна) - 800₽",
        service3: "Коррекция бровей воск/пинцет - 400₽",
        service4: "Ламинирование  ресниц + окрашивание(ботокс в подарок) - 1500₽<br><br>Я мастер с художественным образованием, подберу идеальную форму бровей с художественной точки зрения.<br><br>Работаю в сфере красоты с 2019г, знаю все о правильной работе с бровями и делюсь этими знаниями с другими. Преображаю взгляд оформлением ресниц и бровей.<br><br>Работаю только на лучших материалах и забочусь о здоровье своих клиентов.<br>Мастер/инструктор по оформлению бровей и ламинированию ресниц.",
      },
      insta: "https://instagram.com/anastasia_brow.stav",
      whats: "https://wa.me/79966940301",
      vk: 'https://vk.com/brow_lami_stav',
      geo: [45.03773157457566, 41.974545500000005],
    },
    {
      id: "58",
      profession: "manikur",
      location: "center",
      name: "Анастасия",
      adress: "Мира, 278",
      description: "",
      phone: "+79966940301",
      promo: "BeautyStav",
      imgs: {
        img1: "url(/assets/images/users/58/01.jpeg)",
        img2: "url(/assets/images/users/58/02.jpeg)",
        img3: "url(/assets/images/users/58/03.jpeg)",
        img4: "url(/assets/images/users/58/04.jpeg)",
        img5: "url(/assets/images/users/58/05.jpeg)",
        img6: "url(/assets/images/users/58/06.jpeg)",
        img7: "url(/assets/images/users/58/07.jpeg)",
        img8: "url(/assets/images/users/58/08.jpeg)",
        img9: "url(/assets/images/users/58/09.jpeg)",
      },
      services: {
        service1: "Маникюр и покрытие гель-лак - 1500₽",
        service2: "Укрепление ногтей гелем - 1900₽",
        service3: "Салонное моделирование ногтей (простые формы) - 2200₽",
        service5: "Арочное моделирование ногтей (сложные формы) - 2800₽",
        service6: "Коррекция салонных ногтей - 1900₽",
        service7: "Коррекция арочных ногтей - 2500₽",
        service8: "Ремонт одного ногтя - 100₽ - 200₽",
        service9: "Маникюр аппаратный/комбинированный - 800₽<br>Дизайн любой сложности входит в стоимость!<br><br>Я мастер с художественным образованием,  выполню дизайн любой сложности на ногтях.<br><br>Работаю в сфере красоты с 2019г. Сделаю идеальные ногти и дизайн, о котором вы мечтали.<br><br>Работаю только на лучших материалах и забочусь о здоровье своих клиентов.<br>",
      },
      insta: "https://instagram.com/anastasia_brow.stav",
      whats: "https://wa.me/79966940301",
      vk: 'https://vk.com/brow_lami_stav',
      geo: [45.03773157457566, 41.974545500000005],
    },
    {
      id: "59",
      profession: "pedikur",
      location: "center",
      name: "Анастасия",
      adress: "Мира, 278",
      description: "",
      phone: "+79966940301",
      promo: "BeautyStav",
      imgs: {
        img1: "url(/assets/images/users/59/01.jpeg)",
        img2: "url(/assets/images/users/59/02.jpeg)",
        img3: "url(/assets/images/users/59/03.jpeg)",
        img4: "url(/assets/images/users/59/04.jpeg)",
        img5: "url(/assets/images/users/59/05.jpeg)",
        img6: "url(/assets/images/users/59/06.jpeg)",
      },
      services: {
        service1: "Педикюр полный без покрытия - 1500₽",
        service2: "Педикюр полный с покрытием гель-лак - 1900₽",
        service3: "Педикюр только пальчиков с покрытием гель-лак - 1500₽",
        service5: "Педикюр пальчиков без покрытия - 1000₽",
        service6: "Обработка только стопы - 700₽",
        service7: "Зачистка онихолизиса/онихомикоза - 400₽ - 800₽",
        service8: "Обработка стержневой мозоли/глубоких трещин - 200₽ - 800₽",
        service9: "Наложение повязки/тампонады/тейпирование - 100₽ - 400₽<br>Дизайн любой сложности входит в стоимость!<br><br>Я мастер с художественным образованием,  выполню дизайн любой сложности на ногтях.<br><br>Работаю в сфере красоты с 2019г. Сделаю идеальные ногти и дизайн, о котором вы мечтали.<br><br>Работаю только на лучших материалах и забочусь о здоровье своих клиентов.<br>",
      },
      insta: "https://instagram.com/anastasia_brow.stav",
      whats: "https://wa.me/79966940301",
      vk: 'https://vk.com/brow_lami_stav',
      geo: [45.03773157457566, 41.974545500000005],
    },
    {
      id: "60",
      profession: "manikur",
      location: "yug",
      name: "Екатерина",
      adress: "50 лет ВЛКСМ, 45",
      description: "",
      phone: "+79187430265",
      promo: "Cтемпинг",
      imgs: {
        img1: "url(/assets/images/users/60/01.jpg)",
        img2: "url(/assets/images/users/60/02.jpg)",
        img3: "url(/assets/images/users/60/03.jpg)",
        img4: "url(/assets/images/users/60/04.jpg)",
        img5: "url(/assets/images/users/60/05.jpg)",
        img6: "url(/assets/images/users/60/06.jpg)",
        img7: "url(/assets/images/users/60/07.jpg)",
        img8: "url(/assets/images/users/60/08.jpg)",
      },
      services: {
        service1: "Маникюр + покрытие гель лак - от 1100₽",
        service2: "Маникюр +укрепление ногтей - от 1200₽",
        service3: "Наращивание ногтей - от 1400₽<br><br>Я сертифицированный мастер маникюра и педикюра.В этой сфере  с 2018 года.<br><br>Первые знания получила в одной из лучших школ.Центр Натальи Болдурчиди г.Ставрополя.Так же обучалась инновационной технике по педикюру в г.Ростов-на-Дону.Техника smart педикюр<br><br> Работаю на стерильных инструментах и одноразовых расходниках.<br><br>Уютный кабинет полностью оборудованный для комфортного времяпровождения.<br>Ваш мастер маникюра и педикюра❤️<br>",
  
      },
      insta: "https://instagram.com/territory_nails?utm_medium=copy_link",
      whats: "https://wa.me/79187430265",
      vk: 'https://vk.com/territorynail',
      telegram: 'https://t.me/Territorynails',
      geo: [45.00934307457936,41.92144600000003],
    },
    {
      id: "61",
      profession: "pedikur",
      location: "yug",
      name: "Екатерина",
      adress: "50 лет ВЛКСМ, 45",
      description: "",
      phone: "+79187430265",
      promo: "Cтемпинг",
      imgs: {
        img1: "url(/assets/images/users/61/01.jpg)",
        img2: "url(/assets/images/users/61/02.jpg)",
        img3: "url(/assets/images/users/61/03.jpg)",
        img4: "url(/assets/images/users/61/04.jpg)",
        img5: "url(/assets/images/users/61/05.jpg)",
        img6: "url(/assets/images/users/61/06.jpg)",
        img7: "url(/assets/images/users/61/07.jpg)",
      },
      services: {
        service1: "Педикюр SMART, гигиена (без покрытия)  - от 1100₽",
        service2: "Педикюр SMART, полный (с покрытием гель лак) - от 1500₽",
        service3: "Обработка пальцев + покрытия гель лак (без обработки стопы) - от 1100₽<br><br>Я сертифицированный мастер маникюра и педикюра.В этой сфере  с 2018 года.<br><br>Первые знания получила в одной из лучших школ.Центр Натальи Болдурчиди г.Ставрополя.Так же обучалась инновационной технике по педикюру в г.Ростов-на-Дону.Техника smart педикюр<br><br> Работаю на стерильных инструментах и одноразовых расходниках.<br><br>Уютный кабинет полностью оборудованный для комфортного времяпровождения.<br>Ваш мастер маникюра и педикюра❤️<br>",
  
      },
      insta: "https://instagram.com/territory_nails?utm_medium=copy_link",
      whats: "https://wa.me/79187430265",
      vk: 'https://vk.com/territorynail',
      telegram: 'https://t.me/Territorynails',
      geo: [45.00934307457936,41.92144600000003],
    },
    {
      id: "62",
      profession: "resnici",
      location: "yug",
      name: "Кристина",
      adress: "Тухачевского, 26/4",
      description: "",
      phone: "+79881191464",
      promo: "BeautyStav",
      imgs: {
        img1: "url(/assets/images/users/62/01.jpg)",
        img2: "url(/assets/images/users/62/02.jpg)",
        img3: "url(/assets/images/users/62/03.jpg)",
        img4: "url(/assets/images/users/62/04.jpg)",
      },
      services: {
        service1: "Классика - 1300₽",
        service2: "2 D - от 1500₽",
        service3: "3 D - от 1600₽",
        service4: "4 D - от 1800₽",
        service5: "Эффекты (мокрый, лучики) - 200₽",
        service6: "Снятие без последующего наращивания - 200₽",
        service7: "Снятие чужой работы - 200₽ <br><br> Я сертифицированный мастер по наращиванию ресниц с 2017 года.<br>Уютный кабинет,полная стерилизация,материалы премиум и люкс класса.<br>Со мной душевно и комфортно.",
  
      },
      insta: "https://instagram.com/kris_lash.stav?igshid=YmMyMTA2M2Y=",
      whats: "https://wa.me/79881191464",
      vk: 'https://vk.com/club212247304',
      telegram: 'https://t.me/kris_stav',
      geo: [45.01523107459451,41.90357849999995],
    },
  ];

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  var queryLocation = params.location;
  var queryProfession = params.profession;
  var queryId = params.id;

  $("[data-link]").click(function (e) {
    e.preventDefault();
    var dataProfession = $(this).attr("data-profession");
    var dataLocation = $(this).attr("data-location");

    if (dataProfession) {
      if (queryLocation) {
        location.href =
          "/pages/masters.html?location=" +
          queryLocation +
          "&profession=" +
          dataProfession;
      } else {
        location.href = "/pages/map.html?profession=" + dataProfession;
      }
    } else if (dataLocation) {
      if (queryProfession) {
        location.href =
          "/pages/masters.html?location=" +
          dataLocation +
          "&profession=" +
          queryProfession;
      } else {
        location.href = "/pages/category.html?location=" + dataLocation;
      }
    }
  });

  var url = window.location.href;

  if (queryProfession === "brovist") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/brovi_page.jpg)"
    );
    $("#background__title-map").text("Мастера бровей в Ставрополе");
    $("title").text(
      "Бровист Ставрополь, сделать брови в Ставрополе, окрашивание бровей, татуаж бровей"
    );
  }
  if (queryProfession === "resnici") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/resnici_page.jpg)"
    );
    $("#background__title-map").text("Мастера ресниц в Ставрополе");
    $("title").text(
      "Лэшмейкер Ставрополь, сделать ресницы в Ставрополе, окрашивание ресниц, наращивание ресниц"
    );
  }
  if (queryProfession === "permanent") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/permanent_page.jpg)"
    );
    $("#background__title-map").text("Мастера перманента в Ставрополе");
    $("title").text(
      "Перманент Ставрополь, перманент бровей в Ставрополе, татуаж бровей, татуаж перманентный макияж, перманентный макияж"
    );
  }
  if (queryProfession === "manikur") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/manikur_page.jpg)"
    );
    $("#background__title-map").text("Мастера маникюра в Ставрополе");
    $("title").text(
      "Маникюр Ставрополь, сделать маникюр в Ставрополе, мастера маникюра Ставрополь"
    );
  }
  if (queryProfession === "pedikur") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/pedikur_page.jpg)"
    );
    $("#background__title-map").text("Мастера педикюра в Ставрополе");
    $("title").text(
      "Педикюр Ставрополь, сделать педикюр в Ставрополе, мастера педикюра Ставрополь, педикюр Ставрополь, сделать педикюр Ставрополь"
    );
  }
  if (queryProfession === "visage") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/visage_page.jpg)"
    );
    $("#background_map").css("background-position", "center");
    $("#background__title-map").text("Мастера визажисты в Ставрополе");
    $("title").text(
      "Визаж Ставрополь, визажист в Ставрополе, мастера визажа Ставрополь"
    );
  }
  if (queryProfession === "volosi") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/volosi_page.jpg)"
    );
    $("#background__title-map").text(
      "Мастера по уходу за волосами в Ставрополе"
    );
    $("title").text(
      "Уход за волосами Ставрополь, лечение волос в Ставрополе, стрижки Ставрополь, прически Ставрополь, укладка Ставрополь, окрашивание Ставрополь"
    );
  }
  if (queryProfession === "kosmetolog") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/kosmetolog_page.jpg)"
    );
    $("#background__title-map").text("Мастера косметологии в Ставрополе");
    $("title").text(
      "Косметолог Ставрополь, Косметология в Ставрополе, услуги косметолога Ставрополь, косметология Ставрополь"
    );
  }
  if (queryProfession === "massage") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/massage_page.jpg)"
    );
    $("#background__title-map").text("Мастера массажа в Ставрополе");
    $("#background_map").css("background-position", "bottom");
    $("title").text(
      "Массаж Ставрополь, услуги массажа в Ставрополе, массажист Ставрополь, массажист в Ставрополе, расслабляющий массаж, профессиональный массаж"
    );
  }
  if (queryProfession === "tatoo") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/tatoo_page.jpg)"
    );
    $("#background__title-map").text("Мастера тату в Ставрополе");
    $("#background_map").css("background-position", "bottom");
    $("title").text(
      "Тату Ставрополь, сделать тату в Ставрополе, мастера тату Ставрополь, тату-мастер Ставрополь, Тату студия Ставрополь, татуировки, Ставрополь, тату мастер"
    );
  }
  if (queryProfession === "depil") {
    $("#background_map").css(
      "background-image",
      "url(../assets/images/depil_page.jpeg)"
    );
    $("#background__title-map").text("Мастера депиляции в Ставрополе");
    $("#background_map").css("background-position", "bottom");
    $("title").text(
      "Депиляция Ставрополь, сделать депиляцию в Ставрополе, мастера депиляции Ставрополь"
    );
  }

  if (url.indexOf("/pages/masters.html")) {
    const filtered = users.filter(
      (i) => i.profession === queryProfession && i.location === queryLocation
    );

    if (filtered == 0) {
      $(".users__box").append(
        `<p class="nothing">Мастера в данной категории и районе пока что отсутствуют..<br><br> Но скоро появятся :)</p>`
      );
    }
    $(filtered).each(function (i) {
      let userik = filtered[i];
      let userSection = $(
        `<div style="background-image: ${userik.imgs.img1}" class="user__card" data-link data-id="${userik.id}" id="${userik.id}">
        <a href="/pages/user.html?id=${userik.id}" class="user__url"></a>
        <a href="/pages/user.html?id=${userik.id}">${userik.name}</a>
        <a href="/pages/user.html?id=${userik.id}" class="user__adress">${userik.adress}</a></div>`
      );

      $(".user__card").css("background-image");
      $(".users__box").prepend(userSection);
    });
  }

  $(".header__burger").on("click", function () {
    $(".header__burger-menu").toggleClass("closed");
    $(".header__burger-menu").addClass("opened");
    $("html, body").css({ overflow: "hidden", height: "100%" });
  });
  $(".burger-menu_cls").on("click", function () {
    $(".header__burger-menu").addClass("closed");
    $("html, body").css({ overflow: "auto", height: "auto" });
  });
  $(".burger-menu__nav-item").on("click", function () {
    $(".header__burger-menu").addClass("closed");
    $("html, body").css({ overflow: "auto", height: "auto" });
  });

  if (url.indexOf("/pages/user.html")) {
    const currentUser = users.filter((i) => i.id === queryId);

    $.each(currentUser[0].imgs, function (key, value) {
      let slide = $(
        `<div style="background-image: ${value}" class="swiper-slide"></div>`
      );
      $(".swiper-wrapper").append(slide);
    });

    $.each(currentUser[0].services, function (key, value) {
      let service = $(`<li class="user__list-item">${value}</li>`);
      $(".user__list").append(service);
    });

    let userAdress = $(
      `<p class="user__adress">Адрес: ${currentUser[0].adress}</p>`
    );
    let userPhone = $(
      `<a class="user__phone" href="tel:${currentUser[0].phone}">Позвонить</a>`
    );
    let userInsta = $(
      `<a class="user__social-icon insta" href="${currentUser[0].insta}"></a>`
    );
    let userWhats = $(
      `<a class="user__social-icon whats" href="${currentUser[0].whats}"></a>`
    );
    let userVk = $(
      `<a class="user__social-icon vk" href="${currentUser[0].vk}"></a>`
    );
    let userTelegram = $(
      `<a class="user__social-icon telegramm" href="${currentUser[0].telegram}"></a>`
    );
    let userPromo = $(
      `<p class="user__promo">Промо-код на скидку: <span class="promo__item">"${currentUser[0].promo}"</span></p>`
    );
    $(".user__contacts").prepend(userPromo);
    $(".user__contacts").prepend(userPhone);
    $(".user__contacts").prepend(userAdress);
    // $(".user__social").append(userInsta);
    // $(".user__social").append(userWhats);
    if (currentUser[0].insta) {
      $(".user__social").append(userInsta);
    }
    if (currentUser[0].whats) {
      $(".user__social").append(userWhats);
    }
    if (currentUser[0].vk) {
      $(".user__social").append(userVk);
    }
    if (currentUser[0].telegram) {
      $(".user__social").append(userTelegram);
    }

    $("#user__title").text(currentUser[0].name);
    $(".swiper").append($(`<div class="swiper-button-prev"></div>`));
    $(".swiper").append($(`<div class="swiper-button-next"></div>`));

    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map(
          "map",
          {
            center: [currentUser[0].geo[0], currentUser[0].geo[1]],
            zoom: 17,
          },
          {
            searchControlProvider: "yandex#search",
          }
        ),
        myPieChart = new ymaps.Placemark([]);

      myMap.geoObjects.add(
        new ymaps.Placemark(
          [currentUser[0].geo[0], currentUser[0].geo[1]],
          {
            balloonContent: `${currentUser[0].name}`,
          },
          {
            preset: "islands#icon",
            iconColor: "#0095b6",
          }
        )
      );
    }
  }

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      250: {
        slidesPerView: 1,
      },
    },
  });
});
