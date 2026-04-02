---
layout: post
title:  Bayesian Coin Betting
date:   2025-12-28 15:42:43 +0900
academic: false
---

In 1855, John Snow—-the English physician, not the prince of Dragonstone—-presented a compelling study that showed that Cholera was caused was transmitted through contaminated water or food and that its cause was something that reproduced within the body, an argument that preceded the foundations of modern microbiology by twenty years. For comparison, other hypotheses at the time were: miasma (bad air), poison on the ground, or an “imbalance in the humors of the body.” What is especially interesting in hindsight is how Snow corroborated this causation claim, which focused on design and bias mitigation rather than extracting a signal from sampling noise. In other words, sampling error and p-values were not central to his argument, but rather study design was.

Some of the observations that led Snow to reach his conclusion were:
The lag between exposure and symptoms, which is easier to explain by the multiplication of the cause in the body.
Cholera spread along the tracks of human commerce, e.g., sailors in an infected port. Close contact seemed to be necessary for infection even along those tracks, so this rules out the miasma theory.
Another case is of a man contracting the disease from a contaminated bedding, which was used by someone who recently died from cholera.
One building heavily infected with cholera drew from a contaminated water supply, whereas an adjacent one with a relatively pure water supply was largely spared.
A spot map of cholera case during the outbreak of August 1854 showed a striking cluster around the Broad Street pump. Intriguingly, a nearby brewery and a poorhouse had or no cholera deaths. Turned out they had private water pumps. In the brewery’s case, preferring beer over water might have even saved the workers. Interestingly, The Broad Street pump might have explained farther away cases, such as the lady who sent her servant to draw from this pump because she “so much liked the taste”.
Ecological data, i.e., statistical evidence (finally!), of the correlation between water quality and cholera death rates. Snow was well-aware that sampling bias and confounders can distort the comparison. However, the two water companies in the study were competitors serving very similar demographics, so the people had little idea where the water was coming from, which made for a sufficiently (quasi-)random sample. Take a look at the table below (Snow’s Table IX). We don’t need sophisticated analyses or assumptions to see that there was something badly wrong with Southwark and Vauxhall’s water

| Water supplier | Deaths per 10,000 houses |
| Southwark and Vauxhall | 315 |
| Lambeth | 37 |
| Rest of London | 59 |

Given the above observations together, the evidence were enough to make for a remarkably strong case supporting Snow’s hypothesis: that cholera is caused by a reproducible “organism” that lives in water and multiplies when it enters the human body, which then spread via expelled bodily fluids or excrements of infected individuals.

Elsewhere, rival theories produced surprisingly different interventions. In New York, for example, they believed in the “humors of the body” theory, so people had to resort to self-restraint since anger could increase the choler humor. Yes, amusingly, cholera came from choler, which was a humor that was identified with bile. But the public health consequences were not amusing. Later, streets were washed with pure water to dispel miasma. Although, by 1866, officials were isolating cholera cases and disinfecting their fluids and excrements with lime or fire. It worked! Further evidence for Snow’s hypothesis. 

Snow’s bold hypothesis may look obvious in hindsight, but some prominent physicians were still hesitant to accept it, even after the seminal work of Koch and Pasteur in microbiology and vaccination twenty years later. For example, in Hamburg, as late as 1892, von Pettenkofer—a leading figure in the hygiene movement in Germany—was still happy with the “poison on the ground” theory. The interventions based on this theory were vile: people had to “dig up and haul away the carcasses of dead animals in order to reduce pollution”. Yikes! Cholera cases still did not decrease, so Hamburg people lost faith in von Pettenkofer and eventually turned to Koch’s microbiology.

The paper [1], which I came across on Ben Recht’s blog, has further interesting historical accounts. I’ll close by sharing an excerpt from its conclusion here, which captures the essence of the manuscript and the purpose of this post:

“Snow’s work on cholera, among other examples, shows that sound causal inferences can be drawn from nonexperimental data. […]

Naturally, there is a strong desire to substitute intellectual capital for labor. That is why investigators often try to base causal inference on statistical models. With this approach, P-values play a crucial role. The technology is relatively easy to use and promises to open a wide variety of questions to the research effort. However, the appearance of methodological rigor can be deceptive. Like confidence intervals, P-values generally deal with the problem of sampling error not the problem of bias. Even with sampling error, artifactual results are likely if there is any kind of search over possible specifications for a model, or different definitions of exposure and disease. Models may be used in efforts to adjust for confounding and other sources of bias, but many somewhat arbitrary choices are made. Which variables to enter in the equation? What functional form to use? What assumptions to make about error terms? These choices are seldom dictated either by data or prior scientific knowledge. That is why judgment is so critical, the opportunity for error so large and the number of successful applications so limited. “

~

My concluding thoughts about Snow’s work and the development of science is: causal inference may depend more on smart study design and bias control and less on statistical rituals and its austere rigor.

[1] “Association to Causation: Some Remarks on the History of Statistics”. David Freedman. Statistical Science 1999.

