import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccessDisclaimer } from "@/components/access-disclaimer"

export default function FreeResourcesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-tim-brown">Free Learning Resources</h1>
        <p className="text-muted-foreground mt-2">
          Curated collection of free learning resources to help you learn SQL, Python, and Machine Learning
        </p>
      </div>

      <AccessDisclaimer />

      <Tabs defaultValue="sql">
        <TabsList className="mb-6 bg-tim-cream/30">
          <TabsTrigger value="sql" className="data-[state=active]:bg-tim-red data-[state=active]:text-white">
            SQL Training
          </TabsTrigger>
          <TabsTrigger value="python" className="data-[state=active]:bg-tim-red data-[state=active]:text-white">
            Python for Data Science
          </TabsTrigger>
          <TabsTrigger value="ml" className="data-[state=active]:bg-tim-red data-[state=active]:text-white">
            Machine Learning
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sql" className="mt-0">
          <div className="grid grid-cols-1 gap-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-tim-brown">SQL Training Resources</h2>
              <p className="mb-6">
                SQL (Structured Query Language) is essential for working with databases and analyzing data. These
                resources will help you learn SQL from beginner to advanced levels.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-tim-brown">SQL Basics</CardTitle>
                    <CardDescription>Resources for beginners to learn SQL fundamentals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://www.khanacademy.org/computing/computer-programming/sql"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Khan Academy SQL Course
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.w3schools.com/sql/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          W3Schools SQL Tutorial
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://sqlzoo.net/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          SQL Zoo Interactive Tutorials
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mode.com/sql-tutorial/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Mode Analytics SQL Tutorial
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-tim-brown">Intermediate SQL</CardTitle>
                    <CardDescription>Resources for those who know the basics and want to advance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://www.datacamp.com/courses/intermediate-sql"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          DataCamp Intermediate SQL
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.hackerrank.com/domains/sql"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          HackerRank SQL Challenges
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.codecademy.com/learn/learn-sql"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Codecademy SQL Course
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://sqlbolt.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          SQLBolt Interactive Lessons
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-tim-brown">Advanced SQL</CardTitle>
                    <CardDescription>Resources for advanced SQL techniques and optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://www.postgresql.org/docs/current/tutorial.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          PostgreSQL Official Tutorial
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://use-the-index-luke.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          SQL Indexing and Tuning Guide
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://advancedsqlpuzzles.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Advanced SQL Puzzles
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/playlist?list=PL1XF9qjV8kH12PTd1WfsKeUQU6e83ldfc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Advanced SQL YouTube Series
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="python" className="mt-0">
          <div className="grid grid-cols-1 gap-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-tim-brown">Python for Data Science Resources</h2>
              <p className="mb-6">
                Python is the most popular language for data science and machine learning. These resources will help you
                learn Python specifically for data analysis and ML applications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-tim-brown">Python Fundamentals</CardTitle>
                    <CardDescription>Resources for learning Python basics for data science</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://www.datacamp.com/courses/intro-to-python-for-data-science"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          DataCamp Python Basics
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.learnpython.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Learn Python Interactive Tutorial
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.kaggle.com/learn/python"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Kaggle Python Course
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.edx.org/course/introduction-to-python-for-data-science-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          edX Python for Data Science
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-tim-brown">Data Analysis Libraries</CardTitle>
                    <CardDescription>Resources for learning NumPy, Pandas, and Matplotlib</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Pandas Official Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://numpy.org/learn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          NumPy Learning Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://matplotlib.org/stable/tutorials/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Matplotlib Tutorials
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.kaggle.com/learn/data-visualization"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Kaggle Data Visualization
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-tim-brown">Python for Data Engineering</CardTitle>
                    <CardDescription>Resources for learning Python for data pipelines and ETL</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://realpython.com/python-data-cleaning-numpy-pandas/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Real Python: Data Cleaning
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.freecodecamp.org/news/data-science-with-python-8-ways-to-do-data-visualization-with-python-16c1a9b0bbe9/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          FreeCodeCamp: Data Visualization
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/apache/airflow"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Apache Airflow Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.prefect.io/tutorials/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Prefect Tutorials
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </TabsContent>

        <TabsContent value="ml" className="mt-0">
          <div className="grid grid-cols-1 gap-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-tim-brown">Machine Learning Resources</h2>
              <p className="text-muted-foreground mb-6">
                These free learning resources will help you learn machine learning concepts, algorithms, and applications from
                beginner to advanced levels.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-tim-brown">ML Fundamentals</CardTitle>
                    <CardDescription>Resources for learning machine learning basics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://www.coursera.org/learn/machine-learning"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Andrew Ng's Machine Learning Course
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.kaggle.com/learn/intro-to-machine-learning"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Kaggle Intro to Machine Learning
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.fast.ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Fast.ai Practical Deep Learning
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://developers.google.com/machine-learning/crash-course"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Google ML Crash Course
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-tim-brown">ML Libraries & Frameworks</CardTitle>
                    <CardDescription>Resources for learning scikit-learn, TensorFlow, and PyTorch</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://scikit-learn.org/stable/tutorial/index.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          scikit-learn Tutorials
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.tensorflow.org/tutorials"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          TensorFlow Tutorials
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pytorch.org/tutorials/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          PyTorch Tutorials
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://huggingface.co/learn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Hugging Face NLP Course
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-tim-brown">Advanced ML Topics</CardTitle>
                    <CardDescription>Resources for advanced machine learning concepts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a
                          href="https://www.deeplearning.ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          DeepLearning.AI Specializations
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://course.fast.ai/Lessons/lesson1.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Fast.ai Deep Learning Course
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.kaggle.com/learn/computer-vision"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Kaggle Computer Vision Course
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.kaggle.com/learn/natural-language-processing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-tim-red hover:underline"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Kaggle NLP Course
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

