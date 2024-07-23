import React from 'react';
import Layout from "./general_components/Layout";
import ProductGrid from './ProductGrid';
import Product from "./general_components/Product";

// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
//     category: string;
//     stock: number;
//     image: string;
// }

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Софт 1',
        price: 299.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["текстовый редактор", "программирование", "редактирование текста", "интерфейс", "плагин", "подсветка синтаксиса", "многофункциональный", "открытый исходный код", "персонализация", "многозадачность"],
        stock: true,
        image: '?'
    },
    {
        id: 2,
        name: 'Бот 1',
        price: 799.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["автоматизация", "чат-бот", "AI", "обработка языка", "обучение", "поддержка", "интерактивность", "сценарии", "интеграция", "обратная связь"],
        stock: true,
        image: '?'
    },
    {
        id: 3,
        name: 'Спец-токен 1',
        price: 99.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Токен',
        tags: ["безопасность", "криптовалюта", "инвестиции", "доступ", "блокчейн", "платежи", "аутентификация", "персональные данные", "права", "разрешения"],
        stock: false,
        image: '?'
    },
    {
        id: 4,
        name: 'Бот 2',
        price: 199.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["автоматизация", "бот для соцсетей", "продвижение", "анализ", "взаимодействие", "интеграция", "планирование", "социальные сети", "оптимизация", "масс-фоловинг"],
        stock: true,
        image: '?'
    },
    {
        id: 5,
        name: 'Софт 2',
        price: 49.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["антивирус", "система безопасности", "программное обеспечение", "сканирование", "защита данных", "обновления", "интерфейс", "веб-защита", "мониторинг", "оптимизация"],
        stock: true,
        image: '?'
    },
    {
        id: 6,
        name: 'Софт 3',
        price: 129.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["графический редактор", "дизайн", "фоторедактор", "инструменты", "цветокоррекция", "макеты", "векторная графика", "фотография", "ретушь", "плагин"],
        stock: false,
        image: '?'
    },
    {
        id: 7,
        name: 'Бот 3',
        price: 599.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["бот для бизнеса", "интеграция", "обработка данных", "анализ", "отчеты", "мониторинг", "проектное управление", "AI", "обратная связь", "поддержка клиентов"],
        stock: true,
        image: '?'
    },
    {
        id: 8,
        name: 'Спец-токен 2',
        price: 149.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Токен',
        tags: ["токенизация", "инвестиции", "криптоактивы", "блокчейн", "система прав", "собственность", "безопасность", "финансовые транзакции", "платежи", "анализ"],
        stock: true,
        image: '?'
    },
    {
        id: 9,
        name: 'Софт 4',
        price: 89.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["производительность", "инструменты", "оптимизация", "управление задачами", "планирование", "приложение", "интерфейс", "отчеты", "анализ", "многозадачность"],
        stock: true,
        image: '?'
    },
    {
        id: 10,
        name: 'Бот 4',
        price: 299.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["развлекательный бот", "игры", "анализ поведения", "интерактивность", "пользовательский опыт", "интеграция", "развлечение", "платформа", "награды", "механики"],
        stock: true,
        image: '?'
    },
    {
        id: 11,
        name: 'Спец-токен 3',
        price: 199.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Токен',
        tags: ["инвестиционный токен", "криптоэкономика", "токеномика", "инвесторы", "блокчейн", "платежи", "анализ рынка", "безопасность", "финансовые операции", "мобильные платежи"],
        stock: true,
        image: '?'
    },
    {
        id: 12,
        name: 'Софт 5',
        price: 59.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["управление проектами", "планирование", "инструменты", "производительность", "оптимизация", "анализ", "интерфейс", "функциональность", "отчеты", "управление ресурсами"],
        stock: true,
        image: '?'
    },
    {
        id: 13,
        name: 'Бот 5',
        price: 399.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["бот для продаж", "автоматизация", "анализ данных", "CRM", "управление", "интеграция", "обратная связь", "поддержка клиентов", "платформа", "оптимизация"],
        stock: true,
        image: '?'
    },
    {
        id: 14,
        name: 'Спец-токен 4',
        price: 249.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Токен',
        tags: ["децентрализованные финансы", "смарт-контракты", "криптоактивы", "платежи", "инвестиции", "блокчейн", "токенизация", "анализ рисков", "финансовые инструменты", "безопасность"],
        stock: true,
        image: '?'
    },
    {
        id: 15,
        name: 'Софт 6',
        price: 89.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["фотообработка", "графический дизайн", "векторная графика", "редактирование", "творчество", "инструменты", "плагин", "многослойность", "интерфейс", "оптимизация"],
        stock: true,
        image: '?'
    },
    {
        id: 16,
        name: 'Бот 6',
        price: 499.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["финансовый бот", "анализ", "интеграция", "управление", "обработка данных", "платежи", "интерактивность", "безопасность", "пользовательский интерфейс", "оптимизация"],
        stock: true,
        image: '?'
    },
    {
        id: 17,
        name: 'Софт 7',
        price: 159.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["анализ данных", "управление проектами", "инструменты", "планирование", "отчеты", "производительность", "интерфейс", "функциональность", "оптимизация", "пользовательский опыт"],
        stock: true,
        image: '?'
    },
    {
        id: 18,
        name: 'Бот 7',
        price: 649.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["маркетинг", "автоматизация", "анализ", "взаимодействие", "платформа", "поддержка клиентов", "интеграция", "статистика", "оптимизация", "пользовательский интерфейс"],
        stock: true,
        image: '?'
    },
    {
        id: 19,
        name: 'Спец-токен 5',
        price: 299.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Токен',
        tags: ["токенизация", "инвестиции", "платежи", "блокчейн", "децентрализованные финансы", "криптоактивы", "анализ рынка", "финансовые инструменты", "безопасность", "платформа"],
        stock: true,
        image: '?'
    },
    {
        id: 20,
        name: 'Софт 8',
        price: 74.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["менеджмент", "производительность", "анализ", "планирование", "управление", "инструменты", "оптимизация", "интерфейс", "отчеты", "функциональность"],
        stock: true,
        image: '?'
    },
    {
        id: 21,
        name: 'Бот 8',
        price: 299.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["бот для аналитики", "обработка данных", "платформа", "интеграция", "аналитика", "взаимодействие", "поддержка", "сбор данных", "оптимизация", "функциональность"],
        stock: true,
        image: '?'
    },
    {
        id: 22,
        name: 'Спец-токен 6',
        price: 119.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Токен',
        tags: ["криптовалюта", "инвестиции", "блокчейн", "токенизация", "платежи", "анализ рынка", "безопасность", "финансовые операции", "платформа", "токеномика"],
        stock: true,
        image: '?'
    },
    {
        id: 23,
        name: 'Софт 9',
        price: 199.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["обработка видео", "видеоредактор", "творчество", "редактирование", "инструменты", "эффекты", "монтаж", "плагин", "векторная графика", "анализ"],
        stock: true,
        image: '?'
    },
    {
        id: 24,
        name: 'Бот 9',
        price: 399.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["интерактивность", "платформа", "анализ данных", "интеграция", "маркетинг", "оптимизация", "поддержка", "автоматизация", "CRM", "интерфейс"],
        stock: true,
        image: '?'
    },
    {
        id: 25,
        name: 'Спец-токен 7',
        price: 89.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Токен',
        tags: ["блокчейн", "инвестиции", "криптовалюта", "платежи", "анализ рынка", "безопасность", "токенизация", "финансовые инструменты", "платформа", "токеномика"],
        stock: true,
        image: '?'
    },
    {
        id: 26,
        name: 'Софт 10',
        price: 89.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["управление задачами", "производительность", "анализ", "интерфейс", "инструменты", "планирование", "отчеты", "оптимизация", "функциональность", "управление"],
        stock: true,
        image: '?'
    },
    {
        id: 27,
        name: 'Бот 10',
        price: 449.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["бизнес-бот", "автоматизация", "платформа", "анализ данных", "интеграция", "пользовательский интерфейс", "поддержка клиентов", "оптимизация", "маркетинг", "интерактивность"],
        stock: true,
        image: '?'
    },
    {
        id: 28,
        name: 'Спец-токен 8',
        price: 349.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Токен',
        tags: ["токенизация", "инвестиции", "криптоактивы", "платежи", "блокчейн", "анализ рынка", "финансовые инструменты", "платформа", "токеномика", "безопасность"],
        stock: true,
        image: '?'
    },
    {
        id: 29,
        name: 'Софт 11',
        price: 109.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Софт',
        tags: ["планирование", "производительность", "анализ", "управление проектами", "инструменты", "отчеты", "интерфейс", "оптимизация", "функциональность", "интеграция"],
        stock: true,
        image: '?'
    },
    {
        id: 30,
        name: 'Бот 11',
        price: 399.99,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis accusamus eius exercitationem illo modi aperiam dolorum ex inventore? Excepturi amet nam quibusdam autem expedita modi animi sunt rerum iure!",
        category: 'Бот',
        tags: ["интеграция", "анализ данных", "платформа", "поддержка", "обратная связь", "автоматизация", "интерактивность", "CRM", "оптимизация", "пользовательский интерфейс"],
        stock: true,
        image: '?'
    },
];

const Lobby: React.FC = () => {
    return (
        <Layout pagename="Главная страница">
            <ProductGrid />
        </Layout>
    );
};

export default Lobby;
