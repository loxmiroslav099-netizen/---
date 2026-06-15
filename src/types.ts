export type Category = 'Всі' | 'Текст' | 'Зображення' | 'Відео' | 'Аудіо' | 'Програмування' | 'Інше';

export interface AIService {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: Category;
  url: string;
  imageUrl?: string;
  pricing: 'Безкоштовно' | 'Є безкоштовний тариф' | 'Платно';
  isNew?: boolean;
  isTrending?: boolean;
  monthlyUsers?: string;
}
