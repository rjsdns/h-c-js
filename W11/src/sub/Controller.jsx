const Controller = ({onClickFun}) => {
  return (
    <>
      <button onClick={() => {onClickFun(-1);}}> -1 </button>
      <button onClick={() => {onClickFun(-10);}}> -10 </button>
      <button onClick={() => {onClickFun(-100);}}> -100 </button>
      <button onClick={() => {onClickFun(+100);}}> +100 </button>
      <button onClick={() => {onClickFun(+10);}}> +10 </button>
      <button onClick={() => {onClickFun(+1);}}> +1 </button>
    </>
  );
};
export default Controller;
