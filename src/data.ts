import { AIService } from './types';

export const aiServices: AIService[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Спілкування, генерація тексту, аналіз даних та написання коду.',
    longDescription: 'Мовна модель від OpenAI, здатна відповідати на питання, писати тексти, розуміти контекст та допомагати в багатьох завданнях.',
    category: 'Текст',
    url: 'https://chat.openai.com',
    pricing: 'Є безкоштовний тариф',
    isTrending: true,
    monthlyUsers: '100M+'
  },
  {
    id: '2',
    name: 'Gemini',
    description: 'Мультимодальна ШІ-модель від Google для тексту, зображень, відео та коду.',
    longDescription: 'Універсальний помічник від Google, інтегрований з екосистемою Google, здатний аналізувати веб-сторінки та працювати з різними форматами даних.',
    category: 'Текст',
    url: 'https://gemini.google.com',
    pricing: 'Є безкоштовний тариф'
  },
  {
    id: '3',
    name: 'Claude 3.5 Sonnet',
    description: 'Безпечний та швидкий ШІ-асистент від Anthropic, відмінно аналізує код та великі документи.',
    longDescription: 'Claude відомий своєю здатністю обробляти дуже великі обсяги тексту, природним стилем спілкування та розширеними можливостями аналізу.',
    category: 'Текст',
    url: 'https://claude.ai',
    pricing: 'Є безкоштовний тариф',
    isNew: true,
    isTrending: true
  },
  {
    id: '4',
    name: 'Midjourney v6',
    description: 'Генерація високоякісних зображень за текстовим описом у Discord.',
    longDescription: 'Одна з найпопулярніших нейромереж для створення вражаючих та деталізованих зображень, артів, фотореалістичних сцен.',
    category: 'Зображення',
    url: 'https://midjourney.com',
    pricing: 'Платно',
    isTrending: true
  },
  {
    id: '5',
    name: 'DALL-E 3',
    description: 'Створення зображень за текстом від OpenAI, інтегровано в ChatGPT.',
    longDescription: 'Генератор зображень, який відмінно розуміє складні промпти та може додавати текст на зображення.',
    category: 'Зображення',
    url: 'https://openai.com/dall-e-3',
    pricing: 'Платно'
  },
  {
    id: '6',
    name: 'Runway Gen-3 Alpha',
    description: 'Генерація кінематографічного відео за допомогою ШІ.',
    longDescription: 'Провідна платформа для створення відео з тексту або зображень, включає інструменти для відеомонтажу.',
    category: 'Відео',
    url: 'https://runwayml.com',
    pricing: 'Є безкоштовний тариф',
    isNew: true,
    isTrending: true
  },
  {
    id: '7',
    name: 'Suno',
    description: 'Створення повноцінних пісень з вокалом та музикою за текстовим описом.',
    longDescription: 'Революційний сервіс, який генерує музику в будь-якому жанрі, створюючи як інструментал, так і пісні з реалістичним вокалом.',
    category: 'Аудіо',
    url: 'https://suno.com',
    pricing: 'Є безкоштовний тариф',
    isTrending: true
  },
  {
    id: '8',
    name: 'GitHub Copilot',
    description: 'ШІ-помічник для програмістів, який автодоповнює код прямо в редакторі.',
    longDescription: 'Підвищує продуктивність розробників, генеруючи блоки коду, тести та допомагаючи з пошуком помилок на базі моделей OpenAI.',
    category: 'Програмування',
    url: 'https://github.com/features/copilot',
    pricing: 'Платно'
  },
  {
    id: '9',
    name: 'Cursor AI',
    description: 'Редактор коду з глибоким вбудованим ШІ для написання та редагування коду.',
    longDescription: 'Форк VS Code, створений спеціально для роботи з ШІ. Дозволяє взаємодіяти з кодовою базою за допомогою природної мови.',
    category: 'Програмування',
    url: 'https://cursor.sh',
    pricing: 'Є безкоштовний тариф',
    isTrending: true
  },
  {
    id: '10',
    name: 'ElevenLabs',
    description: 'Реалістичний синтез мовлення та клонування різними мовами.',
    longDescription: 'Найкращий у своєму класі сервіс для озвучення тексту різними мовами з емоціями та інтонаціями. Підтримує чудовий український акцент.',
    category: 'Аудіо',
    url: 'https://elevenlabs.io',
    pricing: 'Є безкоштовний тариф',
    isTrending: true
  },
  {
    id: '11',
    name: 'Perplexity AI',
    description: 'Пошукова система нового покоління, яка дає точні відповіді з посиланнями.',
    longDescription: 'Шукає інформацію в інтернеті в реальному часі та формулює відповіді, citing sources. Ідеально підходить для фактчекінгу та досліджень.',
    category: 'Текст',
    url: 'https://perplexity.ai',
    pricing: 'Є безкоштовний тариф',
    isTrending: true
  },
  {
    id: '12',
    name: 'Udio',
    description: 'Створення якісної музики та пісень за лічені секунди.',
    longDescription: 'Потужний та новий музичний генератор, який конкурує з Suno. Створює пісні чудової якості в будь-яких жанрах.',
    category: 'Аудіо',
    url: 'https://udio.com',
    pricing: 'Є безкоштовний тариф',
    isNew: true
  },
  {
    id: '13',
    name: 'Luma Dream Machine',
    description: 'Створення швидких та реалістичних відео за тексти чи зображеннями.',
    longDescription: 'Відео-генератор, здатний створювати високоякісні, плавні 5-секундні ролики з дивовижною швидкістю та стабільністю.',
    category: 'Відео',
    url: 'https://lumalabs.ai/dream-machine',
    pricing: 'Є безкоштовний тариф',
    isNew: true,
    isTrending: true
  },
  {
    id: '14',
    name: 'Leonardo AI',
    description: 'Платформа для комплексної роботи з генерацією зображень та 3D.',
    longDescription: 'Дає більше контролю над генерацією, ніж Midjourney. Відмінно підходить для геймдеву, концепт-артів та створення ассетів.',
    category: 'Зображення',
    url: 'https://leonardo.ai',
    pricing: 'Є безкоштовний тариф'
  },
  {
    id: '15',
    name: 'v0.dev',
    description: 'Генерація UI компонентів (React/Tailwind) за текстовим описом або з макету.',
    longDescription: 'Створений компанією Vercel. Дозволяє неймовірно швидко створювати інтерфейси, просто описуючи їх словами чи завантажуючи скріншот.',
    category: 'Програмування',
    url: 'https://v0.dev',
    pricing: 'Є безкоштовний тариф',
    isTrending: true
  }
];
