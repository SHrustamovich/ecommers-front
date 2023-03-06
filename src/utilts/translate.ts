interface Trans {
    cancel: string;
    payment: string;
    signUp: string;
    city: string;
    question: string;
    headerCall: string;
    category: string;
    search: string;
    headerOrder: string;
    favarit: string;
    karzinka: string;
    trend: string;
    cash: string;
    month: string;
    sum: string;
    show: string;
    aksiya: string;
    brand: string;
    menu: string;
    aviable: string;
    bottom: string;
    home: string;
    delever: string;
    dont: string;
    day: string;
    week: string;
    size: string;
    color: string;
    watch: string;
    price: string;
    dan: string;
    gacha: string;
    comp: string;
    deliver: string;
    set: string;
    return: string;
    product: string;
    character: string;
    sport: string;
    metal: string;
    desc: string;
    allCharc: string;
    E: string;
    similar: string;
    expensive: string;
    cheap: string;
    filter: string;
    kprod: string;
    dprice: string;
    total: string;
    kupon: string;
    pprice: string;
    del: string;
    reg: string;
    of: string;
    shart:string
}
const uz: Trans = {
    cancel: "Bekor qilish",
    payment: "To'lov",
    signUp: "Kirish",
    city: "Shaxar",
    question: "Ko'p so'raladigan savollar",
    headerCall: "Telefon orqali buyurtma",
    category: "Katalog",
    search: "Qidiruv..",
    headerOrder: "Buyurtmalar",
    favarit: "Sevimlilar",
    karzinka: "Savatcha",
    trend: "Trendda",
    cash: "Naxt pul",
    month: "oyiga",
    sum: "so'm",
    show: "ko'proq ko'rish",
    aksiya: "Aksiya",
    brand: "Brendlar",
    menu: "Menu",
    aviable: "Kirishingiz mumkun",
    bottom: "2022 - BuyIn - 2022 yildan beri O'zbekistondagi eng mashhur elektron tijorat veb-sayti",
    home: "Bosh sahifa",
    delever: "Yelkazib berish vaqti",
    dont: "Muhim emas",
    day: "1 kunda",
    week: "1 haftada",
    size: "O'lcham",
    color: "Rang",
    watch: "Barchasini ko'rish",
    price: "Narx",
    dan: "dan",
    gacha: "gacha",
    comp: "Tur",
    deliver: "Bepul yetkazib berish",
    set: "O'rnatish",
    return: "Sotib olish qaytariladi",
    product: "Mahsulot haqida",
    character: "Asosiy xususiyatlar",
    sport: "Sport turi",
    metal: "Material",
    desc: "Tavsif",
    allCharc: "Barcha xususiyatlar",
    E: "sharhlar",
    similar: "O'xshash mahsulotlar",
    expensive: "Qimmatroq",
    cheap: "Arzonroq",
    filter: "Filter",
    kprod: "Savatdagi mahsulotlar",
    dprice: "Yetkazish narxi",
    total: "Jami",
    kupon: "Kupon kodi",
    pprice: "Maxsulot narxi",
    del: "Yetkazish",
    reg: "Xarid qilish uchun ro'yxatdan o'ting",
    of: "Ro'yhatdan o'tkazish",
    shart:"“Buyurtma berish” tugmasini bosish orqali men ommaviy oferta shartnomasiga rozilik bildiraman"
};
const ru: Trans = {
    cancel: "Отмена",
    payment: "Рассрочка",
    signUp: "Регистрация",
    city: "Город",
    question: "Часто задаваемые вопросы",
    headerCall: "Заказать через звонок",
    category: "Категории",
    search: "поиск...",
    headerOrder: "Мои заказы",
    favarit: "Избранное",
    karzinka: "Корзина",
    trend: "В Тренде",
    cash: "в наличии",
    month: "в месяц",
    sum: "сум",
    show: "Показать еще",
    aksiya: "Распродажа",
    brand: "Бренды",
    menu: "Меню",
    aviable: "Доступен на",
    bottom: "2022 г. - BuyIn - Самый известный сайт электронной коммерции в Узбекистане с 2022 г.",
    home: "Главная",
    delever: "Срок доставки",
    dont: "Неважно",
    day: "От 1 дней",
    week: "от 1 недели",
    size: "Размер",
    color: "Цвет",
    watch: "Показать все",
    price: "Цена",
    dan: "от",
    gacha: "до",
    comp: "Состав",
    deliver: "Бесплатная доставка",
    set: "Примерка",
    return: "Возврат товара",
    product: "О товаре",
    character: "Основные характеристики",
    sport: "Вид спорта",
    metal: "Материал",
    desc: "Описание",
    allCharc: "Все характеристики",
    E: "отзывов",
    similar: "Похожие товары",
    expensive: "Подороже",
    cheap: "Подешевле",
    filter: " Фильтры",
    kprod: "Товаров в корзине",
    dprice: "Сумма доставки",
    total: "Итого",
    kupon: "Промокод",
    pprice: "Сумма товара",
    del: "Доставка",
    reg: "Пройдите регистрацию чтобы совершать покупку",
    of: "Оформить заказ",
    shart:"Нажимая 'Оформить заказ', я соглашаюсь с публичным договором оферты"
};
interface LanguageKeyValuePairs {
    [key: string]: Trans;
}
export const languages: LanguageKeyValuePairs = { uz, ru };
