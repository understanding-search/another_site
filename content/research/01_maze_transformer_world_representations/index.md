+++
title = "Structured World Representations in Maze-Solving Transformers"
description = "Transformers trained to solve mazes form linear representations of the maze, and we find evidence for Adjacency Heads which attend to valid \"next moves\""
date = "2023-11-14"
thumbnail = ""
categories = [
  "demo"
]
draft = "false"
tags = []

vega = true

[distill]
  [distill.supportFiles]
  dtitle = "hi"
  appendix = "appendix.html"
  bibliography = "refs.bib"


[[distill.authors]]
author = "Michael I. Ivanitskiy¹, Alex F. Spies²³, Tilman Räuker, Guillaume Corlouer, Chris Mathwin, Lucia Quirke, Can Rager, Rusheb Shah, Dan Valentine, Cecilia Diniz Behn¹, Katsumi Inoue², Samy Wu Fung¹"
affiliations = [
  { name = "¹Colorado School of Mines", url = "" },
  { name = "²NII Tokyo", url = "" },
  { name = "³Imperial College London", url = "" }
]

+++


<d-abstract>
  <p>Our first paper, investigating the formation of world models and simple path-following circuits in maze-solving transformers, has been accepted to the UniReps workshop at NeurIPS23! The article and accompanying blog post will be made public in the week following November 16th.</p>
</d-abstract>
  
Our first paper, investigating the formation of world models and simple path-following circuits in maze-solving transformers, has been accepted to the UniReps workshop at NeurIPS23! The article and accompanying blog post will be made public in the week following November 16th.


Blog Post: Unraveling the Maze of Transformer Models in Maze-Solving Tasks
Title: "Decoding Mazes: How Small Transformer Models Illuminate Big Machine Learning Mysteries"

🤖 Understanding Transformer Models Through Mazes

As AI continues to advance at a breathtaking pace, researchers are keen to understand the internal workings of sophisticated transformer models. These models, the backbone of numerous practical machine learning applications, remain largely enigmatic due to their size and complexity.

A recent study led by Michael I. Ivanitskiy and team at the Colorado School of Mines and Imperial College London takes an innovative approach to this challenge. They focus on small transformer models tasked with solving mazes, offering a more manageable window into understanding these powerful tools.

🌐 Structured World Representations and Maze Topology

The research reveals that these models consistently develop structured internal representations of maze topology and valid paths. The team discovered that the embedded representations of a single token could linearly decode to reconstruct the entire maze accurately. They identified specific attention heads within the models, termed "adjacency heads," crucial for identifying valid "next steps" in the maze-solving process.

🔍 Experimental Insights: From Theory to Practice

The study employed various interpretability techniques, confirming that the geometry of the models' embedding space correlates with the spatial structure of the mazes. The experiments demonstrated that high-performing models form a linear representation of maze connectivity, decodable at early layers. This finding suggests a structured internal representation enhances the models' systematic problem-solving abilities.

🚀 When Do Models Learn to Represent the Maze?

A fascinating aspect of the research was the observation of grokking-like transitions during training. These transitions, where a model's ability to generalize suddenly improves, coincided with times when the models' internal representations of the maze became more linearly decodable. This correlation hints at the significant role these structured representations play in the models' problem-solving capabilities.

💡 Implications and Future Directions

The study's findings have far-reaching implications. They offer insights into how small transformer models acquire and process knowledge, contributing to our understanding of machine learning's broader landscape. The researchers plan to delve deeper into these findings, hoping to inspire further exploration into the systematic yet elusive behavior of transformer models.

Intrigued? Check out the full study for a deeper dive into the world of transformers and maze-solving: [Link to Research Article]

#AIResearch #MachineLearning #Transformers #MazeSolving #AIUnderstanding

<!-- 
[[distill.authors]]
author = "Michael I. Ivanitskiy"
affiliations = [
  { name = "Colorado School of Mines", url = "" }
]

[[distill.authors]]
author = "Alex F. Spies"
affiliations = [
  { name = "Imperial College London", url = "" },
  { name = "NII Tokyo", url = "" }
]

[[distill.authors]]
author = "Tilman Räuker"
affiliations = []

[[distill.authors]]
author = "Guillaume Corlouer"
affiliations = []

[[distill.authors]]
author = "Chris Mathwin"
affiliations = []

[[distill.authors]]
author = "Lucia Quirke"
affiliations = []

[[distill.authors]]
author = "Can Rager"
affiliations = []

[[distill.authors]]
author = "Rusheb Shah"
affiliations = []

[[distill.authors]]
author = "Dan Valentine"
affiliations = []

[[distill.authors]]
author = "Cecilia Diniz Behn"
affiliations = [
  { name = "Colorado School of Mines", url = "" }
]

[[distill.authors]]
author = "Katsumi Inoue"
affiliations = [
  { name = "National Institute of Informatics, Tokyo", url = "" }
]

[[distill.authors]]
author = "Samy Wu Fung"
affiliations = [
  { name = "Colorado School of Mines", url = "" }
] -->