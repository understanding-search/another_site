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
  { name = "²NII, Tokyo", url = "" },
  { name = "³Imperial College London", url = "" }
]

+++


<d-abstract>
  <p>This is the ﬁrst paragraph of the article. Test a long — dash — here it is.</p>
</d-abstract>

This is the ﬁrst paragraph of the article. Test a long — dash — here it is.

Test for owner’s possessive. Test for "quoting a passage." And another sentence. Or two. Some ﬂopping ﬁns; for diving.

Here’s a test of an inline equation {{<math>}}c = a^2 + b^2{{</math>}}. And then there’s a block equation:
{{<math block="true">}}
  c = \pm \sqrt{ \sum_{i=0}^{n}{a^{222} + b^2}}
{{</math>}}

We can {{<cite bib="mercier2011humans">}} also cite {{<cite bib="gregor2015draw,mercier2011humans">}} external publications. {{<cite bib="dong2014image,dumoulin2016guide,mordvintsev2015inceptionism">}}.

We should also be testing footnotes{{<footnote>}}This will become a hoverable footnote. This will become a hoverable footnote. This will become a hoverable footnote. This will become a hoverable footnote. This will become a hoverable footnote. This will become a hoverable footnote. This will become a hoverable footnote. This will become a hoverable footnote.{{</footnote>}}. There are multiple footnotes, and they appear in the appendix{{<footnote>}}Given I have coded them right. Also, here’s math in a footnote: {{<math>}}c = \sum_0^i{x}{{</math>}}. Also, a citation. Box-ception {{<cite bib="gregor2015draw">}}! {{</footnote>}} as well.

| **First**  | **Second** | **Third** |
|---|---|---|
| 23  | 654 | 23  |
| 14  | 54  | 34  |
| 234  | 54  | 23  |

## Displaying code snippets

Some inline javascript: {{<code language="javascript">}}var x = 25;{{</code>}}

Here’s a javascript code block.
{{<code language="javascript" block="true">}}
var x = 25;
function(x){
  return x * x;
}
{{</code>}}

We also support python.
{{<code language="python" block="true">}}
# Python 3: Fibonacci series up to n
def fib(n):
  a, b = 0, 1
    while a &lt; n:
      print(a, end=' ')
      a, b = b, a+b
{{</code>}}

And guess what! We also have Vega-Lite embedded graphs!

{{<vega id="viz" spec="https://raw.githubusercontent.com/vega/vega/master/docs/examples/bar-chart.vg.json">}}

That’s it for the example article!

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