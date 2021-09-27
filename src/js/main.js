import '../css/style.css';

document.querySelector('#app').innerHTML = `
<div class="popup">
<div class="popup__body">
    <div class="popup__photo">
        <img
            src="/img/main-photo.png"
            alt="Классная футболка! Эволюционируй или сдохни"
        />
        <div class="popup__gallery">
            <img
                src="/img/small-first.png"
                alt="Белый свитшот"
            />
            <img
                class="active"
                src="/img/small-third.png"
                alt="Эволюционируй или сдохни"
            />
            <img
                src="/img/small-second.png"
                alt="Серый свитшот"
            />
        </div>
    </div>
    <div class="popup__description">
        <h1 class="popup__title">Футболка "Эволюционируй или сдохни"</h1>

            <div class="popup__balance-info">
                <div class="popup__points">
                    <h6 class="popup__point">100 баллов</h6>
                    <button class="btn" type="submit">
                        Заказать
                    </button>
                </div>
                <div class="popup__balance">
                    <p class="popup__balance-my">Твой баланс:</p>
                    <p class="popup__balance-point">3 945 баллов</p>
                    <img
                        class="popup__balance-shop"
                        src="/img/shop.png"
                        alt="Баланс"
                    />
                </div>
            </div>
            <div class="popup__option-colors">
                <h6 class="popup__option-title">Цвета:</h6>
                <div class="popup__option-btns">
                    <input
                        class="popup__option"
                        type="radio"
                        name="popup__color"
                        id="popup__color-blue"
                    />
                    <label
                        class="popup__color-lable"
                        for="popup__color-blue"
                    >
                        <div
                            class="popup__color-container blue"
                        ></div>
                        <span>Синий</span>
                    </label>
                    <input
                        class="popup__option"
                        type="radio"
                        name="popup__color"
                        id="popup__color-beige"
                    />
                    <label
                        class="popup__color-lable"
                        for="popup__color-beige"
                    >
                        <div
                            class="popup__color-container beige"
                        ></div>
                        <span>Бежевый</span>
                    </label>
                    <input class="popup__option" type="radio" name="popup__color" id="popup__color-gray">
                <label class="popup__color-lable" for="popup__color-gray">
                    <div class="popup__color-container grey" ></div>
                    <span>Серый</span>
                </label>
                </div>
            </div>
            <div class="popup__option-size">
                <h6 class="popup__option-title">Размер:</h6>
                <div class="popup__option-btns">
                    <input
                        class="popup__option"
                        type="radio"
                        name="popup__size"
                        id="popup__size-s"
                    />
                    <label class="popup__size-lable" for="popup__size-s">
                        <span>S</span>
                    </label>
                    <input
                        class="popup__option"
                        type="radio"
                        name="popup__size"
                        id="popup__size-m"
                    />
                    <label class="popup__size-lable" for="popup__size-m">
                        <span>M</span>
                    </label>
                    <input
                        class="popup__option"
                        type="radio"
                        name="popup__size"
                        id="popup__size-l"
                    />
                    <label class="popup__size-lable" for="popup__size-l">
                        <span>L</span>
                    </label>
                </div>
            </div>
            <div class="popup__info">
                <h6 class="popup__info-title">Детали:</h6>
                <p class="popup__info-text">
                    Брендированная толстовка от Qazaq Republic. Материал:
                    Хлопок 80%, Вискоза 20%
                </p>
                <h6 class="popup__info-title">Как выбрать размер:</h6>
                <p class="popup__info-text">
                    Написать дяде Рику для уточнения.
                </p>
            </div>
            <button class="popup__x" type="button">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"> <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.4372 6.66675L16.0012 15.1021L7.56404
                        6.66675L6.66663 7.56283L15.1025 15.9994L6.66663
                        24.4348L7.56404 25.3334L16.0012 16.8968L24.4372
                        25.3334L25.3333 24.4348L16.8974 15.9994L25.3333
                        7.56283L24.4372 6.66675Z"
                        fill="#888B94"
                    />
                </svg>
            </button>
    </div>
</div>
</div>
`;
