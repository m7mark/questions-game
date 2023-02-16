import { useEffect, useState } from 'react'
import { questionsData } from '../../../assets/data'
import { shuffle } from '../../../utils/shuffleArray'

export const useQuestions = () => {
  const countElements = questionsData.length
  const [shuffledArray, setShuffledArray] = useState<string[] | undefined>()
  const [currentQuestion, setCurrentQuestion] = useState<string>()
  const [slideIn, setSlideIn] = useState(true)
  const [num, setNum] = useState<number>(0)

  useEffect(() => {
    if (!shuffledArray) {
      setShuffledArray(shuffle(questionsData))
    } else {
      setCurrentQuestion(shuffledArray[num])
    }
  }, [num, shuffledArray])

  const setQuestion = (prop: 'prev' | 'next') => {
    if (
      (prop === 'prev' && num > 0) ||
      (prop === 'next' && num < countElements - 1)
    ) {
      setSlideIn(false)
      setTimeout(() => {
        setNum((num) => (prop === 'prev' ? num - 1 : num + 1))
        setSlideIn(true)
      }, 300)
    }
    return
  }

  return { num: num + 1, setQuestion, countElements, currentQuestion, slideIn }
}
