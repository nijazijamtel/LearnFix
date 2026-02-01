import { getAllQuizzes } from '@/data';
import ResultsClient from './ResultsClient';

export async function generateStaticParams() {
  return getAllQuizzes().map((quiz) => ({
    id: quiz.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <ResultsClient id={params.id} />;
}
