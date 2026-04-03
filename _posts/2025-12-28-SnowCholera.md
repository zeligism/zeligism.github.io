---
layout: post
title:  "Ye Olde Causal Inference: A Cholera Case Study"
date:   2025-12-28 15:42:43 +0900
academic: false
---

In 1855, John Snow (the English physician, not the prince of Dragonstone) presented a compelling study arguing that cholera was caused by a living organism that contaminates water or food and then multiplies within the body, an argument that preceded the foundations of modern microbiology by twenty years. For comparison, other hypotheses at the time were: miasma (bad air), poison on the ground, or an “imbalance in the humors of the body.” What is especially interesting in hindsight is how Snow demonstrated this causation, which was basically through **experimental design and bias mitigation** rather than by extracting a signal from sampling noise. In particular, sampling error and p-values were not central to his argument.

Some of the observations that led Snow to reach his conclusion were:
1. The lag between exposure and symptoms, which is easier to explain by the multiplication of the cause in the body.
2. Cholera spread along the tracks of human commerce, e.g., sailors in an infected port. Close contact seemed to be necessary for infection even along those tracks, so this effectively rules out the miasma theory.
3. Another case is of a man contracting the disease from contaminated bedding, which was used by someone who recently died from cholera. That's evidence against airborne transmission.
4. One building heavily infected with cholera drew from a contaminated water supply, whereas an adjacent one with a relatively pure water supply was largely spared. This narrowed it down to water as the transmission medium, not air or ground.
5. A spot map of cholera cases during the outbreak of August 1854 showed a striking cluster around the Broad Street pump. Intriguingly, a nearby brewery and a poorhouse had few or no cholera deaths. Turned out they had private water pumps. In the brewery’s case, preferring beer over water might even have saved the workers. Interestingly, the Broad Street pump might also explain cases farther away, such as the lady who sent her servant to draw from this pump because she “so much liked the taste”.
6. Ecological data, i.e., **statistical** evidence (finally!), showed a clear correlation between water quality and cholera death rates. Snow was well-aware that sampling bias and confounders can distort the comparison, but the two water companies in the study were competitors serving very similar demographics, so the people had little idea where the water was coming from, which made for a sufficiently random sample. Take a look at the table below (Snow’s Table IX). We don’t need sophisticated analyses or assumptions to see that there was something badly wrong with Southwark and Vauxhall’s water.

| Water supplier | Deaths per 10,000 houses |
| --- | ---: |
| Southwark and Vauxhall | 315 |
| Lambeth | 37 |
| Rest of London | 59 |

Overall, these observations were enough to make for a remarkably strong causal case supporting Snow’s hypothesis: *that cholera is caused by a living organism that lives in water, multiplies when it enters the human body, and then spreads through expelled bodily fluids or excrements of infected individuals.*

~

Elsewhere, rival theories produced surprisingly different interventions. In New York, for example, they believed in the “humors of the body” theory, so people were encouraged to practice self-restraint since anger could increase the choler humor. Yes, amusingly, cholera came from choler, which was a humor that was identified with bile. But the public health consequences were not amusing. Later, streets were washed with pure water to dispel miasma. However, by 1866, officials were isolating cholera cases and disinfecting their fluids and excrements with lime or fire. It worked! Further evidence consistent with Snow’s view. 

Snow’s bold hypothesis may look obvious in hindsight, but some prominent physicians were still hesitant to accept it, even after the seminal work of Koch and Pasteur in microbiology and vaccination twenty years later. For example, in Hamburg, as late as 1892, von Pettenkofer—a leading figure in the hygiene movement in Germany—was still happy with the “poison on the ground” theory. He was so committed to this view that he famously drank a vial of cholera cultures to prove that the organism alone couldn’t cause disease without the right soil conditions. (He got diarrhea for a few days but turned out fine. Vindication!) The interventions based on this “poison on the ground” theory were vile: people had to “dig up and haul away the carcasses of dead animals in order to reduce pollution”. Yikes! Cholera cases still did not decrease, so Hamburg people lost faith in von Pettenkofer and eventually turned to Koch’s microbiology.

Meanwhile, neighboring Altona drew from the same Elbe river but *sand-filtered its water*, and had far fewer cases—yet another comparison that required no p-value to interpret.

~

This priority of **design over analysis** is precisely the point Freedman drives home more than a century later.
His paper [1], which I came across on Ben Recht’s blog, has further interesting historical accounts. I’ll close with an excerpt from its conclusion here, which captures the essence of the manuscript and the purpose of this post:

> Snow’s work on cholera, among other examples, shows that sound causal inferences can be drawn from nonexperimental data. […]
\
\
Naturally, there is a strong desire to substitute intellectual capital for labor. That is why investigators often try to base causal inference on statistical models. With this approach, P-values play a crucial role. The technology is relatively easy to use and promises to open a wide variety of questions to the research effort. However, the appearance of methodological rigor can be deceptive. Like confidence intervals, P-values generally deal with the problem of sampling error not the problem of bias. Even with sampling error, artifactual results are likely if there is any kind of search over possible specifications for a model, or different definitions of exposure and disease. Models may be used in efforts to adjust for confounding and other sources of bias, but many somewhat arbitrary choices are made. Which variables to enter in the equation? What functional form to use? What assumptions to make about error terms? These choices are seldom dictated either by data or prior scientific knowledge. That is why judgment is so critical, the opportunity for error so large and the number of successful applications so limited. “

~

The lesson that you should take away from Snow’s work is this: *causal inference depends less on statistical rituals than on designing comparisons that mitigate bias.*

[1] “*Association to Causation: Some Remarks on the History of Statistics*”. David Freedman. Statistical Science 1999.
