import MDXComponents from '@theme-original/MDXComponents';

/**
 * Wide tables scroll sideways on narrow screens. A scrollable region must be
 * reachable by keyboard, so the table lives in a focusable wrapper.
 */
function ScrollableTable(props) {
  return (
    <div className="table-scroll" tabIndex={0}>
      <table {...props} />
    </div>
  );
}

export default { ...MDXComponents, table: ScrollableTable };
