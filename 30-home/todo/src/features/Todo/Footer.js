const MAIN_DIV_CLASS = 'mainDivFooter';

export default function Footer() {
  return (
    <div className={MAIN_DIV_CLASS}>
      <button>All</button>
      <button>Done</button>
      <button>Not done</button>
    </div>
  );
}
