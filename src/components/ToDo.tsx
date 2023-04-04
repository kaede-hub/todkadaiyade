

export const ToDo = (props: { todo: any; onCheck: any; }) => {
  // stateを作成
  const { todo, onCheck } = props;
  // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };
  function classNames(arg0: { 'has-text-grey-light': any; }): string | undefined {
    throw new Error('Function not implemented.');
  }

  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={handleChange}
      />
      <span
        className={classNames({
          'has-text-grey-light': todo.done
        })}
      >
        {todo.text}
      </span>
    </label>
  );
}
export default ToDo;