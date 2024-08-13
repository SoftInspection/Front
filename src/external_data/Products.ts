import Product from "../pages/general_components/Product"

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Microsoft Office 365',
        price: 99.99,
        description: "Microsoft Office 365 — это облачная платформа, которая предоставляет доступ к популярным офисным приложениям, включая Word, Excel, PowerPoint, а также к сервисам хранения данных и совместной работы.",
        category: 'Софт',
        tags: ["Офисные приложения", "Продуктивность", "Облачные сервисы", "Microsoft", "Word", "Excel", "PowerPoint", "Совместная работа", "Подписка", "Онлайн"],
        stock: true,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9x_D6rFXdcvrScL_BBCQx6DeooP7lyBUvg&s'
    },
    {
        id: 2,
        name: 'Slack',
        price: 199.99,
        description: "Slack — это корпоративный мессенджер, который позволяет командам общаться, обмениваться файлами и управлять проектами. Он интегрируется с множеством сторонних сервисов и поддерживает работу с ботами.",
        category: 'Вебсайт',
        tags: ["Командное общение", "Совместная работа", "Управление проектами", "Мессенджер", "Интеграции", "API", "Боты", "Файлообмен", "Проектное управление", "Облачные сервисы"],
        stock: true,
        image: 'https://assets.partnerfleet.app/variants/7odgm31xu3y3vczhkz95avh4jdoq/ea5fa4208abc630da645ee21b35af85af516002067d66c1440b56ce6cc7d0e8d'
    },
    {
        id: 3,
        name: 'Adobe Photoshop',
        price: 299.99,
        description: "Adobe Photoshop — это профессиональный графический редактор для создания и редактирования изображений. Он используется для фоторетуши, веб-дизайна, а также создания цифрового искусства.",
        category: 'Софт',
        tags: ["Графический дизайн", "Редактирование фотографий", "Фоторетушь", "Веб-дизайн", "Цифровое искусство", "Инструменты", "Эффекты", "Креативность", "Adobe", "Плагины"],
        stock: false,
        image: 'data:image/png;base64,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'
    },
    {
        id: 4,
        name: 'GitHub Copilot',
        price: 10.99,
        description: "GitHub Copilot — это AI-ассистент для программистов, который помогает писать код, предлагая автозаполнения и примеры на основе машинного обучения. Интегрируется в популярные среды разработки.",
        category: 'Бот',
        tags: ["Программирование", "AI", "Автозаполнение", "Интеграция", "GitHub", "Помощник разработчика", "Машинное обучение", "Кодинг", "IDE", "Автоматизация"],
        stock: true,
        image: 'data:image/png;base64,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'
    },
    {
        id: 5,
        name: 'NordVPN',
        price: 59.99,
        description: "NordVPN — это VPN-сервис, который обеспечивает безопасность и конфиденциальность в интернете, позволяя обходить географические ограничения и защищать данные при подключении к общедоступным Wi-Fi сетям.",
        category: 'Софт',
        tags: ["VPN", "Безопасность", "Конфиденциальность", "Интернет", "Шифрование", "Сети", "Обход ограничений", "Геолокация", "Защита данных", "Анонимность"],
        stock: false,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKakajBpM8YZR_hcWDWP3FfuC9Y-d-boq6g&s'
    },
    {
        id: 6,
        name: 'Zoom',
        price: 149.99,
        description: "Zoom — это платформа для видеоконференций, вебинаров и онлайн-встреч, которая позволяет проводить видеозвонки, совместно использовать экран и записывать сессии. Популярна среди компаний и учебных заведений.",
        category: 'Софт',
        tags: ["Видеоконференции", "Онлайн-встречи", "Совместное использование экрана", "Вебинары", "Запись", "Работа из дома", "Обучение", "Платформа", "Видеозвонки", "Коммуникации"],
        stock: true,
        image: 'https://logos-world.net/wp-content/uploads/2021/02/Zoom-Logo.png'
    },
    {
        id: 7,
        name: 'IntelliJ IDEA 2021',
        price: 599.99,
        description: "IntelliJ IDEA — интегрированная среда разработки программного обеспечения для многих языков программирования, в частности Java, JavaScript, Python, разработанная компанией JetBrains.",
        category: 'Софт',
        tags: ["JetBrains", "Программирование", "Среда разработки", "JavaScript", "Бэкэнд", "Рефакторинг", "Тестирование", "Системы контроля версий", "Плагины", "Многоплатформенность"],
        stock: true,
        image: 'https://dl.flathub.org/media/com/jetbrains/IntelliJ-IDEA-Community/823159c506d355127d36f6b989bbacc0/icons/128x128@2/com.jetbrains.IntelliJ-IDEA-Community.png'
    },
    {
        "id": 8,
        "name": "TaskCanvas",
        "price": 4.99,
        "description": "TaskCanvas — это приложение для управления задачами, которое помогает пользователям организовывать и приоритизировать свои дела. Оно включает функционал для работы с задачами в виде матрицы Эйзенхауэра, канбан-доски и визуализации статуса задач. Приложение предназначено для упрощения процесса планирования и повышения продуктивности.",
        "category": "Вебсайт",
        "tags": ["Управление задачами", "Организация", "Продуктивность", "Матрица Эйзенхауэра", "Канбан", "Визуализация задач", "Планирование", "Эффективность"],
        "stock": true,
        "image": "https://task-canvas-lake.vercel.app/static/media/logo.db374459f9d768262a28.png"
    },    
    {
        id: 9,
        name: 'Uniswap Token (UNI)',
        price: 19.99,
        description: "Uniswap — это децентрализованная биржа (DEX) для обмена криптовалютами, работающая на блокчейне Ethereum. UNI — это её токен управления, который позволяет пользователям участвовать в принятии решений по развитию платформы.",
        category: 'Токен',
        tags: ["Криптовалюта", "Блокчейн", "Токен управления", "Децентрализованная биржа", "Ethereum", "DeFi", "Инвестиции", "Трейдинг", "Управление", "Финансы"],
        stock: true,
        image: 'data:image/jpeg;base64,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'
    },
    {
        id: 10,
        name: 'Grammarly Premium',
        price: 139.99,
        description: "Grammarly — это онлайн-сервис, который помогает улучшать тексты на английском языке, исправляя грамматические ошибки, стилистические недочёты и предлагая улучшения. Премиум версия добавляет расширенные функции.",
        category: 'Вебсайт',
        tags: ["Грамматика", "Английский язык", "Письмо", "Текст", "Редактирование", "Корректура", "Инструменты", "Стиль", "Орфография", "Образование"],
        stock: true,
        image: 'data:image/png;base64,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'
    },
    {
        id: 11,
        name: 'TradingView Pro',
        price: 249.99,
        description: "TradingView — это платформа для технического анализа и торговли, которая предлагает инструменты для анализа рыночных данных, построения графиков и создания торговых стратегий. Pro версия предоставляет доступ к дополнительным функциям.",
        category: 'Софт',
        tags: ["Технический анализ", "Торговля", "Финансовые рынки", "Графики", "Торговые стратегии", "Рынок", "Анализ данных", "Инвестиции", "Финансы", "Криптовалюта"],
        stock: true,
        image: 'data:image/png;base64,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'
    }
];

export default PRODUCTS;