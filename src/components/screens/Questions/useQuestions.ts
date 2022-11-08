import { useEffect, useState } from 'react'
import { questionsData } from '../../../assets/data'
import { shuffle } from '../../../utils/shuffleArray'

export const useQuestions = () => {
  const countElements = questionsData.length
  const [shuffledArray, setShuffledArray] = useState<string[] | undefined>()
  const [currentQuestion, setCurrentQuestion] = useState<string>()
  const [num, setNum] = useState<number>(0)

  console.log(shuffledArray)

  useEffect(() => {
    if (!shuffledArray) {
      setShuffledArray(shuffle(questionsData))
    } else {
      setCurrentQuestion(shuffledArray[num])
    }
  }, [num, shuffledArray])

  const setQuestion = (prop: 'prev' | 'next') => {
    if (prop === 'prev' && num > 0) setNum((num) => num - 1)
    if (prop === 'next' && num < countElements - 1) setNum((num) => num + 1)
    return
  }

  return { num: num + 1, setQuestion, countElements, currentQuestion }
}
