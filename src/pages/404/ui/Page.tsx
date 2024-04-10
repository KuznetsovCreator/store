import {Link} from "react-router-dom";
import {Button} from "antd";
import Styles from './Page.module.css'

export const Page = () => {
  return (
    <section className={Styles['section']}>
      <div className={`container ${Styles['section__container']}`}>
        <h1 className={Styles['lead']}>404</h1>
        <p style={{maxWidth: 400, textAlign: 'center'}}>
          Страница которую вы ищите не найдена или была удалена
        </p>
        <Link to="/" style={{marginTop: 50}}>
          <Button type="primary">На главную</Button>
        </Link>
      </div>
    </section>
  );
}