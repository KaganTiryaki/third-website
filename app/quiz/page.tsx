"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, CheckCircle2, XCircle, RefreshCw, Trophy } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  funFact?: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What percentage of Earth's water is fresh and available for human use?",
    options: ["1%", "3%", "10%", "25%"],
    correctAnswer: 0,
    explanation: "Only about 1% of Earth's water is fresh and accessible. The rest is either saltwater or locked in ice caps.",
    funFact: "If all Earth's water fit in a 1-liter bottle, available freshwater would be just one tablespoon!"
  },
  {
    id: 2,
    question: "How much water does a dripping faucet waste per day?",
    options: ["5 liters", "20 liters", "75 liters", "150 liters"],
    correctAnswer: 2,
    explanation: "A faucet dripping once per second wastes approximately 75 liters of water per day.",
    funFact: "That's enough water to fill a bathtub every two days!"
  },
  {
    id: 3,
    question: "Which activity uses the most water in a typical household?",
    options: ["Showering", "Toilet flushing", "Laundry", "Dishwashing"],
    correctAnswer: 1,
    explanation: "Toilet flushing accounts for nearly 30% of household water use, making it the largest consumer.",
    funFact: "Older toilets can use up to 13 liters per flush, while modern dual-flush toilets use as little as 3 liters!"
  },
  {
    id: 4,
    question: "How long should an efficient shower last to conserve water?",
    options: ["2 minutes", "5 minutes", "10 minutes", "15 minutes"],
    correctAnswer: 1,
    explanation: "A 5-minute shower uses approximately 45 liters of water, which is considered efficient.",
    funFact: "Reducing shower time by just 2 minutes can save up to 18 liters per shower!"
  },
  {
    id: 5,
    question: "What percentage of the world's population lives in water-scarce regions?",
    options: ["10%", "25%", "40%", "55%"],
    correctAnswer: 2,
    explanation: "Approximately 40% of the global population lives in regions experiencing water scarcity.",
    funFact: "By 2025, half of the world's population could be living in water-stressed areas."
  },
  {
    id: 6,
    question: "How much water is used to produce one cotton t-shirt?",
    options: ["100 liters", "700 liters", "2,700 liters", "5,000 liters"],
    correctAnswer: 2,
    explanation: "It takes approximately 2,700 liters of water to produce the cotton for one t-shirt.",
    funFact: "That's enough water for one person to drink for 2.5 years!"
  },
  {
    id: 7,
    question: "Which uses less water: a dishwasher or hand washing dishes?",
    options: ["Dishwasher", "Hand washing", "They use the same", "Depends on the meal"],
    correctAnswer: 0,
    explanation: "Modern dishwashers use about 15 liters per load, while hand washing can use 60+ liters.",
    funFact: "Running a full dishwasher is 4 times more water-efficient than hand washing!"
  },
  {
    id: 8,
    question: "How many people worldwide lack access to safe drinking water?",
    options: ["500 million", "1 billion", "2.2 billion", "3.5 billion"],
    correctAnswer: 2,
    explanation: "Over 2.2 billion people around the world do not have access to safely managed drinking water.",
    funFact: "That's nearly 1 in 3 people globally without access to clean water."
  },
  {
    id: 9,
    question: "What time of day is best to water your garden to minimize waste?",
    options: ["Early morning", "Noon", "Late afternoon", "Evening"],
    correctAnswer: 0,
    explanation: "Early morning watering reduces evaporation loss and gives plants time to dry, preventing disease.",
    funFact: "Watering at noon can cause up to 30% of water to evaporate before reaching plant roots!"
  },
  {
    id: 10,
    question: "How much water can be saved annually by fixing a leaking toilet?",
    options: ["1,000 liters", "10,000 liters", "50,000 liters", "100,000 liters"],
    correctAnswer: 2,
    explanation: "A leaking toilet can waste up to 50,000 liters of water per year.",
    funFact: "That's equivalent to the amount of water used by 500 five-minute showers!"
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(quizQuestions.length).fill(false)
  );

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    const isCorrect = selectedAnswer === question.correctAnswer;

    if (isCorrect && !answeredQuestions[currentQuestion]) {
      setScore(score + 1);
      const newAnswered = [...answeredQuestions];
      newAnswered[currentQuestion] = true;
      setAnsweredQuestions(newAnswered);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false));
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return "Perfect! You're a water conservation expert! 🌟";
    if (percentage >= 80) return "Excellent! You know your water facts! 💧";
    if (percentage >= 60) return "Good job! You're on the right track! 👍";
    if (percentage >= 40) return "Not bad! Keep learning about water conservation! 📚";
    return "Keep trying! Every bit of knowledge helps save water! 💪";
  };

  if (quizCompleted) {
    return (
      <div className="flex flex-col py-12">
        <section className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-2xl mx-auto border-primary/20">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Trophy className="h-24 w-24 text-accent" />
                    <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full" />
                  </div>
                </div>
                <CardTitle className="text-3xl">Quiz Completed!</CardTitle>
                <CardDescription className="text-lg">
                  {getScoreMessage()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {score}/{quizQuestions.length}
                  </div>
                  <p className="text-muted-foreground">
                    You answered {score} out of {quizQuestions.length} questions correctly
                  </p>
                  <Progress value={(score / quizQuestions.length) * 100} className="h-3" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  <Button
                    onClick={handleRestartQuiz}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>
                  <Button asChild size="lg" className="w-full bg-gradient-to-r from-primary to-secondary">
                    <a href="/tips">
                      Learn More Tips
                    </a>
                  </Button>
                </div>

                <div className="pt-6 space-y-4">
                  <h3 className="font-semibold text-center">Share your knowledge!</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <Button asChild variant="outline" className="w-full">
                      <a href="/calculator">
                        Calculate Your Water Usage
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="/statistics">
                        View Water Statistics
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col py-12">
      {/* Hero Section */}
      <section className="container mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <Badge className="bg-accent/10 text-accent">
            <Award className="w-3 h-3 mr-1 inline" />
            Knowledge Test
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Water Conservation{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Quiz
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge about water conservation and learn fascinating facts
          </p>
        </motion.div>
      </section>

      {/* Progress Bar */}
      <section className="container mb-8">
        <div className="max-w-2xl mx-auto space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>Score: {score}/{quizQuestions.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </section>

      {/* Question Card */}
      <section className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{question.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Options */}
                <div className="grid grid-cols-1 gap-3">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === question.correctAnswer;
                    const showResult = showExplanation;

                    let buttonClass = "justify-start text-left h-auto py-4 px-6";
                    if (showResult) {
                      if (isCorrect) {
                        buttonClass += " bg-accent/10 border-accent text-accent hover:bg-accent/20";
                      } else if (isSelected && !isCorrect) {
                        buttonClass += " bg-destructive/10 border-destructive text-destructive hover:bg-destructive/20";
                      }
                    } else if (isSelected) {
                      buttonClass += " bg-primary/10 border-primary";
                    }

                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className={buttonClass}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showExplanation}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="flex-1">{option}</span>
                          {showResult && isCorrect && (
                            <CheckCircle2 className="h-5 w-5 ml-2" />
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <XCircle className="h-5 w-5 ml-2" />
                          )}
                        </div>
                      </Button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      <div
                        className={`p-4 rounded-lg border ${
                          selectedAnswer === question.correctAnswer
                            ? "bg-accent/5 border-accent/20"
                            : "bg-destructive/5 border-destructive/20"
                        }`}
                      >
                        <h4 className="font-semibold mb-2">
                          {selectedAnswer === question.correctAnswer
                            ? "Correct! ✓"
                            : "Not quite. ✗"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {question.explanation}
                        </p>
                      </div>

                      {question.funFact && (
                        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            💡 Fun Fact
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {question.funFact}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {!showExplanation ? (
                    <Button
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswer === null}
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                      size="lg"
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNextQuestion}
                      className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                      size="lg"
                    >
                      {currentQuestion < quizQuestions.length - 1
                        ? "Next Question"
                        : "View Results"}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
