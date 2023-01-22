import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import routes from "../../app/routes";
import { useSelector } from 'react-redux';
import { selectQuizzes } from '../quizzes/quizzesSlice';


export default function Topic() {
  const quizzes = useSelector(selectQuizzes); // replace this with a call to your selector to get all the quizzes in state
  let { quizId } = useParams();
  const quiz = quizzes[quizId];

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={routes.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
