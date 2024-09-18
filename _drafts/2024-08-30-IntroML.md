---
layout: post
title:  Intro to ML
date:   2023-01-01 00:00:00 +0000
academic: true
---

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
We just plotted the data and **figured out a pattern for passing the course**.

### Modeling the problem
Machine learning formalizes this process with **mathematical modeling**.
Under the *right model*, the solution can be written in closed form.
In other words, formal machine learning gives us a way to automatically figure out the patterns without visualizing the data.
This is helpful when we want to predict whether a random student will pass or fail given the number of hours they studied.

#### Assumption 1: $x$ is sampled iid
For example, in the above histogram, students who fail the course seem to have studied 3 hours on average, and those who passed studied 6 hours on average.

Let us consider a random student from any past or future semester.
We expect $x$ to behave similarly.
Roughly speaking, this corresponds to the assumption that students from all semesters have identical studying habits and behave independently from each other.

This is called the **iid assumption** (independent and identically distributed), and it is a crude assumption that simplifies things a lot in theory (but is often violated in practice, which makes ML on non-iid data an active area of research).
This is the first part of our mathematical model.

#### Assumption 2: $x$ is normally distributed
Given the passing grade of a student, students seem to be randomly scattered around the average.
This is clear from the histogram. Students who pass are roughly scattered around 6 hours.

When we say random, we either think about the normal distribution (bell-shaped curve) or the uniform distribution (box-shaped curve).
When the randomness concentrates around the average and is unbounded, we get a bell-shaped curve.
Otherwise, and especially when we have bounds, we have a uniform distribution. In the above, we can ignore the lower bound of 0 hours and assume unboundedness (you can't study negative hours, but you might slack so much, it would be like you are un-studying, so to speak).

This is the second part of our model.
**We assume that the number of studying hours of a random passing student is normally distributed around the average all passing students (and equivalently for non-passing students).**
We can also use fancier (but more helpful) distrbutions, but let us stick to normal distribution with some given variance for simplicity (e.g., $\sigma^2=1$).
Note that this assumption captures "long-tailed" effects, such as the outlier student who passed with only 2 hours of study.


#### Resulting Model
Based on these two assumptions, we can find a closed form expression for the best threshold if you use maximum likelihood as your objective. If you do the math (which I won't), you will see that it is just $(6+3)/2 = 4.5$. This is almost 5, so our theoretical result kinda agrees with our intuition.

Our prediction model under the two assumptions is $f(x) = \bm{1}\{x > 4.5\}$. That's pretty much it.

### Model complexity
In practice, $x$ may be complicated and not necessarily normally distributed.
Also, the rule for predicting $y$ may not be simple.
For example, maybe there is also an upper limit because students reporting an exorbitant number of studying hours are lying and thus they are likely to fail.

In that case, instead of using one threshold, we can use two! Bet you didn't see that coming. But what if the data is more complicated, and there are also outlier students with specific patterns for predicting their success? Should we add more thresholds?

As naive as a human decision can be in this scenario, this is, in fact, one of the biggest conundrums of machine learning, which is called the bias-variance trade-off.
As we make our predictor more complex, we make it more susceptible to overfitting.
In other words, we might be overanalyzing the data and fitting patterns that don't exist (i.e., random patterns).
Choosing the right complexity for the predictor is one of the main challenges in machine learning.

Nowadays, we have neural networks that run efficiently on dedicated hardware, and neural networks are magical in the sense that their complexity adapts to the task.
You could have the equivalent of a million thresholds for this silly problem, and the neural network might still not overfit. However, the same network can also fit completely random data, so it overfits! How is this possible? This is one of the most interesting research topics in machine learning, and this phenomenon is still not fully explained.

### Finding the model that fits the objective

Once we define our predictor model, the process of getting it might not always be direct.

It is often not possible to optimize the objective (e.g., expected risk) directly. For example, in simple linear regression, the objective can be optimized directly and a closed form solution is possible.

If a closed form solution is not possible, then we have to formulate a sound optimization problem that: 1) finds the solution that satisfies our needs, and 2) can be solved with efficient algorithms.

For example, in deep learning, we want a digit classifier, so we minimize a loss function on MNIST dataset and train the model with SGD or Adam. We find a solution that satisfies our needs (classifies digits with over 98% accuracy) and the algorithm is efficient (can run it on one GPU and be done in a few minutes).

Problem formulation is extremely important, despite the simplicity above. It is probably everything. Nowadays, the beauty of neural networks is that you can design all kinds of pipelines solving complex tasks, and you can mess up quite a bit and add unnecessary tricks. But at the end of the day, if your loss function is supposed to do something, and the algorithm is working, then your model is gonna do that something and probably generalize well. Thus, it is important to understand that, despite the robustness of the model, we still have to make sure that we are solving the right problem.


## Regression
Now what if we want to predict the actual grade, instead of pass or fail?
Instead of $y$ being -1 or +1, we want it to be a real number.
Perhaps counter-intuitively, we will see that binary classification is, in fact, the generalization, and not regression.

Let us consider the same data, but with actual grades instead.

```
                                   + + +   
                               + + + + + + +   
                 - - - -     + + + + + + + + +  
               + - - - - - + + + + + + + + + + +
           - - - - - - - + - - + + + + + + + + + + +
    0hrs -------------------- 5hrs -------------------- 10hrs
```

