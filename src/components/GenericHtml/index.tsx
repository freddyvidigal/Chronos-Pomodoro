import styles from './styles.module.css';

type GenericHtmlProps = {
  children: React.ReactNode;
};
export function GenericHtml({ children }: GenericHtmlProps) {
  return <h1 className={styles.generic}>{children}</h1>;
}
