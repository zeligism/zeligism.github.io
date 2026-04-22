---
layout: post
title:  Machine Learning Without Math (Almost)
date:   2026-04-01 00:00:00 +0000
academic: false
---

In this post, I'll try to explain machine learning without math (well, almost).

Machine learning is about prediction.
At least it could be framed in predictive framework most of the time.
We predict a result based on what is given.
In other words, machine learning could be framed as a process that takes input $x$ and gives output $y$.
Sure, this is just a function $y = f(x)$, right?
Yes, but, here, instead of being given $f$ and computing $y$ from $x$, we are given $(x,y)$ and are asked to learn $f$.

We call the pair $(x,y)$ **data**.
$x$ could be literally anything.
Namely, $x$ could come from different *modalities*, such as images, texts, 3D scans, tables, etc.
On the other hand, $y$ could also be literally anything.
It could be an image! Why not? When you ask ChatGPT to draw an image, this is what it is doing.
Your prompt is $x$ and $y$ is the image.
You shouldn't think of $y$ as a label only.
Just think of it as an output.
In the simplest case, $y$ is a binary label, so the **prediction** task simplifies to a **classification** task.
We can consider multiple labels as well, but let us stick to binary labels for ease of presentation.

---

## Binary classification
Logistic regression simply takes $x$ and gives out an output between the binary labels (could be $[0,1]$ or $[-1,1]$, but the latter is more common).
Let us consider binary labels +1 and -1. If the output is bigger than 0, then we predict 1, otherwise we predict -1.
Pretty straightforward.

Let us consider a simple example. Let $x$ be the number of hours a student studies, and $y$ is the passing grade (pass = 1, no pass = -1).
We can collect a bunch of data from past semesters on a tough course and get a silly histogram like this.

```
                                   + + +   
                               + + + + + + +   
                 - - - -     + + + + + + + + +  
               + - - - - - + + + + + + + + + + +
           - - - - - - - + - - + + + + + + + + + + +
    0hrs -------------------- 5hrs -------------------- 10hrs
```

A histogram basically just stacks labels on top of each other.
This is usually done in "bins" that group together a bunch of nearby $x$. The thinner the bins, the more precise (but noisier) your histogram will be.

For example, in the above histogram, most of the students studied over 5 hours. Seems like 5 hours is the magic **threshold** that *almost* guarantees passing the course.

What we did is machine learning at its most primitive level.
We just plotted the data and **figured out a pattern/rule for passing the course**.

### Modeling the problem
Machine learning formalizes this process with **mathematical modeling**, writes down precise equations that describe your input and how it's mapped into output.
In other words, machine learning gives us a way to automatically figure out the patterns through the math without visualizing the data.
This is helpful when we want to predict whether a random student will pass or fail given the number of hours they studied.
It is also helpful when the data is complicated and visualization can't help.

#### Assumption 1: $x$ is sampled iid
For example, in the above histogram, students who fail the course seem to have studied 3 hours on average, and those who passed studied 6 hours on average.

Let us consider a random student from any past or future semester.
We expect $x$ to behave similarly.
Roughly speaking, this corresponds to the assumption that students from all semesters have identical studying habits and behave independently from each other.

This is called the **iid assumption** (independent and identically distributed), and it is a crude assumption that statisticians and machine learning researchers love because it simplifies things a lot in theory.
This is the first part of our mathematical model.

#### Assumption 2: $x$ is normally distributed
Given the passing grade of a student, students seem to be randomly scattered around the average.
This is clear from the histogram. Students who pass are roughly scattered around 6 hours.

