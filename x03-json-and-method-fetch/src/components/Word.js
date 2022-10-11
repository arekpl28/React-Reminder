function Word(props) {
  return (
    <li>
      A word in English: <strong>{props.english}</strong>
      <br />A word in Polish: <strong>{props.polish}</strong>
    </li>
  );
}

export default Word;
