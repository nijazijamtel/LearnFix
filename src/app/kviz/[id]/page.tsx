import { getAllQuizzes } from '@/data';
import QuizClient from './QuizClient';

export async function generateStaticParams() {
  return getAllQuizzes().map((quiz) => ({
    id: quiz.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <QuizClient id={params.id} />;
}
