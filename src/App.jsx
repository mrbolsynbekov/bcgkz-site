import React from 'react'

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: '2rem' }}>Business Consulting Groups KZ</h1>
      <p><strong>Профессиональное сопровождение тендеров, сертификация, обучение и аутсорсинг.</strong></p>

      <h2 style={{ marginTop: '1.5rem' }}>🛠 Услуги:</h2>
      <ul>
        <li>🔹 Госзакупки и тендерное сопровождение</li>
        <li>🔹 Обучение работе на порталах закупок</li>
        <li>🔹 Аутсорсинг бухгалтерии и юриспруденции</li>
        <li>🔹 Регистрация ИП/ТОО и аккредитация</li>
        <li>🔹 Сертификация ISO, СТ-KZ и прочее</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>📈 Кейсы:</h2>
      <ul>
        <li>✔️ Сопровождение тендера на 45 млн ₸ (ЖКХ)</li>
        <li>✔️ Сертификация компании за 3 дня</li>
        <li>✔️ Обучение 20 сотрудников онлайн</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>🗣 Отзывы клиентов:</h2>
      <ul>
        <li>💬 “Работаем с ними год — всё чётко и вовремя.”</li>
        <li>💬 “С первого раза выиграли тендер.”</li>
        <li>💬 “Сильная поддержка и понятные курсы.”</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>❓ FAQ:</h2>
      <ul>
        <li>⏱ Сроки? — от 3 до 10 рабочих дней.</li>
        <li>📍Работаете по регионам? — Да, по всей РК.</li>
        <li>🏆 Можно выиграть с первого раза? — Да!</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>📩 Связь:</h2>
      <p>
        <strong>WhatsApp:</strong>{' '}
        <a href="https://wa.me/77070000000" target="_blank" rel="noreferrer">
          <button style={{
            padding: '0.8rem 1.5rem',
            background: '#25D366',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginTop: '0.5rem'
          }}>
            Написать в WhatsApp
          </button>
        </a>
      </p>
    </div>
 <h2 style={{ marginTop: '3rem' }}>🖼 Визуальный макет сайта:</h2>
<p>Вот как будет выглядеть будущий полноценный сайт с оформлением:</p>
<img
  src="https://i.imgur.com/yourimage.png" // заменю ссылку после загрузки
  alt="Макет сайта BCGKZ"
  style={{
    width: '100%',
    borderRadius: '12px',
    marginTop: '1rem',
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
  }}
/>
 )
}
