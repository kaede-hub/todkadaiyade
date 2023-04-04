
import 'bulma/css/bulma.css';
export const Filter = (props: { value: any; onChange: any; }) => {
  // propsを定義
  const { value, onChange } = props;
  // フィルターの切り替え
  const handleClick = (key: any, event: { preventDefault: () => void; }) => {
    event.preventDefault();
    onChange(key);
  };
  function classNames(arg0: { 'is-active': boolean; }): string | undefined {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, 'ALL')}
        className={classNames({ 'is-active': value === 'ALL' })}
      >All</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'TODO')}
        className={classNames({ 'is-active': value === 'TODO' })}
      >ToDo</a>
      <a
        href="#"
        onClick={handleClick.bind(null, 'DONE')}
        className={classNames({ 'is-active': value === 'DONE' })}
      >Done</a>
    </div>
  );
}
export default Filter;