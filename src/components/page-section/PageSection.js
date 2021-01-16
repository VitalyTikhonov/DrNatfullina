import { memo } from 'react';
import styles from './PageSection.module.scss';

const PageSection = memo(function PageSection(props) {
  return (
    <section className={styles.section} >
      <h2 className={styles.headline} >Приветствую Вас на своем сайте!</h2>

      <p className={styles.parapraph} >
        Я эстет. Есть много врачебных специальностей, где это качество личности остаётся невостребованным. Но мне повезло, я нахожу ему применение в своей ежедневной практике!
      </p>
      <p className={styles.parapraph} >
        Мой стиль заключается в максимальной индивидуализации вашего зуба, вашей улыбки. Я воспринимаю зуб как единицу вашего тела и все его характеристики связаны с вами неразрывно, а потому и подход должен быть особым в каждом случае.
      </p>
      <p className={styles.parapraph} >
        Естественно, этот подход не может удовлетворить некоторых торопыг, которым нужно просто "как в журнале") таким я рекомендую некоторых своих коллег- и все счастливы!
      </p>
      <p className={styles.parapraph} >
        Вы знаете, что стоматолог может чилить в своем рабочем кресле? Да, я могу!)
      </p>
      <p className={styles.parapraph} >
        Обрабатывая каналы, делая сложную реставрацию, всё то, что доставляет мне удовольствие- одновременно расслабляет и поэтому вы часто засыпает в моём кресле- моё состояние передается вам.
      </p>
      <p className={styles.parapraph} >
        Когда нет спешки и рутины, то начинается искусство. Когда я вижу результат своего труда и он нравится ещё и вам- это чистый кайф!
      </p>
      <p className={styles.parapraph} >
        Я выбрала профессию стоматолога из-за крутого микса врачевания и творчества. С детства моя тяга к познанию человеческого организма и его возможностей сочеталась с эстетическим восприятием мира. Так что в какой-то степени то, кем я стану было предрешено)
      </p>
      <p className={styles.parapraph} >
        Итак, я тот врач, который лечит больные зубы, реставрирует утраченную красоту улыбки и помогает сохранить достигнутое надолго!
      </p>
    </section>
  )
});

export default PageSection;
