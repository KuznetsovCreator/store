import Styles from "./CardSkeleton.module.css";
import {Skeleton} from "antd";

export const CardSkeleton = () => {
  return (
    <article className={Styles['skeleton']}>
      <div className={Styles['skeleton__header']}>
        <Skeleton.Image active/>
      </div>
      <div className={Styles['skeleton__body']}>
        <Skeleton active/>
      </div>
    </article>
  );
};