When we say random, we either think about the normal distribution (bell-shaped curve) or the uniform distribution (box-shaped curve).
When the randomness concentrates around the average and is unbounded, we get a bell-shaped curve.
Otherwise, when we have bounds, we usually have a uniform distribution.
In the above, we can ignore the lower bound of 0 hours and assume unboundedness (you can't study negative hours, but you might slack so much that it would be like you are un-studying, you know what I mean?)

This is the second part of our model.
**We assume that the number of studying hours of a random passing student is normally distributed around the average all passing students (and equivalently for non-passing students).**
We can also use fancier (but more helpful) distrbutions, but let us stick to normal distribution with some given variance for simplicity (e.g., $\sigma^2=1$).
Note that this assumption captures "long-tailed" effects, such as the outlier student who passed with only 2 hours of study.


#### Resulting Model
Based on these two assumptions, we can find a closed form expression for the best threshold if you use maximum likelihood as your objective. If you do the math (which I won't), you will see that it is just $(6+3)/2 = 4.5$. This is almost 5, so our theoretical result kinda agrees with our intuition.

Our prediction model under the two assumptions is $f(x)$ = 1 if x is larger than 4.5, 0 otherwise. That's pretty much it.

### Model complexity
In practice, $x$ may be complicated and not necessarily normally distributed.
Also, the rule for predicting $y$ may not be simple.
For example, maybe there is also an upper limit because students reporting an exorbitant number of studying hours are lying and thus they are likely to fail.

In that case, instead of using one threshold, we can use two! (Bet you didn't see that coming.) But what if the data is more complicated, and there are also outlier students with specific patterns for predicting their success? Should we add more thresholds?

As naive as a human decision can be in this scenario, this is in fact one of the biggest conundrums of machine learning, which is called the bias-variance trade-off.
As we make our predictor more complex, we make it more susceptible to overfitting.
In other words, we might be overanalyzing the data and fitting patterns that don't exist (i.e., random patterns).
Choosing the right complexity for the predictor is one of the main challenges in machine learning...
or it used to, until deep learning came and gave the middle finger to this Occam's razor logic.

Nowadays, deep learning models can run efficiently on GPUs, and deep learning is magical in the sense that the complexity of the model (i.e., neural networks) adapts to the task.
You could have the equivalent of a million thresholds for this silly problem, and the neural network will by find the correct solution somehow and not overfit. The same network will also gladly fit complete garbage random data, so it overfits if it wants to! How is this possible? Nobody knows. This is one of the most interesting puzzles in deep learning, and it still hasn't been fully explained.

### Finding the model that fits the objective

Once we define our predictor model, the process of getting it might not always be direct.

It is often not possible to optimize the objective (e.g., expected risk) directly. For example, in simple linear regression, the objective can be optimized directly and a closed form solution is possible.

If a closed form solution is not possible, then we have to formulate a sound optimization problem that: 1) finds the solution that satisfies our needs, and 2) can be solved with efficient algorithms.

For example, in deep learning, we want a digit classifier, so we minimize a loss function on MNIST dataset and train the model with SGD or Adam. We find a solution that satisfies our needs (classifies digits with over 98% accuracy) and the algorithm is efficient (can run it on one GPU and be done in a few minutes).

Problem formulation is extremely important, despite the simplicity above. It is probably everything. Nowadays, the beauty of neural networks is that you can design all kinds of pipelines solving complex tasks, and you can mess up quite a bit and add unnecessary tricks. But at the end of the day, if your loss function is supposed to do something, and the algorithm is working, then your model is gonna do that something and probably generalize well. Thus, it is important to understand that, despite the robustness of the model, we still have to make sure that we are solving the right problem.

## Regression
Now what if we want to predict the actual grade, instead of pass or fail?
Instead of $y$ being -1 or +1, we want it to be a real number.

Let us consider the same data, but with actual grades instead.

```
                                   7 8 9   
                               7 7 7 7 8 8 9   
                 3 3 4 4     2 7 7 6 7 8 8 8 9  
               2 2 2 4 4 4 4 5 7 6 6 7 7 7 8 8 9
           1 2 6 1 2 2 3 5 5 8 6 6 6 7 6 7 7 7 7 8
    0hrs -------------------- 5hrs -------------------- 10hrs
```

Since the points have a numerical value, we can rely on the vertical axis to represent this numerical value and get a bette representation
```
    9 |                                       1   1 1 1       
    8 |                             1       1 2 2 2 1   1     
    7 |                               3 2 2 4 1 2 1 1 1       
    6 |               1               1 2 3   1               
    5 |                         1 1 1                        
    4 |                     2 2 1 1                            
    3 |                 1 1   1                                
    2 |             1 1 1 2 1                                  
    1 |           1     1                                     
grade |    0hrs -------------------- 5hrs -------------------- 10hrs
```

The numbers represent the frequency of students who got that grade given the number of study hours.
We can see a clear linear trend; the number of study hours predict the grade reliably, except for some outlier cases.
In math, a linear equation is represented as $$\textsf{grade} = a \cdot \textsf{hours} + b$$, where $$a$$ and $$b$$ are some numbers that we can figure out with algebra.
That's linear regression in a nutshell.

---

## Binary Classification > Regression

[*This section has math. Boooo 👻*]

It's tempting to say that regression generalizes binary classification.
Indeed, we can easily get +1 and -1 from a real number using a thresholding rule.
In the above case, if a grade is 5 or more, it gets a +1. Otherwise, it gets a -1.

However, I will show you that the opposite is true in a deeper sense.
Namely, I'll show the counter-intuitive fact that binary classification is a general form of prediction than regression!

### Why is (Binary) Classification > Regression?

First of all, the given data points in the above case are the number of study hours, usually called the regressor, input, or $$X$$.
What we want to predict is whether a student passes or fails. They call what we want to predict the regressand, label, output, or $$Y$$.

In the regression case, the predicted grade is $$\textsf{grade} = a \cdot \textsf{hours} + b$$.
What about binary classification?
That's the part where people jump to conclusion quickly and think of prediction in terms of bits.
In learning theory / Bayesian decision making, we represent a predicted label as a **probability** given $$x$$ (which we'll skip sometimes for clarity):

$$
\Pr[\textsf{pass} = +1 | \textsf{hours} = x].
$$

The given value in the formula above is the number of hours $$x$$, and the output is the probability that the student will pass.
Probabilities have values in [0, 1], but we can easily map them to [-1, +1], and vice versa; it's just a convention.
The fact that binary classification is learning a *conditional probability function* under the hood changes the picture completely.

Instead of interpreting $$\textsf{grade} -> \textsf{pass}$$ as a conversion from a real number to a bit,
we interpret it as a data generating process $$\Pr[\textsf{pass}] -> \textsf{grade}$$.
That is a very Bayesian way of looking at things because the typial Bayesian would argue that the grade is merely the belief/credence/probability that the student will pass, rescaled to some range, such as 0 to 9 (by multiplying the probability by 9).

Ok, but how do we learn $$f(x) = \Pr[\textsf{pass} | \textsf{hours} = x]$$, which would then give us $$\textsf{grade}$$ after rescaling?
Well, we use regression! LOL.

I bet you're confused. Hear me out.
The term **binary** classification is confusing.
It's true that we output a binary label, but the real part is **classification** because we actually never learn a binary function from data directly!
Ok, rarely, not never.
Learning binary functions *directly* requires exponential effort and memory; it's like memorizing a look-up table.
We almost always have missing data or noise in real-life, so probabilities come in for the rescue to represent those uncertainties.

### Bayes Rule and Maximum Likelihood

So, how do we learn those "probabilities"? We use the celebrated Bayes rule!

$$
\Pr[\textsf{pass} | \textsf{hours}] \Pr[\textsf{hours}] = \Pr[\textsf{hours} | \textsf{pass}] \Pr[\textsf{pass}].
$$

The unknown object of interest is $$\Pr[\textsf{pass} | \textsf{hours}]$$, which is the prediction we want to make.
We are given $$\Pr[\textsf{hours}]$$.
This is the data we collected. Its value is not that important as we'll see.
The probability $$\Pr[\textsf{pass}]$$ is our prior belief in the probability of passing, which can be 0.5 for equal chances if no historical evidence is available.

Here comes the interesting one: $$\Pr[\textsf{hours} | \textsf{pass}]$$.
What the hell is this?
The "probability" of having studied some given number of hours given a pass grade,
which doesn't make sense because... you got the grade, so you must know how many hours you studied already, right?
Correct. That's why they call it **likelihood**, not probability, and that's the part where we have some leeway in modeling the data generating process.

In order to determine the best $$\Pr$$, the most intuitive thing to do is to choose the probability distribution that maximmizes the evidence we have collected based on the dataset.
In other words, we choose the probability distribution that maximizes the likelihood.
That process is called [maximum likelihood estimation (MLE)](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation),
the foundation that most machine learning models is based on.
The Bayesian upgrade to that is when we also plug in our prior beliefs on $$\Pr[\textsf{pass}]$$, which would give us the [maximum a posterior estimation](https://en.wikipedia.org/wiki/Maximum_a_posteriori_estimation).

### Maximum Likelihood is Linear Regression?!

The canonical example that demonstrates the generality of classification and MLE is the following one.
Let's assume that: (i) the grades follow a linear trend, and (ii) the (vertical) errors from that line follow a normal distribution.
Then, MLE gives us ordinary linear regression exactly.
See [here](https://www.statlect.com/fundamentals-of-statistics/linear-regression-maximum-likelihood), for example.
Isn't that amazing?
I still feel amazed by this equivalence.
I think it's one of the most beautiful results in learning theory.

"**But my output space is unbounded!**"

I hear you, but that's ok. It's easily fixable.

Instead of modeling predictions as $$\Pr[\textsf{pass} | \textsf{hours} = x]$$,
we use $$\Pr[\textsf{pass} | \textsf{hours} > x]$$.
Note the inequality.

There is no shortage of probability distributions out there,
but the normal distribution is most likely all you need.
In fact, many distributions are transformations of (a collection of) normal variables.
Choosing the right distribution to model the randomness or uncertainty in the data generating process is an art that comes with experience.
Recall the section "*Modeling the problem*" above and see whether the connection to process modeling makes sense or not.

---

## Machine Learning in a Nutshell

Let me recap what machine learning is:

1. Collect data from the real world.
2. Model the data generation process. (Hint: you can model only the part required for predicting a bit.)
3. Fit the model to the data.
4. Predict the future with your model. (Hint: your prediction could be a bit or a full simulation.)

That's basically it. Allow me to elaborate.

Collecting data is an extremely important part of machine learning.
Some of the biggest AI companies focus completely on this part, and Big Tech are all doing it like crazy.

Next is the modeling part, which is an art that is learned from study, practice, and experience.
It's difficult to describe algorithmically and can be extremely varied in terms of what is being modeled, how efficient the model is, and how scientifically valid or mathematically rigorous.
It usually requires translating your real-world problem to a mathematical model that is tractable, analyzable, and solvable with math.

Once we model the problem, we're halfway there.
After modeling comes the "solving", which we also denote with *fitting* or *training* the model in machine learning.
This is often exclusively the territory of optimization scientists.
Machine learning engineers do not touch this part and assume it's correct as is.
It's difficult to make progress here because the simplest methods for training models seem to work remarkably well in practice (which is a bitter reminder for those doing research in optimization, including myself).

Finally, the prediction part is often assumed to be simple, which used to be very true since "predictions" are done constantly in modern training algorithms, i.e., models have to do a *forward pass* on the data, which is not necessarily required for simpler classes of (older) models.
Nowadays, prediction—or inference as it's usually called—is a whole science, especially for large language models.
Depending on the model, the forward pass during model training can look very different in inference.
Due to business needs, the forward pass during model inference is being pushed to be much more efficient.
This is the part that happens where we chat with language models.

---

## Concluding Thoughts

What I love about machine learning is its broad applicability to solve many tasks in life using machines.

I mean, look at what machine learning models we have nowadays.
Who knew, ten years ago, that machine learning will give us ChatGPT?

Do you what these language models are modeling?
They are just modeling the next word ($$y$$) give a sequence words ($$x$$).
Given a prompt, they predict the next word.
And do you know how they predict the word after it?
I kid you not, they just append the previous word to the prompt and—you guessed it—predict the next word.
Yet here we are.
These things works *crazy* well, and the funny part is, **nobody knows why**. I swear.

Looking at it more deeply, the goal of machine learning has always been broad, and it's only natural that we got here.
Machine learning has always tried to *model the world*, but we only model the parts that matter to us and only use models that are solvable or trainable with tractable algorithms, i.e., algorithms that don't take forever and can work on our computers.

I hope you enjoyed this high-level(-but-sometimes-has-math) post on machine learning.
Let me know if you enjoyed it or have feedback.
I'd especially welcome feedback from people coming from non-technical background.

