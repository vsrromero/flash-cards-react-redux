import { Link } from "react-router-dom";
import routes from "../../app/routes";
import { useSelector } from 'react-redux';
import { selectQuizzes } from '../quizzes/quizzesSlice';

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes); // replace this with a call to your selector to get all the quizzes in state
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={routes.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={routes.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
